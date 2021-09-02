// local reviews data
const reviews = [
  {
    id: 1,
    name: "Neeraj Chopra",
    job: "Gold",
    img:
      "images/dc-Cover-3s4emo0p0iukm01qsqk79gbua5-20210808020806.Medi.jpeg",
    text:
      "Neeraj Chopra VSM is an Indian track and field athlete who competes in the javelin throw. As of August 2021, he is ranked second internationally by World Athletics. A Junior Commissioned Officer in the Indian Army, Chopra is the first track and field athlete to win a gold medal for India at the Olympics.",
  },
  {
    id: 2,
    name: "Ravi Kumar Dahiya",
    job: "Silver",
    img:
      "images/Ravi Kumar Dahiya.jpg",
    text:
      "Ravi Kumar Dahiya, is an Indian freestyle wrestler who won a silver medal at the 2020 Tokyo Olympics in the 57 kg category. Dahiya is also a bronze medalist from 2019 World Wrestling Championships and a two-time Asian champion and he also recived Padma Shri, Arjuna Award for Wrestling, Rajiv Gandhi Khel Ratna award for Wrestling.",
  },
  {
    id: 3,
    name: "Mirabai Chanu",
    job: "Silver",
    img:
      "images/Mirabai Chanu.jpg",
    text:
      "Saikhom Mirabai Chanu is an Indian weightlifter. She won the silver medal at the 2020 Tokyo Olympics in Women's 49 kg category. Mirabai Chanu has won the World Championships and multiple medals at the Commonwealth Games. She was awarded the Padma Shri by the Government of India for her contributions to the sport.",
  },
  
  {
    id: 4,
    name: "PV Sindhu",
    job: "Bronze",
    img:
      "images/PV Sindhu.jpg",
    text:
      " Pusarla Venkata Sindhu is an Indian professional badminton player. Pusarla has won medals at multiple tournaments including Olympics and on the BWF circuit including a gold at the 2019 World Championships and she also recived  Padma Shri, Arjuna Award for badminton,Rajiv Gandhi Khel Ratna award for badminton,CNN-IBN Indian of the Year in Sports ",
  },

  {
    id: 5,
    name: "Lovlina Borgohain",
    job: "Bronze",
    img:
      "images/Lovlina_final.jpg",
    text:
      "Lovlina Borgohain (born 2 October 1997) is an Indian amateur boxer who won a bronze medal at the 2020 Summer Olympics in the women's welterweight event, becoming only the third Indian boxer to win a medal at the Olympics. ... In 2020, she became the sixth person from Assam to receive Arjuna Award.",
  },

  {
    id: 6,
    name: "Indian hockey team'mens",
    job: "Bronze",
    img:
      "images/hockeyTeam.jpg",
    text:
      "India were once a force to be reckoned with in men's hockey having won as many as eight gold medals at the Olympic Games. ... The Indian team has done well under Manpreet's captaincy over the past four years, having won the Asia Cup in 2017,  the Asian Champions Trophy in 2018 and the FIH Series Final in 2019. ",
  },

  {
    id: 7,
    name: "Bajrang Punia",
    job: "Bronze",
    img:
      "images/Bajrang Punia.jpeg",
    text:
      "Bajrang Punia is a Indian freestyle wrestler, who competes in the 65-kg weight category. At the 2020 Tokyo Olympics, Punia won a bronze medal by defeating Kazakhstan’s Daulet Niyazbekov with a wide 8-0 margin. Punia is the only Indian wrestler to win 3 medals at the World Wrestling Championships. ",
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
