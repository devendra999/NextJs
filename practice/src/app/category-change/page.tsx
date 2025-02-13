"use client";

import React, { useState } from "react";
import "./style.css";

const taskList = [
  {
    category: "Todo",
    tasks: [
      {
        id: 54,
        title: "Task 1",
      },
      {
        id: 5584,
        title: "Task 5",
      },
      {
        id: 514754,
        title: "Task 4",
      },
    ],
  },
  {
    category: "In Progress",
    tasks: [
      {
        id: 5487,
        title: "Task 3",
      },
      {
        id: 543454587,
        title: "Task 6",
      },
    ],
  },
  {
    category: "Completed",
    tasks: [
      {
        id: 5478425547,
        title: "Task 2",
      },
    ],
  },
];

const page = () => {
  const [board, setBoard] = useState(taskList);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [oldCat, setOldCat] = useState("");
  const [editId, setEditId] = useState("");

  const categoryies = board.map((e) => e.category);

  // add task
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      // console.log(editId, title, category, 'editId--')

      const tempBoard = board.map((brd) => {
        // check category
        if (brd.category === category) {
          // check card exist
          const existingCard = brd.tasks.find((tsk) => tsk.id === editId);

          // if card exist
          if (existingCard) {
            return {
              ...brd,
              tasks: brd.tasks.map((singletsk) => {
                if (singletsk.id === editId) {
                  return {
                    ...singletsk,
                    title,
                  };
                }
                return singletsk;
              }),
            };
          } else {
            return {
              ...brd,
              tasks: [...brd.tasks, { title, id: editId }],
            };
          }
        } else {
          return {
            ...brd,
            tasks: brd.tasks.filter((e) => e.id !== editId)
          }
        }
      });

      console.log(tempBoard);

      setBoard(tempBoard);
      setTitle("");
      setCategory("");
      setOldCat("");
      setEditId("");
    } else {
      const tempBoard = board?.map((brd) => {
        if (brd?.category === category) {
          return {
            ...brd,
            tasks: [...brd.tasks, { id: new Date().getTime(), title }],
          };
        }
        return brd;
      });
      setBoard(tempBoard);
      setTitle("");
      setCategory("");
    }
  };

  const taskRemove = (cat, id) => {
    const tempBoard = board.map((brd) => {
      if (brd.category === cat) {
        return {
          ...brd,
          tasks: brd.tasks.filter((task) => task.id !== id),
        };
      }
      return brd;
    });
    setBoard(tempBoard);
  };

  const editTask = (cat, title, id) => {
    setOldCat(cat);
    setEditId(id);
    setTitle(title);
    setCategory(cat);
  };

  return (
    <div className="container">
      <div className="add">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Please select</option>
            {categoryies.map((e) => (
              <option>{e}</option>
            ))}
          </select>
          <button>{editId ? "Edit" : "add"}</button>
        </form>
      </div>
      <div className="data">
        {board &&
          board.length > 0 &&
          board.map((brd, index) => (
            <BoardItem
              key={index}
              board={brd}
              taskRemove={taskRemove}
              editTask={editTask}
            />
          ))}
      </div>
    </div>
  );
};
export default page;

const BoardItem = (props) => {
  const category = props?.board?.category;
  const tasks = props?.board?.tasks;
  return (
    <>
      <div className="single-board">
        <h3>{category}</h3>
        <div className="card">
          {tasks?.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              taskRemove={props?.taskRemove}
              editTask={props?.editTask}
              category={category}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const TaskItem = (props) => {
  const task = props?.task;
  const id = task?.id;
  const title = task?.title;
  const category = props?.category;
  const taskRemove = props?.taskRemove;
  const editTask = props?.editTask;
  return (
    <div className="single-task">
      <h5>{title}</h5>
      <div className="flex">
        <button onClick={() => editTask(category, title, id)}>Edit</button>
        <button onClick={() => taskRemove(category, id)}>Dlt</button>
      </div>
    </div>
  );
};
