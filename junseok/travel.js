const App = () => {
  const [value, setValue] = React.useState("");

  const changeInputValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <main>
        <form
          action={`https://www.goodchoice.kr/product/result`}
          method="GET"
          target="_blank"
        >
          <input
            type="search"
            name="keyword"
            value={value}
            onChange={changeInputValue}
          />
          <button type="submit" name="submit">
            검색
          </button>
        </form>
      </main>
      <footer>&lt;여기어때</footer>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
