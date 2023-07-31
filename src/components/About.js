import background1 from '../images/hast.png'
import background2 from '../images/ic_framework (1).svg'
import background3 from '../images/ic_skills.svg'
import background4 from '../images/shape1.png'

function About() {
    return(<div className="abody">
        <div className="mabout"> <h1 className="main-headings">ABOUT</h1>
        <div className="sabout">
            Iam a MERN stack developer . I am interested in Full Stack positions, here you can see some of my projects, if you like what you see do not hesitate to contact me.

        </div>
        <a href='mailto: meenamani9444@gmail.com' id="contact-me">Collaborate</a>
        </div>
       
        <div className="tech-stack">
            <div className="all-tech-stack">
                <div className="top-stack">
                     <div className="top-left" style={{ backgroundImage: `url(${background1})` }}>
                        <div className='about-heading'>Languages</div>
                        <ul className='bold '>
                        <li>C</li>
                        <li>Java</li>
                        <li>JavaScript</li>
                        
                        </ul>
                     </div>
                     <div className="top-right" style={{ backgroundImage: `url(${background2})` }}>

                     <div className='about-heading black'>Frameworks and libraries</div>
                     <ul className='black bold'>
                     <li>Node</li>
                        <li>React</li>
                        <li>Express</li>
                        <li>Axios</li>
                        <li>Mongoose</li>
                       
                        </ul>
                     </div>
                </div>
                <div className="bottom-stack">
                        
                    <div className="bottom-left" style={{ backgroundImage: `url(${background3})` }}>
                    <div className='about-heading'>Skills</div>
                    <ul className='bold'>
                        <li>VS Code</li>
                        <li>Git & Github</li>
                        <li>Terminal</li>
                        <li>Postman</li>
                      
                        </ul>
                    </div>
                    <div className="bottom-right" style={{ backgroundImage: `url(${background4})` }}>
                    <div className='about-heading black'>DataBase</div>
                    <ul className='black bold' >
                        <li>SQL</li>
                        <li>MongoDB</li>
                       
                      
                        </ul>
                    </div>
                </div>
            </div>
        
        </div>

    </div>)
}
export default About