import CreateNewTask from './CreateNewTask';
import DeleteTask from './DeleteTask';
import ToggleCompletionStatus from './ToggleCompletionStatus';
import CreateTaskElements from './CreateTaskElements';
import { openEditArea } from '../togglers';

function setEventListeners(root, tasks, lists) {
  const addTaskInput = root.querySelector('.add__task__input');
  const addTaskBtn = root.querySelector('.add__task__icon');

  [...root.children].forEach((task) => {
    task.querySelector('.task__name')?.addEventListener('click', openEditArea);

    task.querySelector('.checkbox')?.addEventListener('click', function () {
      ToggleCompletionStatus(this.closest('.task').dataset.id, tasks, lists);
    });

    task
      .querySelector('.delete__task__icon')
      ?.addEventListener('click', function () {
        DeleteTask(this.closest('.task').dataset.id, tasks, lists);
      });
  });

  addTaskBtn.addEventListener('click', function () {
    CreateNewTask(addTaskInput.value, tasks, lists);
  });

  addTaskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') CreateNewTask(addTaskInput.value, tasks, lists);
  });
}

export default function RenderTasks(root, tasks, lists) {
  const taskElements = CreateTaskElements(tasks);

  root.innerHTML = '';
  root.insertAdjacentHTML('beforeend', taskElements);

  setEventListeners(root, tasks, lists);
}
