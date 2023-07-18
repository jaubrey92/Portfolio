import { useState } from 'react'

const Home = () => {
  const [toggleResume, setToggleResume] = useState(true)

  const handleClick = () => {
    if (toggleResume === true) {
      setToggleResume(false)
    } else if (toggleResume === false) {
      setToggleResume(true)
    }
  }

  return toggleResume ? (
    <div className="homePage">
      <div className="homePageContainer">
        <img
          src="https://i.ibb.co/Z6WcXGm/Slack-Photo.png"
          alt="Prof Pic"
          className="profPic"
        />
        <h1>Hello, I'm James</h1>
        <h3>I'm a full-stack software engineer.</h3>
        <ul>
          <li>Based in Tulsa, OK</li>
          <li>Former physical therapist and sommelier</li>
          <li>Email: jaaubrey92@gmail.com</li>
        </ul>
        <a className="contactInfo" href="https://github.com/jaubrey92">
          GitHub
        </a>
        <a
          className="contactInfo"
          href="https://www.linkedin.com/in/james-aubrey/"
        >
          LinkedIn
        </a>
        <button className="resumeButton" onClick={() => handleClick()}>
          Resume
        </button>
      </div>
    </div>
  ) : (
    <div className="homePage">
      <div className="homePageContainer">
        <img
          src="https://i.ibb.co/Z6WcXGm/Slack-Photo.png"
          alt="Prof Pic"
          className="profPic"
        />
        <h1>Hello, I'm James</h1>
        <h3>I'm a full-stack software engineer</h3>
        <ul>
          <li>Based in Tulsa, OK</li>
          <li>Former physical therapist and sommelier</li>
          <li>Email: jaaubrey92@gmail.com</li>
        </ul>
        <a className="contactInfo" href="https://github.com/jaubrey92">
          GitHub
        </a>
        <a
          className="contactInfo"
          href="https://www.linkedin.com/in/james-aubrey/"
        >
          LinkedIn
        </a>
        <button className="resumeButton" onClick={() => handleClick()}>
          Resume
        </button>
        <img className="resumePic" src="../../images/Resume.png" alt="Resume" />
      </div>
    </div>
  )
}

export default Home
