const Portfolio = () => {
  return (
    <div className="portfolioSection">
      <div className="projectSection">
        <h1>Cork and Sip</h1>
        <img
          src="https://i.ibb.co/8j8Ssff/Screenshot-2023-07-18-at-2-38-05-PM.png"
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
        <p>
          Cork and Sip is a collaborative project using PostgreSQL, Django, and
          Python where users can log in, track the contents of their own wine
          cellar and sign up for tastings.
        </p>
      </div>
      <div className="projectSection">
        <h1>Anatomy Tutor</h1>
        <img
          src="https://i.ibb.co/C2zR1sY/Screenshot-2023-07-17-at-3-41-26-PM.png"
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
        <p>
          Anatomy Tutor was created with a MERN stack and allows physical
          therapy students to create flashcards for each muscle of the body that
          they need to learn for school. Utilizes RESTful routing and OAuth with
          Auth0.
        </p>
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
        <p>
          My recreation of the classic game Snake. A user-friendly front-end
          website using HTML, CSS, Vanilla JS, and DOM manipulation.
        </p>
      </div>
      <div className="projectSection">
        <h1>Restaurant Ratings</h1>
        <img
          src="https://i.ibb.co/Ybz9NS1/Screenshot-2023-07-18-at-2-36-42-PM.png"
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
        <p>
          Hestia is a website that allows hospitality workers in Tulsa, OK to
          review eateries around the city and to rate their working experience
          for other potential employees to see. Utilizes RESTful routing, EJS,
          MongoDB, NodeJS, and Express.
        </p>
      </div>
    </div>
  )
}

export default Portfolio
