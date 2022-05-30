const listContainer = document.getElementById('list-container');
const addContainer = document.getElementById('add-container');
const contactContainer = document.getElementById('contact-container');

export const toListContainer = () => {
  listContainer.classList.remove('none');
  addContainer.classList.add('none');
  contactContainer.classList.add('none');
};

export const toAddContainer = () => {
  listContainer.classList.add('none');
  addContainer.classList.remove('none');
  contactContainer.classList.add('none');
};

export const toContactContainer = () => {
  listContainer.classList.add('none');
  addContainer.classList.add('none');
  contactContainer.classList.remove('none');
};
