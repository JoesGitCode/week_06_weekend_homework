document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript has loaded');

  const saveForm = document.querySelector('#form');
  saveForm.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.querySelector('#delete-all');
  deleteButton.addEventListener('click', handleDeleteAll)
})

const handleFormSubmit = function (event) {
  event.preventDefault();

  const listItem = createListItem(event.target);
  const list = document.querySelector('#list');
  list.appendChild(listItem);

}

const createListItem = function (form) {
  const listItem = document.createElement('li');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  listItem.appendChild(name);

  const fave = document.createElement('h3');
  fave.textContent = form.fave.value;
  listItem.appendChild(fave);

  const age = document.createElement('p');
  age.textContent = form.age.value;
  listItem.appendChild(age);

  // document.getElementById("form").reset();


  return listItem
}

const handleDeleteAll = function(){
  const retrieveList = document.getElementById('list-heading');
  while (retrieveList.firstChild) {
    retrieveList.removeChild(retrieveList.firstChild);
  }

// what is the difference between querySelector and getElementsById/class
