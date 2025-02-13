"use client";
import React, { useState } from "react";

// Define the type for the user data (just strings in this case)
const usersList: string[] = ["Rohit", "Anil", "Dinesh"];

// Define the type for the page component
const Page = () => {
  // State to hold the list of users and selected checkboxes
  const [users, setUsers] = useState<string[]>(usersList);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  // Handle checkbox selection for an individual user
  const handleCheckboxChange = (user: string): void => {
    const newSelectedUsers = [...selectedUsers];
    if (newSelectedUsers.includes(user)) {
      // Unselect the user
      setSelectedUsers(newSelectedUsers.filter((u) => u !== user));
    } else {
      // Select the user
      newSelectedUsers.push(user);
      setSelectedUsers(newSelectedUsers);
    }
  };

  // Handle deleting a selected user
  const handleDelete = (user: string): void => {
    setUsers(users.filter((u) => u !== user)); // Remove user from the list
    setSelectedUsers(selectedUsers.filter((u) => u !== user)); // Remove user from selected list
  };

  // Handle "Select all" checkbox
  const handleAllSelect = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.checked) {
      setSelectedUsers(users); // Select all users
    } else {
      setSelectedUsers([]); // Deselect all users
    }
  };

  return (
    <div className="container">
      {users && users.length > 0 && (
        <div className="all-handle">
          <span>
            <input
              type="checkbox"
              checked={selectedUsers.length === users.length} // Check if all users are selected
              onChange={handleAllSelect}
            />{" "}
            Select all
          </span>
          {selectedUsers.length === users.length && (
            <button
              onClick={() => {
                // Delete selected users
                setUsers(users.filter((u) => !selectedUsers.includes(u)));
                setSelectedUsers([]); // Clear selected users
              }}
            >
              Delete
            </button>
          )}
        </div>
      )}

      {users && users.length > 0 ? (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={selectedUsers.includes(user)}
                onChange={() => handleCheckboxChange(user)}
              />{" "}
              {user}{" "}
              {selectedUsers.includes(user) && (
                <button onClick={() => handleDelete(user)}>Delete</button>
              )}
            </li>
          ))}
        </ul>
      ) : 'No more users'}
    </div>
  );
};

export default Page;
