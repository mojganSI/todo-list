import RenderTasks from './RenderTasks';

import { v4 as uuid } from 'uuid';
import RenderLists from '../List/RenderLists';

const tasksContainer = document.querySelector('.task__list__nav');
const listsContainer = document.querySelector('.user__lists__nav');

export default function CreateNewTask(taskName, tasks, lists) {
  if (!taskName) return;

  tasks.push({
    id: uuid(),
    name: taskName,
    done: false,
    dueDate: '',
    steps: '',
    description: '',
  });

  RenderTasks(tasksContainer, tasks, lists);
  RenderLists(listsContainer, lists);
}
