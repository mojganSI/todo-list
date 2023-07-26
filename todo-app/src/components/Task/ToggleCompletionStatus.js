import RenderTasks from './RenderTasks';

const tasksContainer = document.querySelector('.task__list__nav');

export default function ToggleCompletionStatus(taskId, tasks, lists) {
  tasks.forEach((task) => {
    if (task.id === taskId) {
      task.done = !task.done;
    }
  });

  RenderTasks(tasksContainer, tasks, lists);
}
