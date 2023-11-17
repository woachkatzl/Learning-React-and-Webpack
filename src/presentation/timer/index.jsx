import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    let timerJSON = localStorage.getItem("timer");
    let timer = JSON.parse(timerJSON);
    console.log(timer);

    this.setState({
      minutes: Number(timer.minutes),
      seconds: Number(timer.seconds),
    });
  };

  render() {
    return (
      <div>
        <p>
          Timer info: {this.state.minutes}:{this.state.seconds}
        </p>
      </div>
    );
  }
}

export { Timer };
