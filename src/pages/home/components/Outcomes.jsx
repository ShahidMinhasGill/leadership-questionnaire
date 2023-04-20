import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import img1 from "../../../assets/images/1.jpg";
import carefulcollaborators from "../../../assets/images/carefulcollaborators.jpg";
import culturecreators from "../../../assets/images/culturecreators.jpg";
import determined from "../../../assets/images/determined.jpg";
import IntuitiveDecider from "../../../assets/images/IntuitiveDecider.jpg";
import specialistleaders from "../../../assets/images/specialistleaders.jpg";
import { fetchUserResult } from "../service/HomeApi";
export default function Outcomes() {
  const dispatch = useDispatch();
  const fetchResult = useSelector((state) => state.homeReducer.data);
  // setUserResult(JSON.parse(fetchResult));
  console.log("fetchResult", fetchResult);
  const [dataFormate, setDataFormate] = useState([]);

  const [result, setResult] = useState({
    description: "",
    description2: "",
    description3: "",
    description4: "",
    description5: "",
    external_links: "",
    external_links_text: "",
    get_image: "",
    name: "",
    title: "",
  });

  const description2Lines = fetchResult?.leadership_type?.description2?.split("\r");
  const description3Lines =  fetchResult?.leadership_type?.description3?.split("”");
  const description5Lines =  fetchResult?.leadership_type?.description5?.split("?");
  const description4Lines =  fetchResult?.leadership_type?.description4?.split("__");
  const description6Lines =  fetchResult?.leadership_type?.description6?.split("__");
  const description7Lines =  fetchResult?.leadership_type?.description7?.split("__");
  const description8Lines =  fetchResult?.leadership_type?.description8?.split("__");
  const description9Lines =  fetchResult?.leadership_type?.description9?.split("__");
  const description10Lines =  fetchResult?.leadership_type?.description10?.split("__");
  const description11Lines =  fetchResult?.leadership_type?.description11?.split("__");
  const description13Lines =  fetchResult?.leadership_type?.description13?.split("__");
  const description14Lines =  fetchResult?.leadership_type?.description14?.split("__");
  // const description12Lines =  fetchResult?.leadership_type?.description12?.split("__");
  console.log('description12Lines',fetchResult?.leadership_type);
  const [links, setLinks] = useState([]);

  const externalLinks = fetchResult?.leadership_type?.external_links?.split(",");
  const externalLinksText = fetchResult?.leadership_type?.external_links_text?.split(",");
  console.log('externalLinks',externalLinks);
  

 
  useEffect(() => {
    dispatch(fetchUserResult());
  }, []);
  useEffect(() => {
    if (fetchResult?.leadership_type) {
      const linksAndTexts = externalLinks.map((link, index) => {
        const linkText = externalLinksText[index];
        return {
          link: link,
          text: linkText.trim(),
        };
      });
     
      setLinks(linksAndTexts);
    }
  }, [fetchResult]);
  function handleDownloadClick() {
    window.location.href = description7Lines[2];
  }
  const leaderShiptype = fetchResult?.leadership_type?.name
  console.log('leaderShiptype',leaderShiptype);
  return (
    <div className="row outcomes d-flex justify-content-center">
      {fetchResult?.leadership_type ? (
        // <div>
        //   <h1>{fetchResult.leadership_type.name}</h1>
        //   <p>{fetchResult.leadership_type.title}</p>
        //   <img src={fetchResult.leadership_type.get_image} alt="Leadership Type Image" />
        //   <p>{fetchResult.leadership_type.description}</p>
        //   <ul>
        //     <li>{fetchResult.leadership_type.description2}</li>
        //     <li>{fetchResult.leadership_type.description3}</li>
        //     <li>{fetchResult.leadership_type.description4}</li>
        //     <li>{fetchResult.leadership_type.description5}</li>
        //   </ul>
        //   <p>External Links:</p>
        //   <ul>
        //     {fetchResult.leadership_type.external_links.split(",").map((link, index) => (
        //       <li key={index}><a href={link}>{link}</a></li>
        //     ))}
        //   </ul>
        // </div>
        <>
          <div className="col-11 top-sec mt-4">
            <h2>{fetchResult.leadership_type.title}</h2>

            {/* <p>{fetchResult.leadership_type.description}</p> */}
            <p dangerouslySetInnerHTML={{__html: fetchResult.leadership_type.description}} />
            <h2 className="mt-4" dangerouslySetInnerHTML={{__html: description2Lines[0]}} />
            {/* <p>
              {description2Lines[2]}
            </p> */}
            {description2Lines.slice(1).map((line, index) => (
                     <div key={index} dangerouslySetInnerHTML={{__html: line}} />

            ))}
          </div>
          {description3Lines.length > 0 && description3Lines[0] &&

          <div
            className="col-11  friend-sec"
            style={{ background: "#F3F3F5"}}
          >
              <span dangerouslySetInnerHTML={{__html: description3Lines[0]}} />
              <span className="pera">{description3Lines[1]}​ </span>
          </div>
}
          <div className="col-11 compare-sec ">
            <hr className="mt-5" />
            <div className="row mt-4 ">
              <div className="col-6 ">
                <h2 dangerouslySetInnerHTML={{__html: description4Lines[0]}} />
                <p className="mt-4">
                 {/* {description4Lines[1]}   */}
                 <span  dangerouslySetInnerHTML={{__html: description4Lines[1]}}></span>
   
                </p>
              </div>
              <div className="col-6">
          
                {leaderShiptype === 'Determined Driver' && (
                  <img src={determined} alt="" />
                )}
                {leaderShiptype === 'Intuitive Decider' && (
                  <img src={IntuitiveDecider} alt="" />
                )}
                {leaderShiptype === 'Culture Creator' && (
                  <img src={culturecreators} alt="" />
                )}
                {leaderShiptype === 'Methodical Specialist' && (
                  <img src={specialistleaders} alt="" />
                )}
                {leaderShiptype === 'Careful Collaborator' && (
                  <img src={carefulcollaborators} alt="" />
                )}
                {leaderShiptype === 'Collective Adventurer' && (
                  <img src={img1} alt="" />
                )}

           
                {/* <img src={img1} alt="" />
                {fetchResult?.leadership_type?.get_image ? (
                  <img src={fetchResult?.leadership_type?.get_image} alt="" />
                ) : (
                  <img src={img1} alt="" />
                )} */}
              </div>
            </div>
            <hr />
            <hr />
            <div className="pera-" dangerouslySetInnerHTML={{__html: description5Lines[0]}} />
            <div
              className="friend-sec"
              style={{ background: "#59358C" }}
            >
              <div className="pera-2" dangerouslySetInnerHTML={{__html: description5Lines[1]}} />
                <button className="btn-style">Find out more</button>
            </div>
          </div>
          {/* <div className="col-11 card-sec">
            <div className="row">
              <div className="col-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">How to communicate effectively</h5>
                    <p class="card-text">
                      Getting your message across is super important. So, take a
                      look at this course to look at:
                    </p>
                    <ul>
                      <li>How to avoid miscommunication.</li>
                      <li>
                        How to use your non-verbal communication body in your
                        favour!
                      </li>
                    </ul>
                    <button className="btn-style">Download here</button>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">How to communicate effectively</h5>
                    <p class="card-text">
                      Getting your message across is super important. So, take a
                      look at this course to look at:
                    </p>
                    <ul>
                      <li>How to avoid miscommunication.</li>
                      <li>
                        How to use your non-verbal communication body in your
                        favour!
                      </li>
                    </ul>
                    <button className="btn-style">Download here</button>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">How to communicate effectively</h5>
                    <p class="card-text">
                      Getting your message across is super important. So, take a
                      look at this course to look at:
                    </p>
                    <ul>
                      <li>How to avoid miscommunication.</li>
                      <li>
                        How to use your non-verbal communication body in your
                        favour!
                      </li>
                    </ul>
                    <button className="btn-style">Download here</button>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">How to communicate effectively</h5>
                    <p class="card-text">
                      Getting your message across is super important. So, take a
                      look at this course to look at:
                    </p>
                    <ul>
                      <li>How to avoid miscommunication.</li>
                      <li>
                        How to use your non-verbal communication body in your
                        favour!
                      </li>
                    </ul>
                    <button className="btn-style">Download here</button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-11 botom-sec">
            <hr />
            <div className="row">
            {description6Lines.length > 0 && description6Lines[0] &&

              <div className="col-6">
                <div class="card">
                  <div class="card-body">
                  <a className="card-title" dangerouslySetInnerHTML={{__html: description6Lines[0]}} ></a>
                    <p class="card-text pt-3">
                      <span  dangerouslySetInnerHTML={{__html: description6Lines[1]}}></span>
                    </p>
                    <button  className="btn-style" dangerouslySetInnerHTML={{__html: description6Lines[2]}}></button>
                    {/* <button onClick={handleDownloadClick} className="btn-style">Download here</button> */}
                  </div>
                </div>
              </div>
}
            {description7Lines.length > 0 && description7Lines[0] &&

              <div className="col-6">
                <div class="card">
                  <div class="card-body">
                  <a className="card-title" dangerouslySetInnerHTML={{__html: description7Lines[0]}} ></a>
                    <p class="card-text pt-3">
                      <span  dangerouslySetInnerHTML={{__html: description7Lines[1]}}></span>
                    </p>
                    <button  className="btn-style" dangerouslySetInnerHTML={{__html: description7Lines[2]}}></button>
                    {/* <button onClick={handleDownloadClick} className="btn-style">Download here</button> */}
                  </div>
                </div>
              </div>
}
              {description8Lines.length > 0 && description8Lines[0] &&

              <div className="col-6">
                <div class="card">
                  <div class="card-body">
                  <a className="card-title" dangerouslySetInnerHTML={{__html: description8Lines[0]}} ></a>
                    <p class="card-text pt-3">
                      <span  dangerouslySetInnerHTML={{__html: description8Lines[1]}}></span>
                    </p>
                    <button  className="btn-style" dangerouslySetInnerHTML={{__html: description8Lines[2]}}></button>

                    {/* <button onClick={handleDownloadClick} className="btn-style">Download here</button> */}
                  </div>
                </div>
              </div>
}
              {description9Lines.length > 0 && description9Lines[0] &&

              <div className="col-6">
                <div class="card">
                  <div class="card-body">
                  <a className="card-title" dangerouslySetInnerHTML={{__html: description9Lines[0]}} ></a>
                    <p class="card-text pt-3">
                      <span  dangerouslySetInnerHTML={{__html: description9Lines[1]}}></span>
                    </p>
                    <button  className="btn-style" dangerouslySetInnerHTML={{__html: description9Lines[2]}}></button>

                    {/* <button onClick={handleDownloadClick} className="btn-style">Download here</button> */}
                  </div>
                </div>
              </div>
              }
              {description10Lines.length > 0 && description10Lines[0] &&

              <div className="col-6">
                <div class="card">
                  <div class="card-body">
                  <a className="card-title" dangerouslySetInnerHTML={{__html: description10Lines[0]}} ></a>
                    <p class="card-text pt-3">
                      <span  dangerouslySetInnerHTML={{__html: description10Lines[1]}}></span>
                    </p>
                    <button  className="btn-style" dangerouslySetInnerHTML={{__html: description10Lines[2]}}></button>

                    {/* <button onClick={handleDownloadClick} className="btn-style">Download here</button> */}
                  </div>
                </div>
              </div>
              }
              {description11Lines.length > 0 && description11Lines[0] &&

              <div className="col-6">
                <div class="card">
                  <div class="card-body">
                  <a className="card-title" dangerouslySetInnerHTML={{__html: description11Lines[0]}} ></a>
                    <p class="card-text pt-3">
                      <span  dangerouslySetInnerHTML={{__html: description11Lines[1]}}></span>
                    </p>
                    <button  className="btn-style" dangerouslySetInnerHTML={{__html: description11Lines[2]}}></button>

                    {/* <button onClick={handleDownloadClick} className="btn-style">Download here</button> */}
                  </div>
                </div>
              </div>
              }
          
             
            </div>
          </div>
          <div className="col-11 botom-sec">
            <hr />
        
  <div className="row">
  {description13Lines.length > 0 && description13Lines[0] &&
             <>
             <h2 dangerouslySetInnerHTML={{__html: description13Lines[0]}}></h2>
               <div className="col-6">
                 <div class="card">
                   <div class="card-body">
                     <p class="card-text pt-3" dangerouslySetInnerHTML={{__html: description13Lines[1]}}>
                     </p>
                   </div>
                 </div>
               </div>
             </>
            }
              {description14Lines.length > 0 && description14Lines[0] &&
              <div className="col-6">
                <div class="card">
                  <div class="card-body">
                    <p class="card-text pt-3" dangerouslySetInnerHTML={{__html: description14Lines[0]}}>
                    </p>
                  </div>
                </div>
              </div>
               }
  </div>


  


          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
