import React, { useState } from "react";
import { Input } from "./components/Form-Elements/Input/Input";
import "./App.css";
import users from "./users.json";

function App() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");

  return (
    <>
      <div>
        <h1>Assignment</h1>
        <Input
          name="search"
          onSubmit={onSubmitHandler}
          left_icon="fa-search"
          element="input"
          label={"Contact"}
          placeholder="Type Or Search"
          data={users}
          autoComplete="off"
        />
      </div>
      {/* <Input
        right_icon="fa-envelope"
        name="email"
        element="input"
        label={"Email"}
        placeholder="Type Yor Email."
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        autoComplete="off"
      />
      <Input
        right_icon="fa-lock"
        name="password"
        element="input"
        label={"Password"}
        placeholder="Type Yor Password."
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        autoComplete="off"
      /> */}
    </>
  );
}
export default App;
