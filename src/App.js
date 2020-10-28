import React from "react";
import SimpsonsQuotes from "./components/SimpsonsQuotes";
import axios from "axios";

const sampleSimpsons = {
  quote: "They taste like...burning.",
  character: "Ralph Wiggum",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523",
  characterDirection: "left",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpsons: sampleSimpsons,
    };
    this.getSimpsons = this.getSimpsons.bind(this);
  }
  getSimpsons() {
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((reponse) => reponse.data)
      .then((data) => {
        this.setState({ simpsons: data[0] });
      });
  }

  render() {
    return (
      <div className="App">
        <SimpsonsQuotes simpsons={this.state.simpsons} />;
        <button type="button" onClick={this.getSimpsons}>
          Get Simpsons
        </button>
      </div>
    );
  }
}
export default App;
