export default function createTaskElement(task) {
  return `
    <li class="task" data-id="${task.id}" >
        <label class="checkbox__container">
          <input class="checkbox" type="checkbox" ${
            task.done ? 'checked' : ''
          }/>
          <span class="checkmark"></span>
        </label>
        <div class="task__body">
        ${
          task.done
            ? `<del class="task__name">${task.name}</del>`
            : `<h3 class="task__name">${task.name}</h3>`
        }
        ${
          task.steps || task.dueDate || task.description
            ? `<ul class="task__details">
                  ${
                    task.steps
                      ? `<li class="task__steps">${task.steps}</li>`
                      : ''
                  }
                  ${
                    task.dueDate
                      ? `<li class="task__duedate">Echéance : ${task.dueDate}</li>`
                      : ''
                  }
                  ${
                    task.description
                      ? `<li class="task__note">${task.description}</li>`
                      : ''
                  }   
              </ul>`
            : ''
        }   
        </div>
        <img src="/icons/delete.svg" alt="trash can" class="delete__task__icon" />
      </li>`;
}
