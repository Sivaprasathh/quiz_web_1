import quizService from "./quizService.js";
import "./App.css";
import React from "react";
import { Link } from "react-router-dom";
import QuestionBox from "./Questionbox";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      questionBank: [],
      score: 0,
      response: 0,
      nos: 0,
      btn: "",
    };
  }
  calculatePoints = (text, correct, Qkey) => {
    if (text === correct) {
      this.setState({
        score: this.state.score + 10,
      });
    }
  };
  calculateResponse = () => {
    this.setState({
      response: this.state.response + 1,
      nos: this.state.nos + 1,
      btn: "disabled",
    });
  };
  resetAll = () => {
    this.setState(
      {
        questionBank: [],
        score: 0,
        response: 0,
        nos: 0,
        btn: "",
      },
      () => {
        console.log("Resetted successfully");
      }
    );
    this.callMultiple();
  };
  callMultiple = () => {
    quizService().then((question) => {
      this.setState(
        {
          questionBank: question,
          btn: "",
        },
        () => {}
      );
    });
    this.setState({
      response: 0,
    });
  };
  componentDidMount = () => {
    if (
      this.props.match.params.slug === ":js" ||
      this.props.match.params.slug === ":nodejs"
    ) {
      quizService().then((question) => {
        this.setState({
          questionBank: question,
        });
      });
    } else {
      console.log("404");
    }
  };
  render() {
    return (
      <>
        <h3>Quiz web</h3>

        {this.state.questionBank.length > 0 &&
          this.state.nos !== 4 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => (
              <QuestionBox
                question={question}
                options={answers}
                Qkey={questionId}
                correct={correct}
                calculate={this.calculatePoints}
                response={this.calculateResponse}
                btn={this.state.btn}
              />
            )
          )}
        {this.state.response === 1 && this.state.nos !== 4 ? (
          <button onClick={this.callMultiple}>Next</button>
        ) : (
          ""
        )}
        {this.state.nos === 4 ? (
          <h4>
            {this.state.score}
            <div>
              <button onClick={this.resetAll}>Try again</button>
            </div>
            <Link to="/contribute" className="btn-primary">
              <button>Contribute</button>
            </Link>
          </h4>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default App;
