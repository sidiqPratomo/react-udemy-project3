import React, { useState } from "react";
import AddUser from "./Component/Users/AddUser";
import UsersList from "./Component/Users/UsersList";

const data = [
  {
    id: "1",
    name: "sidiq",
    age: 26,
  },
  {
    id: "2",
    name: "pratomo",
    age: 26,
  },
];

function App() {
  const [userList, setUserList] = useState(data);

  const addUserHandler = (username, userAge) => {
    setUserList((preUserList) => {
      return [...preUserList, { name: username, age: userAge, id: Math.random().toString() }];
    });
  };
  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </React.Fragment>
  );
}

export default App;
