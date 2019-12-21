import React from "react";
import axios from "axios";
import PlayerList from "./components/PlayerList";

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
        <h1>Women's World Cup</h1>
        <PlayerList apiData={this.state.playerData} />
      </div>
    );
  }
}

export default App;
