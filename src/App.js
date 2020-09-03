import "./App.css";
import React from "react";

const data = {
  left: {
    class: "column is-three-fifths",
    data: [
      {
        name: "Experience",
        parts: [
          {
            name: "Daugherty Business Solutions, Minneapolis, MN",
            sub: "March 2020 - Present",
            points: [
              "Assist with scrum ceremonies, product demos, and meetings with internal and external teams to solve integration issues, evaluate technical and business risks, and discuss product outcomes",
              "Successfully released an application to production in two months, providing free training in 12 languages to restaurants around the world and reaching 250,000 page views in the first month",
            ],
          },
          {
            name: "Daugherty Business Solutions, Minneapolis, MN",
            sub: "September 2018 - March 2020",
            points: [
              "Led development of an 8-week prototyping initiative to reduce packaging with an interactive mobile experience that provided product sourcing data, recipes, and nearby recycling locations to users",
              "Developed an advanced searching web application for hundreds of databases, leading to an increase in data compliance and a decrease in query times from 6 seconds to under 100 milliseconds per search ",
              "Collaborated with scientists to create an application to determine and correct food quality, resulting in higher quality products for some locations and reducing fryer oil waste by up to 60% in other locations",
              "Provided mentorship and pair programed with junior developers",
              "Participated in book clubs and presented for lunch and learns",
              "Worked on small internal projects and attended company and client hackathons",
            ],
          },
          {
            name: "Magenic, Minneapolis, MN",
            sub: "January 2018 - August 2018",
            points: [
              "Implemented and enhanced features, including data backup and restore, a sidebar for browsing data, and a calculation toolbar for a document auditing web application",
              "Refactored our back-end from one service and controller six services and controllers, separating concerns and improving testability, readability, and reducing bugs from merge conflictsbackend",
            ],
          },
          {
            name: "Cook Systems, Memphis, TN",
            sub: "October 2017 - December 2017",
            points: [
              "Accepted into their trainee program with 12 other participants; passed all four assessments evaluated on software, leadership, and teamwork skills with only three other participants remaining at the end",
              "Coordinated our group project and delegated tasks among ourselves with Google Docs and Trello",
            ],
          },
        ],
      },
    ],
  },
  right: {
    class: "column",
    data: [
      {
        name: "Technology Exposures",
        parts: [
          {
            name: "Infrastructure",
            points: [
              "Heroku",
              "AWS S3 Buckets",
              "AWS EC2",
              "ElasticSearch",
              "Docker",
              "CI/CD",
              "DroneCI",
            ],
          },
          {
            name: "Frameworks / Libraries",
            points: ["React", "Redux", "NestJS", "PWA", "TypeORM"],
          },
          {
            name: "Programming Languages",
            points: ["HTML / CSS / JavaScript", "Java", "TypeScript", "SQL"],
          },
        ],
      },
      {
        name: "Education",
        parts: [
          {
            name: "A.A.S. in Mobile Application Development",
            sub: "Central Lakes College, Brainerd, MN",
            points: [
              "GPA: 3.76",
              "High Honors",
              "Computer Club President",
              "Student Senate",
            ],
          },
        ],
      },
    ],
  },
};

const Section = ({ name, parts = [] }) => (
  <section className="section has-text-white">
    <div
      className="title has-text-white is-size-3"
      style={{ borderBottom: "2px solid red" }}
    >
      <div>{name}</div>
    </div>
    <div>
      {parts.map(({ name, sub, points = [] }) => (
        <div>
          <div className="title is-size-5 has-text-white">{name}</div>
          <div className="subtitle is-size-6 has-text-white">{sub}</div>
          <ul className="is-size-6" style={{ marginBottom: "36px" }}>
            {points.map((pt) => (
              <li style={{ margin: "12px 0" }}>- {pt}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

function App() {
  return (
    <div className="App full-height full-width justify-between flex-column">
      <header>
        <div className="container align-center row-wrap is-size-2 has-text-white justify-around top-header">
          <div>Nathanial Lubitz</div>
          <div className="column-wrap is-size-5">
            <a
              href="https://github.com/natel97"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub: natel97
            </a>
            <a
              href="mailto:nate.lubitz@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email: nate.lubitz@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/nathanial-lubitz-472b54130"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <hr />
      </header>
      <div className="container">
        <div className="columns container">
          {Object.values(data).map((col) => (
            <div className={col.class}>
              {col.data.map(({ name, parts }) => (
                <Section name={name} parts={parts} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
