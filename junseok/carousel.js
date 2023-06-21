// const images = [
//   "./images/cosmos.jpg",
//   "./images/ocean.jpg",
//   "./images/field.jpg",
//   "./images/forest.jpg",
//   "./images/sky.jpg",
//   "./images/mountain.jpg",
// ];

const colors = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];

const App = () => {
  const [current, setCurrent] = React.useState(0);

  const carouselHandler = (e) => {
    const { name } = e.target;
    if (name === "prev") {
      // prev
      if (current <= 0) {
        setCurrent(colors.length - 1);
        return;
      }
      setCurrent((prev) => prev - 1);
    } else {
      // next
      if (current >= colors.length - 1) {
        setCurrent(0);
        return;
      }
      setCurrent((prev) => prev + 1);
    }
  };

  return (
    <main>
      <div id="carousel">
        <div
          id="carousel__container"
          style={{ transform: `translateX(-${100 * current}%)` }}
        >
          {/* {images.map((image) => (
            <img
              key={image}
              className="carousel__item"
              src={image}
              alt={image}
              loading="lazy"
            />
          ))} */}
          {colors.map((color) => (
            <div
              key={color}
              className="carousel__item"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
      <button
        className="carousel__btns"
        type="button"
        name="prev"
        onClick={carouselHandler}
      >
        Prev
      </button>
      <button
        className="carousel__btns"
        type="button"
        name="next"
        onClick={carouselHandler}
      >
        Next
      </button>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
