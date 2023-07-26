const main = document.querySelector('.main');
const sidebar = document.querySelector('.sidebar');
const editArea = document.querySelector('.edit__area');
const taskList = document.querySelector('.task__list');
const settings = document.querySelector('.settings');
const modalOverlay = document.querySelector('.modal__overlay');
const overlay = document.querySelector('.overlay');

export function closeEditArea() {
  main.classList.remove('edit__area__open');
  editArea.classList.remove('open');
  overlay.classList.add('hidden');
}

export function openEditArea() {
  main.classList.add('edit__area__open');
  editArea.classList.add('open');
  overlay.classList.remove('hidden');
}

export function openSettings() {
  taskList.classList.add('close');
  settings.classList.remove('close');
  closeSidebar();
}

export function openTaskList() {
  taskList.classList.remove('close');
  settings.classList.add('close');
  closeSidebar();
}

export function openSidebar() {
  overlay.classList.remove('hidden');
  sidebar.classList.add('open');
}

export function closeSidebar() {
  overlay.classList.add('hidden');
  sidebar.classList.remove('open');
}

export function openModal() {
  modalOverlay.classList.remove('hidden');
}

export function closeModal() {
  modalOverlay.classList.add('hidden');
}

export function overlayOnClick() {
  closeEditArea();
  closeSidebar();
}
