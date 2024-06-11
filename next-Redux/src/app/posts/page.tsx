"use client"
import { useDispatch, useSelector } from "react-redux";

const Posts = () => {
  const count = useSelector((state) => state?.counter?.count);
  const users = useSelector((state) => state?.counter?.users);
  console.log(count, users, 'counting app')
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>


      {users && users.map((user, index) => (
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
