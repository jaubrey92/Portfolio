const Portfolio = () => {
  return (
    <div className="portfolioSection">
      <div className="projectSection">
        <h1>Cork and Sip</h1>
        <img
          src="../../images/CorkAndSip.png"
          alt="CorkAndSip"
          className="portfolioImage"
        />
        <a className="portfolioLink" href="https://corkandsip.fly.dev/">
          Live Demo
        </a>
        <a
          className="portfolioLink"
          href="https://github.com/AnthonnyyP/Cork-and-Sip"
        >
          Source Code
        </a>
      </div>
      <div className="projectSection">
        <h1>Anatomy Tutor</h1>
        <img
          src="../../images/AnatomyTutor.png"
          alt="AnatomyTutor"
          className="portfolioImage"
        />
        <a
          className="portfolioLink"
          href="https://anatomy-tutor-front-end.vercel.app/"
        >
          Live Demo
        </a>
        <a
          className="portfolioLink"
          href="https://github.com/jaubrey92/anatomy_study_guide"
        >
          Source Code
        </a>
      </div>
      <div className="projectSection">
        <h1>Snake</h1>
        <img
          src="https://i.ibb.co/s6t24W4/Screenshot-2023-07-18-at-2-35-29-PM.png>"
          alt="Snake"
          className="portfolioImage"
        />
        <a className="portfolioLink" href="https://grateful-mouth.surge.sh/">
          Live Demo
        </a>
        <a className="portfolioLink" href="https://github.com/jaubrey92/Snake">
          Source Code
        </a>
      </div>
      <div className="projectSection">
        <h1>Restaurant Ratings</h1>
        <img
          src="../../images/Hestia.png"
          alt="Hestia"
          className="portfolioImage"
        />
        <a className="portfolioLink" href="https://hestia-rr.herokuapp.com/">
          Live Demo
        </a>
        <a
          className="portfolioLink"
          href="https://github.com/jaubrey92/Restaurant-Ratings"
        >
          Source Code
        </a>
      </div>
    </div>
  )
}

export default Portfolio
