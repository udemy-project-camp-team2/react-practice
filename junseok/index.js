const UserDetail = (props) => {
  return (
    <details>
      <summary>{props.title}</summary>
      <ul>
        {props.lists.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </details>
  );
};

const UserCharacters = () => {
  const keywords = ["FRONTEND", "TEAM", "JAVASCRIPT", "React"];

  const skills = ["HTML/CSS", "JAVASCRIPT", "REACT"];
  return (
    <section>
      <UserDetail title={"Keywords"} lists={keywords} />
      <UserDetail title={"Skills"} lists={skills} />
    </section>
  );
};

const UserInfo = () => {
  return (
    <section>
      <div id="image__container">
        <img id="my__image" src="./images/ocean.jpg" alt="cat" loading="lazy" />
      </div>
      <div id="my__info">
        <dl>
          <dt>이름</dt>
          <dd>오준석</dd>
          <dt>나이</dt>
          <dd>28</dd>
          <dt>희망직업</dt>
          <dd>프론트엔드 개발자</dd>
          <dt>희망 직장</dt>
          <dd>나에게 기대를 하는 직장</dd>
        </dl>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <main>
      <UserInfo />
      <UserCharacters />
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
