import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import data from "./sample_data.js";
import Practice from "./components/Practice.jsx";
import PhraseList from "./components/PhraseList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "phrases",
      phrases: data,
      index: 0,
    };

    this.changePhrases = this.changePhrases.bind(this);
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  componentDidMount() {
    $.get("/api/phrases").then((results) => {
      // console.log(results);
      this.setState({
        phrases: results,
      });
    });
  }

  changePhrases(id, status) {
    console.log(id, status);
    $.ajax({
      method: "PATCH",
      url: `/api/phrases/${id}`,
      data: { status },
    }).done((msg) => {
      console.log("operation ended with " + msg);
      if (this.state.index == this.state.phrases.length - 1) {
        this.setState({
          index: 0,
        });
      } else {
        this.setState({
          index: this.state.index + 1,
        });
      }
    });
  }

  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo">Korean Tutor</span>
          <span
            className={
              this.state.view === "phrases" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("phrases")}
          >
            Phrase List
          </span>
          <span
            className={
              this.state.view === "practice" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("practice")}
          >
            Practice
          </span>
        </div>

        <div className="main">
          {this.state.view === "phrases" ? (
            <PhraseList phrases={this.state.phrases} />
          ) : (
            <Practice
              changePhrases={this.changePhrases}
              phrase={this.state.phrases[this.state.index]}
            />
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));