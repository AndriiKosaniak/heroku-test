import { setUser, updateUser } from "firestoreService";
import { useState } from "react";
import { User } from "./user";

export type User = {
  name: string;
  age: number;
  id: string;
};

type UsersProps = {
  users: User[];
};

export const Users = ({ users }: UsersProps) => {
  const [newUserData, setNewUserData] = useState({
    name: "",
    age: null,
  });

  const handleInputChange = (e: any) => {
    setNewUserData((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              width: "fit-content",
              marginRight: "6px",
              marginBottom: "6px",
            }}
          >
            <User
              name={user.name}
              age={user.age}
              id={user.id}
              newUserData={newUserData}
              handleInputChange={handleInputChange}
            />
          </div>
        ))}
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "fit-content",
            gap: "4px",
          }}
        >
          <h2>Add user</h2>
          <input
            type="text"
            id="name"
            placeholder="name"
            onChange={handleInputChange}
          />
          <input
            type="text"
            id="age"
            placeholder="age"
            onChange={handleInputChange}
          />
          <button onClick={() => setUser(newUserData)}>Add user</button>
        </div>
      </div>
    </div>
  );
};
