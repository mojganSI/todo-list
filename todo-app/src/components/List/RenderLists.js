import CreateListElements from './CreateListElements';
import CreateNewList from './CreateNewList';

import RenderTasks from '../Task/RenderTasks';
import { openTaskList } from '../togglers';

const tasksContainer = document.querySelector('.task__list__nav');

function setEventListeners(root, lists) {
  const listItems = root.querySelectorAll('.list__item');
  const newListBtn = root.querySelector('.new__list__btn');

  const addList = root.querySelector('.add__list');
  const addListBtn = root.querySelector('.add__list__icon');
  const addListInput = root.querySelector('.add__list__input');

  listItems.forEach((listItem) => {
    listItem.addEventListener('click', function () {
      const { tasks } = lists.find((list) => list.id === this.dataset.id);
      RenderTasks(tasksContainer, tasks, lists);

      openTaskList();
    });
  });

  newListBtn.addEventListener('click', function () {
    if (!addList.classList.contains('open')) {
      addList.classList.add('open');

      const html = `<h3>Cancel</h3>`;

      newListBtn.innerHTML = '';
      newListBtn.insertAdjacentHTML('beforeend', html);
    } else {
      addList.classList.remove('open');

      const html = `
          <img
            src="/icons/plus.svg"
            alt="plus"
          />
          <h3>Nouvelle liste</h3>`;

      newListBtn.innerHTML = '';
      newListBtn.insertAdjacentHTML('beforeend', html);
    }
  });

  addListBtn.addEventListener('click', function () {
    CreateNewList(addListInput.value, addList, lists);
  });
  addListInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') CreateNewList(addListInput.value, addList, lists);
  });
}

export default function RenderLists(root, lists) {
  const listElements = CreateListElements(lists);

  root.innerHTML = '';
  root.insertAdjacentHTML('beforeend', listElements);

  setEventListeners(root, lists);
}
