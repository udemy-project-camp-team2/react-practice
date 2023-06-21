const App = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const changeEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const changePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || email.trim().length === 0 || !email.includes("@")) {
      setError("이메일을 똑바로 입력해주세요!");
      return;
    }

    if (!password || password.trim().length === 0 || password < 2) {
      setError("패스워드를 똑바로 입력해주세요!");
      return;
    }
    setError("");
    setEmail("");
    setPassword("");
    console.log(`이메일 : ${email} / 패스워드 : ${password}`);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={changeEmailHandler}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={changePasswordHandler}
        />
        <button type="submit" name="submit">
          로그인
        </button>
      </form>
      {error ? <h3>{error}</h3> : null}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
