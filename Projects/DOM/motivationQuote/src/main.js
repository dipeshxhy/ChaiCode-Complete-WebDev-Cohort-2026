const api_key = import.meta.env.VITE_API_KEY;
// date container
const dateContainer = document.getElementById('dateContainer');
// show image from unsplash

const accessKey = import.meta.env.VITE_ACCESS_KEY;
const background = document.querySelector('.bg-image');
const today = new Date().toDateString();
const stored = JSON.parse(localStorage.getItem('dailyImage'));
(async () => {
  fetch('https://api.api-ninjas.com/v2/quoteoftheday', {
    method: 'GET',
    headers: {
      'X-Api-Key': api_key,
    },
  })
    .then(res => res.json())
    .then(q => {
      console.log(q);
      const card = document.getElementById('card');
      card.innerHTML = `
    <p class="text-lg italic">
    "${q[0].quote}"
    <br>
    <p class="text-sm mt-4 text-right font-semibold ">- ${q[0].author}</p>
    </p>
    `;
    });
})();

function clock() {
  const formatted = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(new Date());

  dateContainer.textContent = formatted;
}

setInterval(clock, 1000);
clock();

if (!stored || stored.date !== today) {
  fetch(
    `https://api.unsplash.com/photos/random?query=motivation&client_id=${accessKey}`
  )
    .then(res => res.json())
    .then(data => {
      localStorage.setItem(
        'dailyImage',
        JSON.stringify({
          date: today,
          url: data.urls.full,
        })
      );
      background.style.backgroundImage = `url(${data.urls.full})`;
      background.style.backgroundSize = 'cover';
      background.style.backgroundPosition = 'center';
    });
} else {
  background.style.backgroundImage = `url(${stored.url})`;
  background.style.backgroundSize = 'cover';
  background.style.backgroundPosition = 'center';
}

// heroscope
const formZodiac = document.querySelector('.form-zodiac');
const inputZodiac = document.getElementById('zodiacInput');
const zodiacContainer = document.getElementById('zodiacContainer');
const storedZodiac = JSON.parse(localStorage.getItem('zodiac'));

async function getZodiac(search) {
  if (!storedZodiac || !storedZodiac[search]) {
    try {
      const res = await fetch(
        `https://api.api-ninjas.com/v1/horoscope?zodiac=${search}`,
        {
          method: 'GET',
          headers: {
            'X-Api-Key': api_key,
          },
        }
      );
      const data = await res.json();
      localStorage.setItem('zodiac', JSON.stringify({ ...data }));
      return data;
    } catch (error) {
      console.log(error);
    }
  } else {
    return storedZodiac[search];
  }
}

const searchZodiacs =
  'aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn, aquarius, pisces'.split(
    ', '
  );
console.log(searchZodiacs);

formZodiac.addEventListener('submit', async function (e) {
  e.preventDefault();
  const value = inputZodiac.value.trim().toLowerCase();

  if (!value || !searchZodiacs.includes(value)) {
    alert(`used one of this ${searchZodiacs}`);
    return;
  }

  const data = await getZodiac(value);

  console.log(data);
  zodiacContainer.innerHTML = `
<span>${data.sign}</span>
<p>${data.horoscope}</p>
`;
});
