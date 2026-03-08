//select button
const addBtn = document.getElementById('addTodoButton');
// select todo input
const todoInput = document.getElementById('todoInput');
const todoContainer = document.getElementById('todoContainer');
const form = document.querySelector('form');

// create element function
function createElement(el) {
  const element = document.createElement(el);
  return element;
}

// add event listener to addBtn
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const value = todoInput.value;
  if (!value) return;

  // create checkbox

  let li = document.createElement('li');
  li.textContent = value;

  const checkbox = createElement('input');
  checkbox.type = 'checkbox';
  li.appendChild(checkbox);

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      li.style.textDecoration = 'line-through';
    } else {
      li.style.textDecoration = 'none';
    }
  });
  const deleteBtn = createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', function () {
    li.remove();
    li = null;
  });
  li.appendChild(deleteBtn);

  todoContainer.appendChild(li);
  todoInput.value = '';
});
