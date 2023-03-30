// Question Types
// 1. MCQs | Multiple Choice | single

import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUser,fetchQuestions, fetchUserProgress, fetchUserResult, postResponse } from "../service/HomeApi"
import { BsTools } from 'react-icons/bs';
import { toast } from "react-toastify";
// import { fetchUser } from "../../../components/modals/service/authApi";
const QuestionSec = () => {
  // const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  // const [percentage, setPercentage] = useState(0);
  const [checked, setChecked] = useState('');
  const dispatch = useDispatch();
  const mainColRef = useRef(null);
  // var item_value = sessionStorage.getItem("user");
  const getUser = sessionStorage.getItem('user');
  const token = sessionStorage.getItem('token');
  const user = JSON.parse(getUser);
  // let userId = 1
  // if (token) {
  //    userId =  user?.id
  // }
 console.log('userId',user?.id);

// const item_value = JSON.parse(sessionStorage.getItem(userId));
  // const formattedId = {"id": item_value.id};
  // console.log('formattedId',user.id);
  const [sentRespons, setSentRespons] = useState({
    user_id: 0,
    question: 0,
    answer :''
  })
  const [userResult, setUserResult] = useState({
    name: '',
    description: '',
  })
  const [result, setResult] = useState({
    completed_percentage: 0,
    completed_question: 0,
    question_left: 0,
    last_completed_question: 0,
  })
  const curruntUser = useSelector((state) => state.homeReducer.user);
  const fetchResult = useSelector((state) => state.homeReducer.data);
  // setUserResult(JSON.parse(fetchResult));
  console.log('fetchResult',fetchResult?.leadership_type?.name);

  const [userId, setUserId] = useState(0);

  const progressResponse = useSelector((state) => state.homeReducer.userProgress);
  useEffect(() => {
    if (progressResponse && progressResponse.length > 0) {
      const data = progressResponse[0];
      setResult({
        completed_percentage: data.completed_percentage,
        completed_question: data.completed_question,
        question_left: data.question_left,
        last_completed_question: data.last_completed_question,
      });
    }
  }, [progressResponse]);
  
  console.log('result', result);
  const getQuestions = useSelector((state) => state.homeReducer.questions);
const [activeQuestion, setActiveQuestion] = useState(0);
const [questions, setQuestions] = useState([]);
const [loading, setLoading] = useState(true);

const fetchQuestionsformat = async () => {
  try {
    const formattedQuestions = await Promise.all(
      getQuestions.map(async (question) => ({
        question: question.question_text,
        questionId: question.id,
        choices: ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree'],
        // choices: ['-2', '-1', '0', '1', '2'],
        // type: 'MCQs',
        // answer: question.answer,
      }))
    );
    setQuestions(formattedQuestions);
    
    setLoading(false);
  } catch (error) {
    console.error(error);
  }
};
//  const token = localStorage.getItem('token')
//  console.log('token',token.user_id);

useEffect(() => {
  if (curruntUser) {
    setUserId(user?.id);
  }
}, []);

useEffect(() => {
  // dispatch(fetchUser(token));
  dispatch(fetchQuestions());
  dispatch(fetchUser());
}, []);
// useEffect(() => {
// }, [token]);

console.log('setUserResult',userResult);
useEffect(() => {
  fetchQuestionsformat();
}, [getQuestions]);
useEffect(() => {
  setResult((prev) => ({
    ...prev,
    // completed_percentage: prev.completed_percentage + (100/25),
    completed_question: activeQuestion +1,
    // question_left: question.length - activeQuestion,
  }))
  // console.log('question_left',result.question_left);
}, [activeQuestion]);

useEffect(() => {
  // Get the progress bar state from localStorage
  const storedState = localStorage.getItem('progressBarState');
  console.log('storedState', storedState);
  if (storedState) {
    setResult(JSON.parse(storedState));
  }
}, []);

useEffect(() => {
  // Update localStorage whenever the progress bar state is updated
  localStorage.setItem('progressBarState', JSON.stringify(result));
  console.log('updatedState', result);
}, [result]);



if (loading) {
  return <div>Loading...</div>;
}

const question = questions[activeQuestion]?.question;
const choices = questions[activeQuestion]?.choices;
const questionId = questions[activeQuestion]?.questionId;

  function handleCheckboxChange(event) {
    const { name } = event.target;
    setChecked(name === checked ? '' : name);
  }
  const nextStep = () => {
  
    if (result.completed_percentage >= 100) return;
      setResult((prev) => ({
        ...prev,
        completed_percentage: prev.completed_percentage + (100 / 24),
      }));
      console.log('completed_question', result.completed_percentage);
  };
 
  const handleBack = ()=>{
    // if (result.completed_percentage >= 100) return;
    setResult((prev) => ({
      ...prev,
      completed_percentage: prev.completed_percentage - (100 / 24),
    }));
    console.log('completed_question', result.completed_percentage);
    setActiveQuestion((prev) => prev - 1)
  }
  const onClickHome = ()=>{
    setResult((prev) => ({
      ...prev,
      completed_percentage: prev.completed_percentage = 0,
      question_left: 0,
      // completed_question: 0,

    }));
    // dispatch(fetchQuestions());
    setShowResult(false)

    // console.log('completed_question', result.completed_percentage);
    // setActiveQuestion((prev) => prev - 1)
    // setActiveQuestion((prev) => prev = 0)
    setActiveQuestion(0)
  }
  const onClickNext = () => { 
    if (!token) {
      // User ID not found, show error message
      toast.error('Please Login first');
    } else{
      dispatch(postResponse(sentRespons));
      setSelectedAnswerIndex(null)
      setChecked(null) 
    
      console.log('question_left',result.question_left);
      setResult((prev) =>
        selectedAnswer
          ? {
              ...prev,
              score: prev.score + 5,
              correctAnswers: prev.correctAnswers + 1,
              
            }
          : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
      )
      if (activeQuestion !== questions.length - 1) {
        setActiveQuestion((prev) => prev + 1)
        nextStep()
      } else {
        // setUserResult((prev) => ({
        //   ...prev,
        //   name: fetchResult?.leadership_type?.name,
        //   description: fetchResult?.leadership_type?.description,
        // }))
        dispatch(fetchUserResult());
        nextStep()
        setActiveQuestion(0)
        setActiveQuestion(0)
        dispatch(fetchUserProgress(userId))
        setShowResult(true)
        localStorage.removeItem('progressBarState');

      }
    }
  }

  const onAnswerSelected = (answer, index) => {
    const radioButtons = mainColRef.current.querySelectorAll('input[type="radio"]');
    console.log('radioButtons',radioButtons);
    radioButtons.forEach(radioButton => {
      radioButton.checked = true;
      console.log('radioButtons',radioButton);
    });
    // handleCheckboxChange(radioButtons); // Call the onChange handler to update state
    setResult((prev) => ({
      ...prev,
      question_left: questions.length - activeQuestion - 1,
    }))
    if (answer === 'Strongly Agree') {
      answer = -2;
    }else if (answer === 'Agree') {
      answer = -1;
    }else if (answer === 'Neutral') {
      answer = 0;
    }else if (answer === 'Disagree') {
      answer = 1;
    }else if (answer === 'Strongly Disagree') {
      answer = 2;
    }
    setSentRespons(prevState => ({
      ...prevState,
      user_id :userId,
      answer: answer,
      question: questionId,
    }))
    
    console.log('completed_question',result.completed_question);
    console.log(answer);
    setSelectedAnswerIndex(answer)
    // if (answer === correctAnswer) {
    //   setSelectedAnswer(true)
    // } else {
    //   setSelectedAnswer(false)
    // }
  }

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

  return (
    <div className="quiz-container" >
      <div className="row toop-sec">

       <div className="col-8 d-flex align-items-center ">
          <button onClick={onClickHome}>Back to Homepage</button>
        </div>
             <div className="col-lg-8 col-md-12 ">
              <h3><BsTools className="tool-icon"/>The Leadership Compass</h3>
          </div>
             <div className="col-lg-10 col-md-12 ">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec porttitor massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam rhoncus vel massa et viverra. Praesent et lobortis metus, nec tempus purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
             </p>
          </div>
      </div>
           <div className="row question-sec p-3" style={{borderRadius:'10px 10px 0px 0px'}}>
        <div className="col-3 d-flex align-items-center back-btn">
          <button onClick={handleBack}
          disabled={(activeQuestion === 0)}
          >
          {/* <button 
           onClick={onClickNext}
           disabled={selectedAnswerIndex === null}
          >
          {activeQuestion === 1  ? disabled : enabled}
          </button> */}
            Back</button>
        </div>
        <div className="col-8">
          <div className="col-7">
           
            <h3>Question <span className="active-question-no " style={{marginLeft:'5px'}}>
              {(activeQuestion + 1)}
            </span>   
            <span className="total-question">
              /{addLeadingZero(questions.length)}
            </span></h3>
          </div>
          <ProgressBar percentage={result.completed_percentage} />
        </div>
      </div>
      <div >
           <div className="row ask-quistion d-flex justify-content-center mt-5">
            {!showResult ? (
        <div >
        
          <div className="col-11 d-flex mx-auto">
          <div>
            <span className="active-question-no">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="total-question">
              /{addLeadingZero(questions.length)}
            </span>
          </div>
          {/* <div className="col-1 text-center">
            <h2>{addLeadingZero(activeQuestion + 1)}</h2>
          </div> */}
          <div className="col-lg-11 col-md-12 mt-3 m-3 ">
            <h2>
            {question}
            {/* <li >{questionId}</li> */}
            
            </h2>
          </div>
        </div>
            <div className="col-9 mt-4 m-3 mx-auto">
          <h2>Select your response</h2>
        </div>
        <div className="col-10 mt-3 mx-auto">
        {choices?.map((answer, index) => (
          <div  onClick={() => onAnswerSelected(answer, index)} className={`col-lg-6 col-12 d-flex ${index % 2 !== 1 ? 'question-bg' : 'question-bg2'}`} ref={mainColRef}>
            <div className="col-lg-1 col-2 d-flex justify-content-center align-items-center">
              <input
                class="form-check-input"
                type="radio"
                name={answer}
                checked={checked === answer}
                onChange={handleCheckboxChange}
               
                id={`flexCheckChecked${index}`}
              />
              {/* <h2>{index}</h2> */}
            </div>
            <div className="col-lg-6 col-10 ">
              <h2>{answer}</h2>
            </div>
          </div>
             ))}
        </div>
          {/* <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                  selectedAnswerIndex === index ? 'selected-answer' : null
                }
              >
                {answer}
              </li>
            ))}
          </ul> */}
            
      <div className="row question-sec mt-5 p-3" style={{borderRadius:'0px 0 10px 15px'}} >
        <div className="col-lg-1 col-md-2 col-4 d-flex align-items-center back-btn">
          <button 
           onClick={onClickNext}
           disabled={selectedAnswerIndex === null}
          >
          {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
          
        </div>
        <div className="col-lg-2 col-md-3 col-6 d-flex align-items-center">
        <h3>Question <span className="active-question-no" style={{marginLeft:'15px',fontSize:'24px'}}>
              {(activeQuestion + 1)}
            </span>   
            <span className="total-question" style={{marginTop:'10px'}}>
              /{addLeadingZero(questions.length)}
            </span></h3>
        </div>
      </div>
          {/* <div className="flex-right">
            <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}
            >
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div> */}
        </div>
      ) : (
        <div className="result">
          <h3>Result</h3>
      
 
         
          <p>
          Leadership Type:<span> {fetchResult?.leadership_type?.name}</span>
          </p>
          {/* <p>
          Discripton:<span> {fetchResult?.leadership_type?.description}</span>
          </p> */}
          {/* Discripton:<span> {userResult.description}</span> */}
          {/* <p>
          Completed Question:<span> {progressResponse.completed_question}</span>
          </p>
          <p>
          Question left:<span> {progressResponse.question_left}</span>
          </p>
          <p>
          Last Completed Question:<span> {progressResponse.last_completed_question}</span>
          </p> */}
        </div>
      )}
            </div>
   
    </div>
    </div>
  )
}

const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      <Filler percentage={props.percentage} />
    </div>
  );
};

const Filler = (props) => {
  return <div className="filler" style={{ width: `${props.percentage}%` }} />;
};

export default QuestionSec;
