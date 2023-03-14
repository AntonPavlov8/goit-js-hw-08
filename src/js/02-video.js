import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

function videoTimeUpdate(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

player.on('timeupdate', throttle(videoTimeUpdate, 1000));
