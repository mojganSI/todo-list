import CreateTaskElement from './CreateTaskElement';

export default function CreateTaskElements(tasks) {
  let html = '';

  tasks.forEach((task) => {
    html += CreateTaskElement(task);
  });

  const input = `
            <li class="add__task">
                <input type="text" placeholder="Ajouter une tâche..." class="add__task__input" />
                <img src="/icons/plus-dark.svg" alt="trash can" class="add__task__icon" />
            </li>`;

  return (html += input);
}
