"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/types";

const Posts: React.FC = () => {
  const count = useSelector((state: {counter: RootState}) => state.counter.count);
  const users = useSelector((state: {counter: RootState}) => state.counter.users);
  const dispatch = useDispatch();

  console.log(count, users, "counting app");

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      {users &&
        users.map((user, index) => (
          <div key={index} className="single-user">
            <h3>{user?.name}</h3>
            <h3>{user?.email}</h3>
            <h3>{user?.role}</h3>
          </div>
        ))}
    </>
  );
};

export default Posts;
