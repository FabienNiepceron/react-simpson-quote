import React from "react";
import SimpsonsQuotes from "./components/SimpsonsQuotes";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpsons: null,
    };
    this.getSimpsons = this.getSimpsons.bind(this);
  }
  componentDidMount() {
    this.getSimpsons();
  }

  getSimpsons = () => {
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((reponse) => reponse.data)
      .then((data) => {
        this.setState({ simpsons: data[0] });
      });
  };

  render() {
    return (
      <div className="App">
        {this.state.simpsons ? (
          <SimpsonsQuotes simpsons={this.state.simpsons} />
        ) : (
          <p>no data</p>
        )}
        <button type="button" onClick={this.getSimpsons}>
          Get Simpsons
        </button>
      </div>
    );
  }
}
export default App;
