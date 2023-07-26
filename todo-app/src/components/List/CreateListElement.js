export default function CreateListElement(list) {
  return `
     <li class="list__item" data-id=${list.id}>
          <h3 class="list__title">${list.name}</h3>
          <div class="task__count">${list.taskCount()}</div>
     </li>`;
}
