import Header from "../components/Header";
import Footer from "../components/Footer";

const projects = [
  {
    image: require("../assets/img/one.jpg"),
    altText: "Portfolio Project One",
    title: "Note Take 10000",
    body: "This is an express.js app that lets one create reminder notes. One can add a title, description and delete notes as needed.",
    gitHubLink: "https://github.com/troywiegel/note-taker",
    gitHubTitle: "Github",
    deployedLink: "https://note-taker-10000.herokuapp.com",
    deployedTitle: "Deployed",
  },
  {
    image: require("../assets/img/two.jpg"),
    altText: "Portfolio Project Two",
    title: "Weather Dashboard",
    body: "This is a weather app built using HTML, CSS and Javascript. One can enter a city and thew weather + 5 day forecast is displayed.",
    gitHubLink: "https://github.com/troywiegel/weather-dashboard",
    gitHubTitle: "Github",
    deployedLink: "https://troywiegel.github.io/weather-dashboard/",
    deployedTitle: "Deployed",
  },
  {
    image: require("../assets/img/three.jpg"),
    altText: "Portfolio Project Three",
    title: "Work Day Scheduler",
    body: "This is a work day scheduler that allows users to add content to the textbox and then save it to local storage in the web browser.",
    gitHubLink: "https://github.com/troywiegel/work-day-scheduler",
    gitHubTitle: "Github",
    deployedLink: "https://troywiegel.github.io/work-day-scheduler",
    deployedTitle: "Deployed",
  },
  {
    image: require("../assets/img/four.jpg"),
    altText: "Portfolio Project Four",
    title: "Feedback App",
    body: "This is a simple feedback app that allows one to enter feedback comments and ratings. It also has edit and delete functionality.",
    gitHubLink: "https://github.com/troywiegel/feedback-app",
    gitHubTitle: "Github",
    deployedLink: "#",
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
