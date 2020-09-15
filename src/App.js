import React from "react";
import "./styles.css";
import logo from "./logo.svg";
import team from "./team";

/* 
Use your new JSX skills to recreate our team chart.

This app should have:
- The same header as the original.
- A table showing everyone's photo, name, and role (animals is a bonus).

All of the imports have been provided for you, including:
- Table data (team.js)
- CSS (styles.css)
- React logo (logo.svg)

In your JSX, you'll need to use each of the following at least once...
- className
- variable
- variable attribute
- self-closing tag
- map
- key

Feel free to have fun and experiment with others too!

If you get stuck or need help, please reach out on Slack.
*/
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Redi React Fall 2020 Team</h1>
      </header>
      <main>
      <table className="members-table">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {team.map((team) => (
              <tr className="member-row" key={team.name}>
                <td className="avatar-cell">
                  <img alt="memberPhoto"src={team.image} />
                </td>
                <td className="name-cell">{team.name}</td>
                <td className="role-cell">{team.role}</td>
                <td className="animals-cell">
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
