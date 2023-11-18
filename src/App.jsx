import "./cvstyles.css";
import pic from "../prphoto.jpeg"
function Cv() {
  return (
    <div className="All">
      
      <div className="Top">
        <img src={pic} alt="Mujtaba,s Photo" />
        <h1>Mujtaba Shahzad</h1>
      </div>
      <div className="body">
        <div className="rht">
          <h2> Information</h2>
          <div className="li1"></div>
          <p>Software Enginner</p>
          <div className="li2"></div>
          <p>Mujtabashahzad06@gmail.com</p>
          <div className="li2"></div>
          <p>(+92) 324-416-6508</p>
          <div className="li2"></div>
          <p>Shahpur , Multan road Lahore</p>
          <div className="li2"></div>
          <h2>Education</h2>
          <div className="li1"></div>
          <p> Software Engineering(BS)</p>
          <div className="li2"></div>
          <p> NCBA&E</p>
          <div className="li2"></div>
          <h2>Skills</h2>
          <div className="li1"></div>
          <p>Coding- Beginner</p>
          <div className="li2"></div>
          <p>Debugging-beginner</p>
          <div className="li2"></div>
          <p>Algorithm-Beginner</p>
          <div className="li2"></div>
          <p>Database-beginner</p>
          <div className="li2"></div>
        </div>
        <div className="lft">
          <h1>Summary</h1>

          <ul>
            <li>
            Experiencing Software Engineering in developing quality software
            solutions. Skilled in Java, Javascript C++, and React projects
            </li>
            <li>
            Self-independent, reliable and friendly individual who work hard to achieve his goals
            </li>
            <li>
            Adaptable quickly,and organized well. Interested in learning the latest web & software technologies quick
            </li>
            <li>
            Able to work well in teams as well as indvidually.My future goal is to become a senior full-stac developer.
            </li>
          </ul>

          <h1>Work Experience</h1>

          <ul>
            <li>
              Developing a React Project which will result productive for a
              company.
            </li>

            <li>
              Will utiliz HTML , CSS ,JAVASCRIPT principles to develop quality
              software application
            </li>
            <li>
              Implementing testing procedures to ensure the software will be
              bug-free.
            </li>

            <li>
              Collaborating with team members of Nexus Berry to design and
              develop efficient software solutions.
            </li>
            <li>
              Will Maintain and update existing software application to ensure
              TO stay up to date with changing technology.
            </li>
            <li>
              Will Create a user interfaces to ensure a user-friendly
              experience.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cv;
