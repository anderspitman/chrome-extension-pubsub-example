var overlay = document.querySelector('.overlay');
overlay.addEventListener('click', function() {
  chromeps.publish('commands', 'hide_popup');
});

