import Header from "../components/Header";
import Footer from "../components/Footer";

const projects = [
  {
    image: require("../assets/img/one.jpg"),
    altText: "Portfolio Project One",
    title: "Goals",
    body: "This is a full-stack MERN app for achieving your goals. It has full user authentication, authorization and a RESTful CRUD API back-end.",
    gitHubLink: "https://github.com/troywiegel/goals",
    gitHubTitle: "Github",
    deployedLink: "https://goals-10000.herokuapp.com",
    deployedTitle: "Deployed",
  },
  {
    image: require("../assets/img/two.jpg"),
    altText: "Portfolio Project Two",
    title: "Fluffr",
    body: "Find Your Furever Friend! This was a team project where we used a pet finder api to present animals that need adoption.",
    gitHubLink: "https://github.com/mteubnerfoster/fluffr",
    gitHubTitle: "Github",
    deployedLink: "https://fluffr.herokuapp.com/",
    deployedTitle: "Deployed",
  },
  {
    image: require("../assets/img/three.jpg"),
    altText: "Portfolio Project Three",
    title: "The Blog",
    body: "A simple blog app built with React as the front-end and MongoDB/Mongoose as the back-end.",
    gitHubLink: "https://github.com/troywiegel/the-blog",
    gitHubTitle: "Github",
    deployedLink: "https://github.com/troywiegel/the-blog",
    deployedTitle: "Deployed",
  },
  {
    image: require("../assets/img/four.jpg"),
    altText: "Portfolio Project Four",
    title: "Social Network API",
    body: "This is an API for a social network web app created using Nodejs, Expressjs and MongoDB/Mongoose.",
    gitHubLink: "https://github.com/troywiegel/social-network-api",
    gitHubTitle: "Github",
    deployedLink: "https://github.com/troywiegel/social-network-api",
    deployedTitle: "Deployed",
  },
];

function Project() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          {projects.map((project, index) => {
            return (
              <div className="col s12 m6" key={index}>
                <div className="card">
                  <div className="card-image">
                    <img src={project.image} alt={project.altText} />
                    <span className="card-title">{project.title}</span>
                  </div>
                  <div className="card-content">
                    <p>{project.body}</p>
                  </div>
                  <div className="card-action">
                    <a
                      href={project.deployedLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn #e57373 red lighten-2"
                    >
                      {project.deployedTitle}
                    </a>
                    <a
                      href={project.gitHubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn #e57373 red lighten-2"
                    >
                      {project.gitHubTitle}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Project;
