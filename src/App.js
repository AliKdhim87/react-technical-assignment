import React from "react";
import { Input } from "./components/Form-Elements/Input/Input";

import users from "./users.json";

const App = () => {
  return (
    <div>
      <h1>Assignment</h1>
      <Input label={"Contact"} placeholder="Type Or Search" data={users} />
    </div>
  );
};
export default App;
