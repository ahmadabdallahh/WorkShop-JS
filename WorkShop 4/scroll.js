// Scroll Top

let btnTop = document.getElementsByClassName('btnTop')[0];

window.onscroll = function () {
  if (document.documentElement.scrollTop > 700) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
};

btnTop.addEventListener('click', function () {
  window.scroll({
    top: 0,
    right: 0,
    behavior: 'smooth',
  });
});
