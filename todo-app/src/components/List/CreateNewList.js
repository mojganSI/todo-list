import RenderLists from './RenderLists';

import { v4 as uuid } from 'uuid';

const listsContainer = document.querySelector('.user__lists__nav');

export default function CreateNewList(listName, addList, lists) {
  if (!listName) return;
  lists.push({
    id: uuid(),
    name: listName,
    taskCount: function () {
      return this.tasks.length;
    },
    tasks: [],
  });

  addList.classList.remove('open');
  RenderLists(listsContainer, lists);
}
