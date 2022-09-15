export const setItem = (todoItem) => {
  let todos = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("todos")) {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todoItem);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
};

export const getItems = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("todos")) {
      return JSON.parse(localStorage.getItem("todos"));
    }
  }
};

export const removeItem = (id) => {
  let todos = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("todos")) {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.map((todoItem, index) => {
      if (todoItem.id === id) {
        todos.splice(index, 1);
      }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  }
};
