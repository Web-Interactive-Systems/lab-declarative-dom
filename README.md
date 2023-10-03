---
type: NoteCard
---

# lab - declarative DOM

> Create web components declaratively insteal of imperative style of programming.

One of the main features of modern frameworks is their offering to create views or DOM declaratively.

> Declarative programming is **a non-imperative style of programming in which programs describe their desired results without explicitly listing commands or steps that must be performed**.
>
> — <https://en.wikipedia.org/wiki/Declarative_programming>

# Imperative to-do app

Previously, we saw a code snippet of a to-do app created using javascript. It looks like this:

```js
// state
const state = {
  tasks: [
    {
      id: 'todo-0',
      status: 'doing',
      name: 'Learn modern web frameworks',
    },
  ],
};

// todo item
function buildTodoItemEl(id, name) {
  const item = document.createElement('li');
  const span = document.createElement('span');
  const textContent = document.createTextNode(name);

  span.appendChild(textContent);

  item.id = id;
  item.appendChild(span);
  item.appendChild(buildDeleteButtonEl(id));

  return item;
}

// delete button
function buildDeleteButtonEl(id) {
  const button = document.createElement('button');
  const textContent = document.createTextNode('Delete');

  button.setAttribute('type', 'button');
  button.appendChild(textContent);

  return button;
}

// render todo list
function renderTodoList() {
  const frag = document.createDocumentFragment();
  state.tasks.forEach((task) => {
    const item = buildTodoItemEl(task.id, task.name);
    frag.appendChild(item);
  });

  while (todoListEl.firstChild) {
    todoListEl.removeChild(todoListEl.firstChild);
  }
  todoListEl.appendChild(frag);
}
```

This is a lot of code that can be hard to follow. A declarative approach would be simpler. Here is a rough equivalent code in Vuejs:

# Declarative to-do app

```jsx
    // state
    const state = { tasks: [
      {
        id: "todo-0",
        status: "doing",
        name: "Learn modern web frameworks",
      },
    ] };

    // template
    <ul>
      <li v-for="task in tasks" v-bind:key="task.id">
        <span>{{task.name}}</span>
        <button type="button">Delete</button>
      </li>
    </ul>
```

# Lab

To appreciate the power of declarative DOM, in this first lab, we will create/use our own declarative dom library that mimics some of the React APIs. Let’s call it Mini.

::::cal
Don't wary if you don't understand all the code.

Just follow the instructions in the lab files.

We will explain some of the advanced concepts as we progress in the course.

::::

# Todo

[] Check out and complete the labs in the `src` folder.
