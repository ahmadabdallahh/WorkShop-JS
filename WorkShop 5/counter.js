// Counter

document.addEventListener('DOMContentLoaded', function () {
  let counterContainer = document.getElementsByClassName('container')[0];
  let counterView = localStorage.getItem('page_view');
  if (counterView) {
    counterView = Number(counterView) + 1;
  } else {
    counterView = 1;
  }

  localStorage.setItem('page_view', counterView);
  counterContainer.innerHTML = counterView;
});
