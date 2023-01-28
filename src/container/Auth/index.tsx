import { useState } from "react";
import { TokenStore } from "../../store/token";
import "./style.scss";

function Auth() {
  const [user, setUser] = useState({ login: "", email: "" });
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmiteHandler = () => {
    console.log(user);
    if (!user.login || !user.email) {
      alert("You have to fill all inputs :(");
    } else {
      TokenStore.setToken("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");
    }
  };
  return (
    <div className="auth-wrapper">
      <div>
        <span>
          <label>Login</label>
          <input
            value={user.login}
            name="login"
            onChange={(e) => onChangeHandler(e)}
            placeholder="login"
          />
        </span>
        <span>
          <label>Email</label>
          <input
            value={user.email}
            name="email"
            onChange={(e) => onChangeHandler(e)}
            type={"email"}
            placeholder="email"
          />
        </span>
        <button onClick={() => onSubmiteHandler()}>Login</button>
      </div>
    </div>
  );
}

export { Auth };
