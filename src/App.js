import React from "react";
import { Input } from "./components/Form-Elements/Input/Input";

import users from "./users.json";

const App = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
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
  );
};
export default App;
