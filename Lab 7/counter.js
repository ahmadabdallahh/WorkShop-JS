/*
    How to create a visitor counter using JavaScript and LocalStorage to
    keep track of the number of visits
*/

document.addEventListener('DOMContentLoaded', function () {
  let counter_viewer = document.getElementById('counter_viewer');
  let counter_page = localStorage.getItem('page_view');
  if (counter_viewer) {
    counter_page = Number(counter_page) + 1;
  } else {
    counter_page = 1;
  }
  localStorage.setItem('page_view', counter_page);
  counter_viewer.innerHTML = counter_page;
});
