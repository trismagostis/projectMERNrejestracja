import React from "react";
import "./Display.css";
function Display(props) {
  // const listDisplayOptions = props.listDisplay.map((item, index) => {
  //   return <option key={index} value={index}>{item}</option>;
  // });

  let listDisplay = props.listDisplay;
  let listDisplayTable = listDisplay.map((user, index) => {
    return (
      <tr key={index}>
        <td key={user._id}>{user.firstName}</td>
        <td key={user._id + "1"}>{user.surName}</td>
        <td key={user._id + "2"}>{user.course}</td>
        <td key={user._id + "3"}>
          {user.localization}</td>
          <td><button onClick={() => props.removeUserMethod(user._id)}>usuń</button>
        </td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <th>Imię</th>
        <th>Nazwisko</th>
        <th>Kurs</th>
        <th>Miejsce</th>
        <th>Usuń</th>
      </thead>
      <tbody>{listDisplayTable}</tbody>
    </table>
  );
}

export default Display;
