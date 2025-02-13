"use client";
import React, { useState } from "react";

const usersList = ["Rohit", "Anil", "Dinesh", "Shivam"];

// const Page = () => {
//   // State to hold the list of users and selected checkboxes
//   const [users, setUsers] = useState(usersList);
//   const [selectedUsers, setSelectedUsers] = useState<number[]>([]); // store selected user indices
// console.log(selectedUsers, 'selectedUsers');

//   // Handle checkbox selection for an individual user by index
//   const handleCheckboxChange = (index: number) => {
//     const newSelectedUsers = [...selectedUsers];
//     if (newSelectedUsers.includes(index)) {
//       // Unselect the user
//       setSelectedUsers(newSelectedUsers.filter((i) => i !== index));
//     } else {
//       // Select the user
//       newSelectedUsers.push(index);
//       setSelectedUsers(newSelectedUsers);
//     }
//   };

//   // Handle deleting a selected user
//   const handleDelete = (index: number) => {
//     const user = users[index];
//     setUsers(users.filter((u, i) => i !== index)); // Remove user from the list
//     setSelectedUsers(selectedUsers.filter((i) => i !== index)); // Remove user from selected list
//   };

//   // Handle "Select all" checkbox
//   const handleAllSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.checked) {
//       setSelectedUsers(users.map((_, index) => index)); // Select all users
//     } else {
//       setSelectedUsers([]); // Deselect all users
//     }
//   };

//   return (
//     <div className="container">
//       {users && users.length > 0 && (
//         <div className="all-handle">
//           <span>
//             <input
//               type="checkbox"
//               checked={selectedUsers.length === users.length} // Check if all users are selected
//               onChange={handleAllSelect}
//             />{" "}
//             Select all
//           </span>
//           {selectedUsers.length === users.length && (
//             <button
//               onClick={() => {
//                 // Delete selected users
//                 setUsers(
//                   users.filter((_, index) => !selectedUsers.includes(index))
//                 );
//                 setSelectedUsers([]); // Clear selected users
//               }}
//             >
//               Delete
//             </button>
//           )}
//         </div>
//       )}

//       {users && users.length > 0 ? (
//         <ul>
//           {users.map((user, index) => (
//             <li key={index}>
//               <input
//                 type="checkbox"
//                 checked={selectedUsers.includes(index)}
//                 onChange={() => handleCheckboxChange(index)}
//               />{" "}
//               {user}{" "}
//               {selectedUsers.includes(index) && (
//                 <button onClick={() => handleDelete(index)}>Delete</button>
//               )}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         "No more users"
//       )}
//     </div>
//   );
// };

// export default Page;

const Page = () => {
  const [allUser, setAllUser] = useState(usersList);
  const [allSelect, setallSelect] = useState(false);
  const [selectedUser, setSelectedUser] = useState([]);

  const handleCheckbox = (index) => {
    // Check if the user is already selected
    if (selectedUser.includes(index)) {
      // If selected, remove the user from the selectedUser array
      setSelectedUser(selectedUser.filter((item) => item !== index));
    } else {
      // If not selected, add the user to the selectedUser array
      setSelectedUser([...selectedUser, index]);
    }
  };

  const userDelete = (index) => {
    // console.log(index);
    const tempUser = allUser.filter((e, ind) => ind !== index);
    setAllUser(tempUser);
  };

  const handleAllSelect = () => {
    if (allSelect) {
      setallSelect(false);
      setSelectedUser([]);
    } else {
      setallSelect(true);
      // setSelectedUser(allUser.map((e,index) => e));
      let ddd = allUser.map((e, i) => i);
      setSelectedUser(ddd);
    }
  };

  return (
    <div className="container">
      {allUser.length > 0 ? (
        <div className="all-user">
          <input
            type="checkbox"
            onChange={handleAllSelect}
            checked={selectedUser.length === allUser.length}
          />{" "}
          SelectAll
          {selectedUser.length === allUser.length && (
            <button onClick={() => setAllUser([])}>All Delete</button>
          )}
        </div>
      ) : (
        "No more users"
      )}
      {allUser.map((e, index) => (
        <div className="single-user mb-3" key={index}>
          <input
            type="checkbox"
            checked={selectedUser.includes(index)}
            onChange={() => handleCheckbox(index)}
          />
          {e}
          {selectedUser.includes(index) && (
            <button onClick={() => userDelete(index)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Page;
