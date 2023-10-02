import React from "react";

class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reveal: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.resetReveal = this.resetReveal.bind(this);
  }

  handleClick() {
    this.setState({
      reveal: !this.state.reveal,
    });
  }
  resetReveal() {
    this.setState({
      reveal: false,
    });
  }

  render() {
    return (
      <div>
        <h1>Practice</h1>
        <div className="card">
          <div className="card-kor">{this.props.phrase.kor}</div>
          <div className="card-rom">{this.props.phrase.rom}</div>
          <div className="card-eng" onClick={this.handleClick}>
            {this.state.reveal ? this.props.phrase.eng : "Reveal translation"}
          </div>
          <button
            onClick={() => {
              this.props.changePhrases(this.props.phrase.id,"Not yet");
              this.resetReveal();
            }}
          >
            Not yet
          </button>
          <button
            onClick={() => {
              this.props.changePhrases(this.props.phrase.id,"Almost");
              this.resetReveal();
            }}
          >
            Almost
          </button>
          <button
            onClick={() => {
              this.props.changePhrases(this.props.phrase.id,"Got it");
              this.resetReveal();
            }}
          >
            Got it
          </button>
        </div>
      </div>
    );
  }
}

export default Practice;