import RenderLists from '../List/RenderLists';
import RenderTasks from './RenderTasks';

const tasksContainer = document.querySelector('.task__list__nav');
const listsContainer = document.querySelector('.user__lists__nav');

export default function DeleteTask(taskId, tasks, lists) {
  tasks.splice(
    tasks.findIndex((task) => task.id === taskId),
    1
  );

  RenderTasks(tasksContainer, tasks, lists);
  RenderLists(listsContainer, lists);
}
