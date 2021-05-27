import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    characters: [
      {
        ForName: "Anders",
        LastName: "Andersson",
      },
      {
        ForName: "Bengt",
        LastName: "Bengtsson",
      },
      {
        ForName: "Cecilia",
        LastName: "Cillasson",
      },
      {
        ForName: "Dennis",
        LastName: "Danielsson",
      },
    ],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="container">
        <h1>Försöker fatta React!</h1>
        <p>går sissodär..</p>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <h4>Lägg till person</h4>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
