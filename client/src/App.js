import React from "react";
import axios from "axios";

// Components
import PlayerList from "./components/PlayerList";
import Title from "./components/Title";

//Styling
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playerData: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({ playerData: res.data });
        console.log(res.data);
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }

  render() {
    return (
      <div className="App">
        <Title />
        <PlayerList apiData={this.state.playerData} />
      </div>
    );
  }
}

export default App;
