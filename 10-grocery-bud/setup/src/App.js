import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({ show: true, type: "", msg: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState("");

  const editAlert = (show = false, type = "", msg = "") => {
    console.log(alert);
    setAlert({ show, type, msg });
  };

  const editItem = (id) => {
    setIsEditing(true);
    setEditId(id);
    setName(list.find((item) => item.id === id).title);
  };

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    editAlert(true, "danger", "item deleted");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      editAlert(true, "danger", "please enter value");
    }
    if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      editAlert(true, "success", "item changed");
      setIsEditing(false);
      setName("");
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      editAlert(true, "success", "item added");
    }
  };

  useEffect(() => localStorage.setItem("list", JSON.stringify(list)), [list]);

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit} className="grocery-form">
        {alert.show && <Alert {...alert} editAlert={editAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <div className="grocery-list">
            {list.map((item) => {
              return (
                <List
                  key={item.id}
                  {...item}
                  list={list}
                  editItem={editItem}
                  deleteItem={deleteItem}
                />
              );
            })}
          </div>
          <button
            className="clear-btn"
            onClick={(e) => {
              setList([]);
              editAlert(true, "danger", "all cleared");
            }}
          >
            clear all
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
