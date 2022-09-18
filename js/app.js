// get main variables
const songsBar = document.querySelector('.songs-bar'),
  playingTop = document.querySelector('.playing-top');

const surahImg = document.querySelector('.surah-img'),
  surahName = document.querySelector('.surah-name'),
  sheikhName = document.querySelector('.sheikh-name');

const prevBtn = document.querySelector('.prev-btn'),
  pausePlayBtn = document.querySelector('.pause-play-btn'),
  playBtn = document.querySelector('.play-btn'),
  pauseBtn = document.querySelector('.pause-btn'),
  nextBtn = document.querySelector('.next-btn'),
  myAudio = document.querySelector('audio'),
  surahLists = document.querySelector('.surah-lists');
// surah Data
const allSurah = [
  {
    name: 'سورة الناس',
    sheikh: 'محمود خليل الحصري',
  },
  {
    name: 'سورة الفلق ',
    sheikh: 'محمد صديق المنشاوي',
  },
  {
    name: 'سورة الفاتحة',
    sheikh: 'عبدالباسط عبدالصمد',
  },
  {
    name: 'سورة العصر ',
    sheikh: 'محمود خليل الحصري',
  },
  {
    name: 'سورة الاخلاص',
    sheikh: 'عبدالباسط عبدالصمد',
  },
  {
    name: 'سورة الكافرون',
    sheikh: 'مشاري العفاسي',
  },
];
let currentSurah;
// DEFAULT
(function () {
  currentSurah = 0;
  playingTop.textContent = `playing ${1} of ${allSurah.length}`;
  surahImg.src = `images/${allSurah[0].sheikh}.jpg`;

  sheikhName.textContent = `${allSurah[0].sheikh}`;

  surahName.textContent = `${allSurah[0].name}`;

  document.querySelector('audio').src = `audio/${
    allSurah[`${0}`].name.split(' ')[1]
  }.mp3`;
})();

const switching = function () {
  // change playing top
  playingTop.textContent = `playing ${currentSurah + 1} of ${allSurah.length}`;
  // change img
  surahImg.src = `images/${allSurah[currentSurah].sheikh}.jpg`;
  // change name
  sheikhName.textContent = `${allSurah[currentSurah].sheikh}`;
  // change surah name
  surahName.textContent = `${allSurah[currentSurah].name}`;
  // change audio
  document.querySelector('audio').src = `audio/${
    allSurah[`${currentSurah}`].name.split(' ')[1]
  }.mp3`;
};

const playing = function () {
  pauseBtn.classList.toggle('hidden');
  playBtn.classList.toggle('hidden');
  if (!pauseBtn.classList.contains('hidden')) myAudio.play();
  else myAudio.pause();
};

prevBtn.addEventListener('click', function (e) {
  e.preventDefault();
  currentSurah--;
  if (currentSurah < 0) currentSurah = allSurah.length - 1;
  switching();
});

nextBtn.addEventListener('click', function (e) {
  e.preventDefault();
  currentSurah++;
  if (currentSurah > allSurah.length - 1) currentSurah = 0;
  switching();
});

pausePlayBtn.addEventListener('click', playing);

const arr = ['a', 'b', 'c', 'd', 'f'];
// let html;
// const creation = function () {
//   for (let i = 0; i <= allSurah.length - 1; i++) {
//     html = `
//   <div class="surah-info">
//       <p class="surah-name">${allSurah[i].name}</p>
//       <p class="author">${allSurah[i].sheikh}</p>
//   </div>
//   `;
//     surahLists.insertAdjacentHTML('afterbegin', html);
//   }
// };
// document.querySelector('.songs-bar').addEventListener('click', function (e) {
//   e.preventDefault();
//   surahLists.classList.toggle('hidden');
//   creation();
//   console.log('od');
// });

// let cur = -1;

// nextBtn.addEventListener('click', function (e) {
//   e.preventDefault();
//   cur++;
//   if (cur > arr.length - 1) cur = 0;
//   console.log(arr[cur]);
// });
