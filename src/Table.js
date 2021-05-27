import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Förnamn</th>
        <th>Efternamn</th>
        <th>Radera</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.ForName}</td>
        <td>{row.LastName}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Radera</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  const { characterData, removeCharacter } = props;
  return (
    <table>
      <TableHeader />
      <TableBody
        characterData={characterData}
        removeCharacter={removeCharacter}
      />
    </table>
  );
};

export default Table;
