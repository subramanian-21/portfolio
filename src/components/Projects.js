import chatthruport from "../images/chatthrupotrait.png";
import hangman from "../images/hangman.png";
import imagetoolkitport from "../images/itk.png";
import mathmagician from "../images/mathmagician.png";
import kumazon from "../images/kumazon.png";
import playfolio from "../images/playfolio.png";
import kumazonfull from "../images/kumazonfull.png";
import playfoliofull from "../images/playfoliofull.png";
import itkfull from "../images/itkfull.png";
import flickart from "../images/flickart.png";
import React, { useRef, useState } from "react";

const Projects = (props) => {
  const [bool, changeBool] = useState(true);

  return (
    <div className="p-body flex justify-center">
      <div className="flex items-center">
        <h1 className="main-headings p-5">PROJECTS</h1>
        <div
          onClick={() => changeBool(!bool)}
          className="bored bg-[#282c34] w-[150px] flex justify-center  items-center h-[50px] cursor-pointer   rounded-full"
        >
          change view
        </div>
      </div>

      <div className="projects-body">
        <hr className="h-[5px] bg-white rounded-xl flex" />
        {bool ? (
          <div className=" flex flex-col items-center">
            <a
              href="https://github.com/thugperfect/ImageToolKit"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-4/5 h-[400px] flex items-center hover:bg-slate-600"
            >
              <div className="w-full flex justify-center">
                <div className="w-[130px] sm:w-[300px] lg:w-[400px]">
                  <div className="text-2xl">ImageToolKit</div>
                  <div className="text-[12px] sm:text-[15px]">
                    ImageToolkit is a image altering application that does
                    fetches the image and converts it into required at the
                    backend using JIMP
                  </div>
                  <div className="text-gray-400">
                    Tech Stack :Angular, Express, Jimp, Cors, ...
                  </div>
                </div>
              </div>
              <div
                className="right w-[300px] h-[400px] image-design"
                style={{ backgroundImage: `url(${itkfull})` }}
                alt=""
              ></div>
            </a>

            <a
              href="https://github.com/thugperfect/Flickart"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-4/5 h-[300px] flex items-center hover:bg-slate-600"
            >
              <div
                className="right w-[300px] h-[400px] image-design z-10 "
                style={{ backgroundImage: `url(${flickart})` }}
                alt=""
              ></div>
              <div className="w-full flex justify-center">
                <div className="w-[130px] sm:w-[300px] lg:w-[400px]">
                  <div className="text-2xl">Flickart</div>
                  <div className="text-[12px] sm:text-[15px]">
                    This is an e-commerce website built with React.js, Redux
                    Toolkit, and Context API. It allows users to browse
                    products, add items to the cart, and perform searches across
                    various categories. The project includes debouncing for
                    efficient search queries, lazy loading for optimized
                    performance.
                  </div>
                  <div className="text-gray-400">Tech Stack :React, Redux...</div>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/thugperfect/Playfolio"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-4/5  h-[400px] text-white flex items-center hover:bg-slate-600"
            >
              <div className="w-full flex justify-center">
                <div className="w-[130px] sm:w-[300px] lg:w-[400px]">
                  <div className="text-2xl">Playfolio</div>
                  <div className="text-[12px] sm:text-[15px]">
                    PlayFolio is a web application built with Angular that
                    allows users to explore a wide range of games using the RAWG
                    API. Users can search for games, view game details, and
                    discover new titles.
                  </div>
                  <div className="text-gray-400">
                    Tech Stack :Angular, RAWG API...
                  </div>
                </div>
              </div>
              <div
                className="right w-[300px] h-[400px] image-design "
                style={{ backgroundImage: `url(${kumazonfull})` }}
                alt=""
              ></div>
            </a>
          </div>
        ) : (
          <div className="">
            <div className="m3">
              <div className="m1">
                <div className="p1">
                  <div className="q1">
                    <div className="o1">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/thugperfect/hangman-game"
                        className="n1"
                      >
                        {" "}
                        <img className="img" src={hangman} alt="" />
                        <div className="hangman">
                          <div className="pro-main">
                            {" "}
                            <div className="title">Hangman Game</div>
                            <div className="sub">
                              Hangman game using vanilla Js
                            </div>
                            <div className="stack">Tech Stack :HTML,CSS,JS</div>
                          </div>
                        </div>
                      </a>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/thugperfect/math-magicians"
                        className="n2"
                      >
                        <img className="img" src={mathmagician} alt="" />

                        <div className="mathmagician">
                          <div className="pro-main">
                            {" "}
                            <div className="title">Math Magician</div>
                            <div className="sub">
                              It is just a riddle app with calculator which
                              fetches questions from json
                            </div>
                            <div className="stack">
                              Tech Stack :React, Sass, JSON
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://github.com/thugperfect/ImageSearcher"
                      className="o2"
                    >
                      <img className="img" src={kumazon} alt="" />

                      <div className="imagefetch">
                        <div className="pro-main">
                          {" "}
                          <div className="title">Image Fetch</div>
                          <div className="sub">
                            An Ecommerce App with product searching and Adding
                            to Cart feature
                          </div>
                          <div className="stack">
                            Tech Stack :React, Redux-toolkit, React-Redux...
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/thugperfect/ImageToolKit"
                    className="q2"
                  >
                    <img className="img" src={imagetoolkitport} alt="" />

                    <div className="imagetoolkit">
                      <div className="pro-main">
                        {" "}
                        <div className="title">ImageToolKit</div>
                        <div className="sub">
                          ImageToolkit is a image altering application that does
                          fetches the image and converts it into required at the
                          backend using JIMP
                        </div>
                        <div className="stack">
                          Tech Stack :Angular, Express, Jimp, Cors, ...
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/thugperfect/playfolio"
                  className="p2"
                >
                  <img className="img" src={playfolio} alt="" />
                  <div className="newspro">
                    <div className="pro-main">
                      {" "}
                      <div className="title">PlayFolio</div>
                      <div className="sub">
                        Playfolio contains all games fetched from RAWG Api
                      </div>
                      <div className="stack">Tech Stack :Angular, Api</div>
                    </div>
                  </div>
                </a>
              </div>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/thugperfect/chatThru"
                className="m2"
              >
                <img className="img" src={chatthruport} alt="none" />
                <div className="chatthru">
                  <div className="pro-main">
                    {" "}
                    <div className="title">ChatThru</div>
                    <div className="sub ">
                      A Social Media Application that provides users with CRUD
                      operations..
                    </div>
                    <div className="stack">
                      Tech Stack : React, Express, Mongoose, MongoDB, ..
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        )}

        <hr className="h-[5px] bg-white rounded-xl" />
      </div>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://github.com/thugperfect?tab=repositories"
      >
        <button className="viewmore">View More Projects...</button>
      </a>
    </div>
    //https://github.com/thugperfect?tab=repositories
  );
};

export default Projects;

/*
<div className="m3">
            <div className="m1">
                <div className="p1">
                    <div className="q1">
                        <div className="o1">
                            <a rel='noreferrer' target="_blank" href='https://github.com/thugperfect/hangman-game' className="n1"  > <img className='img' src={hangman} alt=""/>
                            <div className="hangman">
                                <div className='pro-main'> <div className='title'>Hangman Game</div>
                                <div className='sub'>Hangman game using vanilla Js</div>
                                <div className='stack'>Tech Stack :HTML,CSS,JS</div>
                                </div>
                               
                            </div>
                            </a>
                            <a rel='noreferrer' target="_blank" href='https://github.com/thugperfect/math-magicians' className="n2"><img className='img' src={mathmagician} alt=""/>
                            
                            <div className='mathmagician'>
                            <div className='pro-main'> <div className='title'>Math Magician</div>
                                <div className='sub'>It is just a riddle app with calculator which fetches questions from json</div>
                                <div className='stack'>Tech Stack :React, Sass, JSON</div></div></div></a>
                        </div>
                        <a rel='noreferrer' target="_blank" href='https://github.com/thugperfect/ImageSearcher' className="o2"><img className='img' src={kumazon} alt=""/>
                        
                        <div className='imagefetch'>
                        <div className='pro-main'> <div className='title'>Image Fetch</div>
                                <div className='sub'>An Ecommerce App with product searching and Adding to Cart feature</div>
                                <div className='stack'>Tech Stack :React, Redux-toolkit, React-Redux...</div></div></div></a>
                    </div>
                    <a rel='noreferrer' target="_blank" href='https://github.com/thugperfect/ImageToolKit' className="q2"><img className='img' src={imagetoolkitport} alt=""/>
                    
                    <div className='imagetoolkit'><div className='pro-main'> <div className='title'>ImageToolKit</div>
                                <div className='sub'>ImageToolkit is a image altering application that does fetches the image and converts it into required at the backend using JIMP</div>
                                <div className='stack'>Tech Stack :Angular, Express, Jimp, Cors, ...</div></div></div></a>
                </div>
                <a rel='noreferrer' target="_blank" href='https://github.com/thugperfect/playfolio' className="p2">
                    <img className='img' src={playfolio} alt=""/>
                    <div className='newspro'><div className='pro-main'> <div className='title'>PlayFolio</div>
                                <div className='sub'>Playfolio contains all games fetched from RAWG Api</div>
                                <div className='stack'>Tech Stack :Angular, Api</div>
                                </div></div>
                </a>
            </div>
            <a rel='noreferrer' target="_blank" href='https://github.com/thugperfect/chatThru' className="m2">
                <img className="img" src={chatthruport} alt="none"/>
                <div className='chatthru'><div className='pro-main'> <div className='title'>ChatThru</div>
                                <div className='sub '>A Social Media Application that provides users with CRUD operations..</div>
                                
                                <div className='stack'>Tech Stack : React, Express, Mongoose, MongoDB, ..</div></div></div>
            </a>
            </div>
*/
