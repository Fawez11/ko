import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Practice from "./components/Practice.jsx";
import PhraseList from "./components/PhraseList.jsx";
import Progress from "./components/Progress.jsx"; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "phrases",
      phrases: [], // Initialize phrases as an empty array
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
    // Load phrases from the server when the component mounts
    $.get("/api/phrases").then((results) => {
      this.setState({
        phrases: results,
      });
    });
  }

  changePhrases(id, status) {
    // Function to update the phrase's status
    $.ajax({
      method: "PATCH",
      url: `/api/phrases/${id}`,
      data: { status },
    }).done((msg) => {
      // Update the index to show the next phrase
      this.setState((prevState) => ({
        index: prevState.index + 1,
      }));
    });
  }

  render() {
    const { view, phrases, index } = this.state;

    return (
      <div>
        <div className="nav">
          <span className="logo">Korean Tutor</span>
          <span
            className={
              view === "phrases" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("phrases")}
          >
            Phrase List
          </span>
          <span
            className={
              view === "practice" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("practice")}
          >
            Practice
          </span>
        </div>

        <div className="main">
          {view === "phrases" ? (
            <PhraseList phrases={phrases} />
          ) : (
            <>
              <Progress phrases={phrases} /> {/* Display progress */}
              <Practice
                changePhrases={this.changePhrases}
                phrase={index !== -1 ? phrases[index] : null}
              />
            </>
          )}

          {index === -1 && (
            <div className="completion-message">
              Congratulations! You've mastered all the phrases.
            </div>
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
