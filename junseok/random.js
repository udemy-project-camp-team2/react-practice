const images = [
  "./images/cosmos.jpg",
  "./images/ocean.jpg",
  "./images/field.jpg",
  "./images/forest.jpg",
  "./images/sky.jpg",
  "./images/mountain.jpg",
];

const App = () => {
  const [index, setIndex] = React.useState(0);

  const changeImageHandler = () => {
    const newIndex = Math.floor(Math.random() * 6);
    setIndex(newIndex);
  };

  return (
    <React.Fragment>
      <div
        id="back__image"
        style={{
          backgroundImage: `url(${images[index]})`,
        }}
      />
      <button type="button" name="change" onClick={changeImageHandler}>
        Change Background
      </button>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
