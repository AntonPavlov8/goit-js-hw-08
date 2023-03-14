const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.setCurrentTime(localStorage.getItem('time'));

function gg(data) {
  localStorage.setItem('time', data.seconds);
  console.log(data);
}

player.on('timeupdate', _.throttle(gg, 1000));
