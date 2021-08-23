const bulb = document.querySelector('#bulb');

bulb.addEventListener('click', function () {
  bulb.classList.toggle('bulb-off');
  bulb.classList.toggle('bulb-on');
});
