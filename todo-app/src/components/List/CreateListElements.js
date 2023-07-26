import CreateListElement from "./CreateListElement";

export default function CreateListElements(lists) {
  let html = '';

  lists.forEach((list) => {
    html += CreateListElement(list);
  });

  return (html += `
  <li class="new__list">
    <div class="new__list__btn">
    <img
        src="/icons/plus.svg"
        alt="plus"
    />
    <h3>Nouvelle liste</h3>
    </div>
  </li>
  <li class="add__list">
    <input
      type="text"
      class="add__list__input"
      placeholder="Ajouter la liste..."
    />
    <img src="/icons/plus-dark.svg" alt="plus" class="add__list__icon" />
  </li>
  `);
}
