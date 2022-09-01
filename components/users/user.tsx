import { deleteUser, updateUser } from "firestoreService";
import { useState } from "react";

import type { User as UserData } from "./users";

type UserProps = {
  name: string;
  age: number;
  id: string;
  newUserData: UserData;
  handleInputChange: (e: any) => void;
};

export const User = ({
  name,
  age,
  id,
  newUserData,
  handleInputChange,
}: UserProps) => {
  const [editMode, setEditMode] = useState(false);

  const updateUserData = async () => {
    await updateUser(id, newUserData);
    setEditMode(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid grey",
        width: "fit-content",
        padding: "12px",
      }}
    >
      <h3>
        Name:{" "}
        {editMode ? (
          <input
            type="text"
            id="name"
            placeholder={name}
            onChange={handleInputChange}
          />
        ) : (
          name
        )}
      </h3>

      <h3>
        Age:{" "}
        {editMode ? (
          <input
            type="text"
            id="age"
            placeholder={age}
            onChange={handleInputChange}
          />
        ) : (
          age
        )}
      </h3>
      <button onClick={() => deleteUser(id)}>Delete user</button>
      {editMode ? (
        <button onClick={() => updateUserData()}>Save</button>
      ) : (
        <button onClick={() => setEditMode(true)}>Edit user</button>
      )}
    </div>
  );
};
