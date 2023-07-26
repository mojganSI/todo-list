import { fetchData } from './data';
import RenderLists from './src/components/List/RenderLists';
import RenderTasks from './src/components/Task/RenderTasks';
import {
  closeEditArea,
  openSettings,
  openModal,
  openTaskList,
  openSidebar,
  closeSidebar,
  closeModal,
  overlayOnClick,
} from './src/components/togglers';

const homeBtn = document.querySelector('.home__icon');
const sidebarOpenBtn = document.querySelector('.sidebar__open__icon');
const sidebarCloseBtn = document.querySelector('.sidebar__close__icon');
const tasksContainer = document.querySelector('.task__list__nav');
const listsContainer = document.querySelector('.user__lists__nav');
const settingsBtn = document.querySelector('.settings__btn');
const editAreaCloseBtn = document.querySelector('.edit__area__close__icon');
const cancelBtn = document.querySelector('.cancel__btn');
const closeModalBtn = document.querySelector('.close__modal__btn');
const openModalBtn = document.querySelector('.open__modal__btn');
const overlay = document.querySelector('.overlay');

function setEventListeners() {
  // close edit area
  editAreaCloseBtn.addEventListener('click', closeEditArea);
  // close edit area
  cancelBtn.addEventListener('click', closeEditArea);
  // open settings
  settingsBtn.addEventListener('click', openSettings);
  // open task list
  homeBtn.addEventListener('click', openTaskList);
  // open sidebar
  sidebarOpenBtn.addEventListener('click', openSidebar);
  // close sidebar
  sidebarCloseBtn.addEventListener('click', closeSidebar);
  // open modal
  openModalBtn.addEventListener('click', openModal);
  // close modal
  closeModalBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', overlayOnClick);
}

const init = () => {
  const lists = fetchData();

  RenderTasks(tasksContainer, lists[0].tasks, lists);

  RenderLists(listsContainer, lists);

  setEventListeners();
};

init();
