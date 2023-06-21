const App = () => {
  const [clock, setClock] = React.useState(``);

  const timer = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    setClock(`${hours} : ${minutes} : ${seconds}`);
  };

  React.useEffect(() => {
    setInterval(timer, 1000);
  }, []);
  return <h1>{clock}</h1>;
};

ReactDOM.render(<App />, document.getElementById("root"));
