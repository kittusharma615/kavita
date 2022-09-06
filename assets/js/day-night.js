console.clear();

let duration = 0.4;
let isDay = true;

const githubWhite = "assets/images/github.png";
const githubBlack = "assets/images/github-black.png";

const back = document.getElementById('back');
const front = document.getElementById('front');
const github = document.getElementById('github');
const title = document.getElementById('title');

let switchTime = () => {
  back.setAttribute('href', '#' + (isDay ? 'day' : 'night'));
  front.setAttribute('href', '#' + (isDay ? 'night' : 'day'));
  github.setAttribute('src', isDay ? githubWhite : githubBlack);
}
let scale = 30;
let toNightAnimation = gsap.timeline();

toNightAnimation
  .to('#night-content', { duration: duration * 0.5, opacity: 1, ease: 'power2.inOut', x: 0 })
  .to('#circle', { duration: duration, ease: 'power4.in', scaleX: scale, scaleY: scale, x: 1, transformOrigin: '100% 50%', }, 0)
  .to('.day-label', { duration: duration * 2, ease: 'power2.inOut', opacity: 0.2 }, 0)
  .to('.night-label', { duration: duration * 2, ease: 'power2.inOut', opacity: 1 }, 0)
  .set('#circle', { scaleX: -scale, onUpdate: () => switchTime() }, duration)
  .to('#circle', { duration: duration, ease: 'power4.out', scaleX: -1, scaleY: 1, x: 2, }, duration)
  .to('#day-content', { duration: duration * 0.5, opacity: 0.5 }, duration * 1.5)
  .to('body', { backgroundColor: '#000', duration: duration * 2 }, 0)
  .to('#title', { color: '#fff', duration: duration * 2 }, 0)

let switchToggle = document.getElementById('input');
switchToggle.addEventListener('change', () => toggle())

let toggle = () => {
  isDay = switchToggle.checked == true;
  if (isDay) {
    toNightAnimation.reverse();
  } else {
    toNightAnimation.play();
  }
}

toNightAnimation.reverse();
toNightAnimation.pause();