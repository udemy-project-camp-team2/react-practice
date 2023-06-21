const App = () => {
  const [leftValue, setLeftValue] = React.useState();
  const [rightValue, setRightValue] = React.useState();
  const [resultValue, setResultValue] = React.useState(0);
  const changeValueHandler = (e) => {
    const { name } = e.target;

    if (name === "number__left") {
      setLeftValue(Number(e.target.value));
    } else {
      setRightValue(Number(e.target.value));
    }
  };

  const calculateNumbersHandler = (e) => {
    const { name } = e.target;

    switch (name) {
      case "plus":
        setResultValue(leftValue + rightValue);
        break;
      case "minus":
        setResultValue(leftValue - rightValue);
        break;
      case "multiply":
        setResultValue(leftValue * rightValue);
        break;
      case "divide":
        setResultValue(leftValue / rightValue);
        break;
      default:
        setResultValue(0);
        return;
    }
  };

  return (
    <main>
      <div>
        <input
          type="number"
          name={"number__left"}
          value={leftValue}
          onChange={changeValueHandler}
          placeholder="0"
        />
        <input
          type="number"
          name={"number__right"}
          value={rightValue}
          onChange={changeValueHandler}
          placeholder="0"
        />
        <button type="button" name="plus" onClick={calculateNumbersHandler}>
          덧셈
        </button>
        <button type="button" name="minus" onClick={calculateNumbersHandler}>
          뺄셈
        </button>
        <button type="button" name="multiply" onClick={calculateNumbersHandler}>
          곱셉
        </button>
        <button type="button" name="divide" onClick={calculateNumbersHandler}>
          나눗셈
        </button>
      </div>
      <div>{resultValue}</div>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
