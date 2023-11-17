import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
    };

    //Привязка this.state к не стрелочной функции
    this.stop = this.stop.bind(this);
  }

  /*componentDidMount() {
    this.getData();
  }*/

  //Отменяем ререндеринг там, где ничего не меняется на экране. Например, при обновлении идентификатора таймера
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.timerId != this.state.timerId) return false;
    return true;
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

  start = () => {
    //Чтобы к состоянию компонента можно было обращаться внутри следующей функции, необходимо присвоить значение this переменной. Иначе, внутри функции setInterval this будет не компонент, а сам интервал (сама функция?).
    let scope = this;

    //В этой функции по прошествии каждого интервала (1 секунда) состояние будет обновляться и происходить ререндеринг. Таким образом, каждую секунду отображаемое на экране число секунд будет увеличиваться на 1, как таймер.

    //Кроме того, чтобы иметь возможность остановить таймер, необходимо сохранить его идентификатор. Для этого присваиваем функцию переменной, в которую идентификатор сохранится.
    let timerId = setInterval(function () {
      scope.setState({
        seconds: scope.state.seconds + 1,
      });
    }, 1000);

    //Теперь сохраняем полученный идентификатор в состояние компонента, чтобы сделать его доступным везде внутри компонента.
    this.setState({ timerId: timerId });
  };

  //При такой записи, невозможно обращаться к this.state без привязки в конструкторе
  stop() {
    clearInterval(this.state.timerId);
  }

  render() {
    return (
      <div>
        <p>
          Timer info: {this.state.minutes}:{this.state.seconds}
        </p>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.start}>Start</button>
      </div>
    );
  }
}

export { Timer };
