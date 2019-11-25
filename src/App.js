import "./App.css";

import React from "react";

const Range = ({ val }) => (
  <>
    <progress
      className="is-hidden-print progress is-primary"
      value={val}
      max={10}
    />
    <span className="is-hidden-screen">{val}</span>
  </>
);

const data = {
  left: {
    class: "column is-three-fifths",
    data: [
      {
        name: "Experience",
        parts: [
          {
            name: "Daugherty Business Solutions, Minneapolis, MN",
            sub: "September 2018 - Present",
            points: [
              "Worked on multiple applications for multiple clients",
              "Took initiative and extracted out common components for reuse for other projects",
              "Acted as a lead for a prototype on a small team",
              "Provided mentorship and utilized pair programming with a junior developer",
              "Led demos and provided regular updates to stakeholders",
              "Prioritized work between multiple projects",
              "Uilized ElasticSearch for an application to decrease search times for metadata in a hadoop cluster",
              "Participated in book clubs and presented for lunch and learns",
              "Worked on small internal projects as well as attended company and client hackathons",
              "Helped migrate a codebase from TFS to GIT",
              "Used Angular / .NET to create an application to help with document managment"
            ]
          },
          {
            name: "Magenic, Minneapolis, MN",
            sub: "January 2018 - August 2018",
            points: [
              "Used VSTS to track application progress",
              "Made SQL queries using JDBC in a Java / Spring backend",
              "Contributed to the AngularJS frontend",
              "Attended daily standups to announce progress to stakeholders"
            ]
          },
          {
            name: "Cook Systems, Memphis, TN",
            sub: "October 2017 - December 2017",
            points: [
              "Learned to work with Java / Spring applications",
              "Used JPA to manage repository entities",
              "Learned to work with frontend applications using AngularJS and Flexbox",
              "Had four assessments throughout the program and was one of four to pass them all"
            ]
          }
        ]
      },
      {
        name: "Education",
        parts: [
          {
            name: "A.A.S. in Mobile Application Development",
            sub: "Central Lakes College, Brainerd, MN",
            points: ["Computer Club President", "Student Senate"]
          }
        ]
      }
    ]
  },
  right: {
    class: "column",
    data: [
      {
        name: "Featured Skills",
        parts: [
          {
            name: "React",
            sub: <Range val={8} />
          },
          {
            name: "Java / Spring",
            sub: <Range val={7} />
          },
          {
            name: "TypeScript / NestJS",
            sub: <Range val={7} />
          },
          {
            name: "ASP.NET",
            sub: <Range val={6} />
          },
          {
            name: "Angular",
            sub: <Range val={5} />
          }
        ]
      },
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
              "VSTS"
            ]
          },
          {
            name: "Frameworks / Libraries",
            points: [
              "PWA",
              "SQL",
              "Bulma",
              "Flexbox",
              "React Hooks",
              "Redux",
              "ChartJS",
              "NestJS",
              "TypeORM",
              "GraphQL"
            ]
          },
          {
            name: "Programming Languages",
            points: ["HTML / CSS / JavaScript", "Java", "C#", "Ruby", "Go"]
          }
        ]
      }
    ]
  }
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
            {points.map(pt => (
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
        <div className="container align-center row-wrap is-size-2 has-text-white justify-around">
          <div>Nathanial Lubitz</div>
          <div style={{ margin: "32px" }} className="column-wrap is-size-5">
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
          {Object.values(data).map(col => (
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
