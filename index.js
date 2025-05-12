let secarh = document.getElementById("secarh");
let search_icon = document.getElementById("search_icon");

search_icon.addEventListener("click", () => {
  secarh.classList.toggle("search_input");
});

let cato_box = document.getElementById("cato_box");
let left_scroll = document.getElementById("left_scroll");
let right_scroll = document.getElementById("right_scroll");

left_scroll.addEventListener("click", () => {
  cato_box.scrollLeft -= 100;
});

right_scroll.addEventListener("click", () => {
  cato_box.scrollLeft += 100;
});

let movie_bx_1 = document.getElementById("movie_bx_1");
let left_scrolll = document.getElementById("left_scrolll");
let right_scrolll = document.getElementById("right_scrolll");

left_scrolll.addEventListener("click", () => {
  movie_bx_1.scrollLeft -= 150;
});

right_scrolll.addEventListener("click", () => {
  movie_bx_1.scrollLeft += 150;
});

let start_seekbar_end = document.querySelector(" .start_seekbar_end");
let cc_vol_screen = document.querySelector(" .cc_vol_screen");
let vol = document.getElementById("vol");
let vol_icon = document.getElementById("vol_icon");

vol_icon.addEventListener("click", () => {
  cc_vol_screen.classList.toggle("cc_vol");
  start_seekbar_end.classList.toggle("start_seekbar");
  vol.classList.toggle("input_vol");
});

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bxs-volume-full");
    vol_icon.classList.remove("bxs-volume-low");
    vol_icon.classList.add("bxs-volume-mute");
  }
  if (vol.value > 0) {
    vol_icon.classList.remove("bxs-volume-full");
    vol_icon.classList.add("bxs-volume-low");
    vol_icon.classList.remove("bxs-volume-mute");
  }
  if (vol.value > 50) {
    vol_icon.classList.add("bxs-volume-full");
    vol_icon.classList.remove("bxs-volume-low");
    vol_icon.classList.remove("bxs-volume-mute");
  }

  let vol_a = vol.value;
  video.volume = vol_a / 100;
});

// full screen start

let full_screen = document.getElementById("full_screen");
full_screen.addEventListener("click", () => {
  video.requestFullscreen();
});

// video box start

let title_video = document.getElementsByClassName("title_video");
let video_1 = document.getElementsByClassName("video_1");

video_1[0].addEventListener("click", () => {
  video.src = "../video/Pir.mp4 ";
  video.play();
  title_video[0].innerText = "Pirates of the Caribbean (2015)";
  plays.classList.add("bx-pause-circle");
  plays.classList.remove("bx-play");
});
video_1[1].addEventListener("click", () => {
  video.src = "../Video/Remapage.mp4";
  video.play();
  title_video[0].innerText = "Rampage (2017)";
  plays.classList.add("bx-pause-circle");
  plays.classList.remove("bx-play");
});
video_1[2].addEventListener("click", () => {
  video.src = "../video/Vonom.mp4";
  video.play();
  title_video[0].innerText = "Vonom (2015)";
  plays.classList.add("bx-pause-circle");
  plays.classList.remove("bx-play");
});
// year and a-z box start

let year = document.getElementById("year");
let a_z = document.getElementById("a_z");
year.addEventListener("click", () => {
  year.classList.toggle("show_year1");
});
a_z.addEventListener("click", () => {
  a_z.classList.toggle("show_year1");
});

// header slider start

let header_dur = document.getElementById("header_dur");
let header_gen = document.getElementById("header_gen");
let header_title = document.getElementById("header_title");
let header_pra = document.getElementById("header_pra");
let header = document.getElementsByTagName("header")[0];
let silder_btns = document.getElementsByClassName("slider");

const slider_load = () => {
  setTimeout(() => {
    header.style.background =
      "url('../Image/Rampage.jpg') no-repeat center center/cover";
    header_dur.innerText = "1h 47min";
    header_gen.innerHTML = `<i class='bx bxs-star'></i>6.5
    <span>Action / Adventure / Sci-Fi</span>`;
    header_title.innerText = "Rampage";
    silder_btns[0].style.background = "#fff";
    silder_btns[1].style.background = "rgb(184,184,184,0.1)";
    silder_btns[2].style.background = "rgb(184,184,184,0.1)";
  }, 0000);

  setTimeout(() => {
    header.style.background =
      "url('../Image/Ant man.jpg') no-repeat center center/cover";
    header_dur.innerText = "1h 57min";
    header_gen.innerHTML = `<i class='bx bxs-star'></i>8.5
    <span>Comady / Action / Sci-Fi</span>`;
    header_title.innerText = "Ant-Man";
    silder_btns[0].style.background = "rgb(184 , 184 , 184 , 0.1)";
    silder_btns[1].style.background = "#fff";
    silder_btns[2].style.background = "rgb(184 , 184 , 184 , 0.1)";
  }, 5000);

  setTimeout(() => {
    header.style.background =
      "url('../Image/Pirates.jpg') no-repeat center center/cover";
    header_dur.innerText = "2h 10min";
    header_gen.innerHTML = `<i class='bx bxs-star'></i>9.2
    <span>Comady / Action / Drama</span>`;
    header_title.innerText = "Pirates of the Caribbean";
    header_pra.innerText =
      "Pirates of the Caribbean is a Disney media franchise encompassing numerous theme park rides, a series of films, and spin-off novels, as well as a number of related video games and other media publications. The franchise originated with Walt Disney's theme park ride of the same name,";
    silder_btns[0].style.background = "rgb(184, 184, 184, .1)";
    silder_btns[1].style.background = "rgb(184, 184, 184, .1)";
    silder_btns[2].style.background = "#fff";
  }, 10000);
};
setInterval(slider_load, 15000);
slider_load();

// Video controal start k
let plays = document.getElementById("play");
let video = document.getElementById("video");
let play_btn = document.getElementById("play_btn");

// video.play();
play_btn.addEventListener("click", () => {
  video.play();
  plays.classList.add("bx-pause-circle");
  plays.classList.remove("bx-play");
});
//  <i class='bx bx-pause-circle'></i>
plays.addEventListener("click", () => {
  if (video.paused || video.currentTime <= 0) {
    plays.classList.add("bx-pause-circle");
    plays.classList.remove("bx-play");
    video.play();
  } else {
    plays.classList.remove("bx-pause-circle");
    plays.classList.add("bx-play");
    video.pause();
  }
});

video.addEventListener("timeupdate", () => {
  let start_time = document.getElementById("start_time");
  let end_time = document.getElementById("end_time");
  let video_duration = video.duration;
  let min = Math.floor(video_duration / 60);
  let hour = Math.floor(min / 60);
  let sec = Math.floor(video_duration % 60);

  let video_current_time = video.currentTime;

  let start_min = Math.floor(video_current_time / 60);
  let start_sec = Math.floor(video_current_time % 60);
  let start_hour = Math.floor(start_min / 60);

  if (start_min < 10) {
    start_min = "0" + start_min;
  }
  if (start_sec < 10) {
    start_sec = "0" + start_sec;
  }

  start_time.innerText = start_min + ":" + start_sec;

  if (start_hour < 10) {
    start_hour = "0" + start_hour;
  }
  if (start_min == 60 || start_min > 60) {
    start_time.innerText = start_hour + ":" + start_min + ":" + start_sec;
  }
  // end
  let end_min = min - start_min;
  let end_sec = video_duration - start_sec;
  let end_hour = hour - start_hour;

  let end_mins = Math.floor(end_min % 60);
  if (end_mins < 10) {
    end_mins = "0" + end_mins;
  }

  let end_secs = Math.floor(end_sec % 60);
  if (end_secs < 10) {
    end_secs = "0" + end_secs;
  }

  let end_hours = Math.floor(end_hour / 60);
  if (end_hours < 10) {
    end_hours = "0" + end_hours;
  }
  end_time.innerText = "-" + end_hours + ":" + end_mins + ":" + end_secs;

  if (end_min == 60 || end_min > 60) {
    start_time.innerText = "-" + end_hour + ":" + end_mins + ":" + end_sec;
  }

  let seek = document.getElementById("seek");
  let seek_2 = document.getElementById("seek_2");
  let seek_dot = document.getElementById("seek_dot");

  let progressbar = parseInt((video.currentTime / video.duration) * 100);

  seek.value = progressbar;
  let seekbar = seek.value;
  seek_2.style.width = `${seekbar}%`;
  seek_dot.style.left = `${seekbar}%`;

  // seekbar value change
  let sec_30 = document.getElementById("sec_30");
  seek.addEventListener("change", () => {
    video.currentTime = (seek.value * video.duration) / 100;
    sec_30.addEventListener("click", () => {
      video.currentTime = seek.value * ((video.duration - 30) / 100);
    });
  });
  // video end event
  video.addEventListener("ended", () => {
    plays.classList.remove("bx-pause-circle");
    plays.classList.add("bx-play");
  });
});

// volume change

// Movie Box Set

const movie = [
  {
    id: 1,
    img: "../Image/HOBBIT.jpg",
    title: "HOBBIT",
    letter: "X",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horor",
    year: 2021,
    rate: 7.5,
    url: "the_gazi_attack.html",
    tppr: "recent",
    most: "movie",
    upload: "letest",
  },
  {
    id: 2,
    img: "../Image/BFG.jpg",
    title: "BFG",
    letter: "B",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horor",
    year: 2020,
    rate: 7.0,
    url: "none",
    tppr: "recent",
    most: "movie",
    upload: "letest",
  },
  {
    id: 3,
    img: "../Image/Only.jpg",
    title: "Only",
    letter: "X",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horor",
    year: 2022,
    rate: 6.0,
    url: "none",
    tppr: "recent",
    most: "movie",
    upload: "letest",
  },
  {
    id: 4,
    img: "../Image/SHANG-JHI.jpg",
    title: "SHANG-JHI",
    letter: "X",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horor",
    year: 2020,
    rate: 7.5,
    url: "none",
    tppr: "recent",
    most: "movie",
    upload: "letest",
  },
  {
    id: 5,
    img: "../Image/sing.jpg",
    title: "sing",
    letter: "X",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horor",
    year: 2020,
    rate: 6.0,
    url: "none",
    tppr: "recent",
    most: "movie",
    upload: "letest",
  },
  {
    id: 6,
    img: "../Image/sing2.jpg",
    title: "Sing-part2",
    letter: "X",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horor",
    year: 2022,
    rate: 7.5,
    url: "none",
    tppr: "recent",
    most: "movie",
    upload: "letest",
  },
  {
    id: 7,
    img: "../Image/The Jungle Book.jpg",
    title: "The Jungle Book",
    letter: "T",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horor",
    year: 2020,
    rate: 8.0,
    url: "none",
    tppr: "recent",
    most: "movie",
    upload: "letest",
  },
  {
    id: 8,
    img: "../Image/TrainOfBusan.jpg",
    title: "TrainOfBusan",
    letter: "t",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horor",
    year: 2020,
    rate: 7.5,
    url: "none",
    tppr: "recent",
    most: "movie",
    upload: "letest",
  },
  {
    id: 9,
    img: "../Image/VALERIVN.jpg",
    title: "VALERIVN",
    letter: "X",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horor",
    year: 2022,
    rate: 6.5,
    url: "none",
    tppr: "recent",
    most: "movie",
    upload: "letest",
  },
  {
    id: 10,
    img: "../Image/WONDER.jpg",
    title: "WONDER",
    letter: "X",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horor",
    year: 2021,
    rate: 7.5,
    url: "none",
    tppr: "recent",
    most: "movie",
    upload: "letest",
  },
  {
    id: 11,
    img: "../Image/ZooToPIA.jpg",
    title: "ZooToPIA",
    letter: "X",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horor",
    year: 2021,
    rate: 6.5,
    url: "none",
    tppr: "recent",
    most: "movie",
    upload: "letest",
  },
  {
    id: 12,
    img: "../Image/The Tomorrow war.jpg",
    title: "The tomorrow war",
    letter: "T",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horor",
    year: 2022,
    rate: 6.5,
    url: "none",
    tppr: "recent",
    most: "movie",
    upload: "letest",
  },
  {
    id: 13,
    img: "../Image/Raya.jpg",
    title: "Raya",
    letter: "X",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horor",
    year: 2021,
    rate: 7.0,
    url: "none",
    tppr: "recent",
    most: "movie",
    upload: "letest",
  },
  {
    id: 14,
    img: "../Image/HOBBIT.jpg",
    title: "HOBBIT",
    letter: "X",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horor",
    year: 2021,
    rate: 6.5,
    url: "none",
    tppr: "recent",
    most: "movie",
    upload: "letest",
  },
  {
    id: 15,
    img: "../Image/BlackWldow.jpg",
    title: "BlackWldow",
    letter: "B",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horor",
    year: 2021,
    rate: 8.0,
    url: "none",
    tppr: "recent",
    most: "movie",
    upload: "letest",
  },
  {
    id: 16,
    img: "../Image/AMAZON ORIGINAL.jpg",
    title: "AMAZON ORIGINAL",
    letter: "A",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horor",
    year: 2020,
    rate: 6.5,
    url: "none",
    tppr: "recent",
    most: "movie",
    upload: "letest",
  },
  {
    id: 17,
    img: "../MCrime/Criminal justice.jpg",
    title: "Criminal justice",
    letter: "X",
    genre1: "action",
    genre2: "crime",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horor",
    year: 2020,
    rate: 8.5,
    url: "none",
    tppr: "recent",
    most: "movie",
    upload: "none",
  },
  {
    id: 18,
    img: "../MCrime/GOOFATHER.jpg",
    title: "GOOFATHER",
    letter: "X",
    genre1: "action",
    genre2: "crime",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horor",
    year: 2022,
    rate: 7.0,
    url: "none",
    tppr: "recent",
    most: "movie",
    upload: "none",
  },
  {
    id: 19,
    img: "../MCrime/JOHN4WICK.jpg",
    title: "JOHN4WICK",
    letter: "X",
    genre1: "action",
    genre2: "crime",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horor",
    year: 2021,
    rate: 6.5,
    url: "none",
    tppr: "recent",
    most: "movie",
    upload: "none",
  },
  {
    id: 20,
    img: "../MCrime/LIe to me.jpg",
    title: "LIe to me",
    letter: "X",
    genre1: "action",
    genre2: "crime",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horor",
    year: 2022,
    rate: 6.5,
    url: "none",
    tppr: "recent",
    most: "movie",
    upload: "none",
  },
  {
    id: 21,
    img: "../MCrime/LUCIFER.jpg",
    title: "LUCIFER.",
    letter: "X",
    genre1: "action",
    genre2: "crime",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horor",
    year: 2021,
    rate: 7.5,
    url: "none",
    tppr: "recent",
    most: "movie",
    upload: "none",
  },
  {
    id: 22,
    img: "../MCrime/MAFIA.jpg",
    title: "MAFIA",
    letter: "X",
    genre1: "action",
    genre2: "crime",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horor",
    year: 2020,
    rate: 8.5,
    url: "none",
    tppr: "recent",
    most: "movie",
    upload: "none",
  },
  {
    id: 23,
    img: "../MCrime/PEALY BLINDERS.jpg",
    title: "PEALY BLINDERS",
    letter: "X",
    genre1: "action",
    genre2: "crime",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "none",
    year: 2022,
    rate: 7.5,
    url: "none",
    tppr: "recent",
    most: "movie",
    upload: "none",
  },
  {
    id: 24,
    img: "../MCrime/THE BOYS.jpg",
    title: "THE BOYS",
    letter: "T",
    genre1: "action",
    genre2: "crime",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horor",
    year: 2020,
    rate: 8.0,
    url: "none",
    tppr: "recent",
    most: "movie",
    upload: "none",
  },
  {
    id: 25,
    img: "../MCrime/TULSA KING.jpg",
    title: "TULSAS KING",
    letter: "T",
    genre1: "action",
    genre2: "crime",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horor",
    year: 2021,
    rate: 7.5,
    url: "none",
    tppr: "recent",
    most: "movie",
    upload: "none",
  },
  {
    id: 26,
    img: "../MCrime/TULSA KING.jpg",
    title: "TULSAS KING",
    letter: "T",
    genre1: "action",
    genre2: "crime",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Cmady",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horor",
    year: 2021,
    rate: 7.5,
    url: "none",
    tppr: "recent",
    most: "movie",
    upload: "none",
  },
];

// action button and active box

let action1 = document.getElementById("action1");
let action_bx = document.getElementById("action_bx");
action1.addEventListener("click", () => {
  action1.classList.toggle("cato_button_active");
  action_bx.classList.toggle("movie_box_active");
});

/// delete
const action_array = movie.filter((e) => {
  return e.genre1 == "action";
});

action_array.forEach((element) => {
  const { img, title, year, url, rate } = element;
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
          <a href="${url}">
            <img src="${img}" alt="${title}">
            <div class="content">
                <h5>${title}</h5>
                <h6>
                    <span>${year}</span>
                    <div class="rate">
                        <i class='bx bxs-heart'></i>
                        <i class='bx bx-low-vision'></i>
                        <i class='bx bxs-star'></i>
                        <h6>${rate}</h6>
                    </div>
                </h6>
            </div>
        </a>
      `;
  action_bx.appendChild(card);
});

// window.addEventListener("load", () => {
//   movie.forEach((element) => {
//     const { img, title, year, url, rate } = element;
//     let card = document.createElement("div");
//     card.classList.add("card");
//     card.innerHTML = `
//           <a href="${url}">
//             <img src="${img}" alt="${title}">
//             <div class="content">
//                 <h5>${title}</h5>
//                 <h6>
//                     <span>${year}</span>
//                     <div class="rate">
//                         <i class='bx bxs-heart'></i>
//                         <i class='bx bx-low-vision'></i>
//                         <i class='bx bxs-star'></i>
//                         <h6>${rate}</h6>
//                     </div>
//                 </h6>
//             </div>
//         </a>
//       `;
//     action_bx.appendChild(card);
//   });
// });

// Crime box array

let crime1 = document.getElementById("crime1");
let crime_bx = document.getElementById("crime_bx");
crime1.addEventListener("click", () => {
  crime1.classList.toggle("cato_button_active");
  crime_bx.classList.toggle("movie_box_active");
});
const crime_array = movie.filter((e) => {
  return e.genre2 == "crime";
});

crime_array.forEach((element) => {
  const { img, title, year, url, rate } = element;
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
          <a href="${url}">
            <img src="${img}" alt="${title}">
            <div class="content">
                <h5>${title}</h5>
                <h6>
                    <span>${year}</span>
                    <div class="rate">
                        <i class='bx bxs-heart'></i>
                        <i class='bx bx-low-vision'></i>
                        <i class='bx bxs-star'></i>
                        <h6>${rate}</h6>
                    </div>
                </h6>
            </div>
        </a>
      `;
  crime_bx.appendChild(card);
});

//Drama box array

let drama1 = document.getElementById("drama1");
let drama_bx = document.getElementById("drama_bx");
drama1.addEventListener("click", () => {
  drama1.classList.toggle("cato_button_active");
  drama_bx.classList.toggle("movie_box_active");
});
const drama_array = movie.filter((e) => {
  return (e.genre8 = "drama");
});

window.addEventListener("click", () => {
  drama_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
          <a href="${url}">
            <img src="${img}" alt="${title}">
            <div class="content">
                <h5>${title}</h5>
                <h6>
                    <span>${year}</span>
                    <div class="rate">
                        <i class='bx bxs-heart'></i>
                        <i class='bx bx-low-vision'></i>
                        <i class='bx bxs-star'></i>
                        <h6>${rate}</h6>
                    </div>
                </h6>
            </div>
        </a>
      `;
    drama_bx.appendChild(card);
  });
});

// movies box2 start
// all box start
let all = document.getElementById("all");
let all_btn = document.getElementById("all_btn");
all_btn.addEventListener("click", () => {
  all_btn.classList.toggle("cato_button_active");
  all.classList.toggle("movie_box_active");
});
window.addEventListener("load", () => {
  movie.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
          <a href="${url}">
            <img src="${img}" alt="${title}">
            <div class="content">
                <h5>${title}</h5>
                <h6>
                    <span>${year}</span>
                    <div class="rate">
                        <i class='bx bxs-heart'></i>
                        <i class='bx bx-low-vision'></i>
                        <i class='bx bxs-star'></i>
                        <h6>${rate}</h6>
                    </div>
                </h6>
            </div>
        </a>
      `;
    all.appendChild(card);
  });
});

// latest box start
let latest = document.getElementById("latest");
let latest_btn = document.getElementById("latest_btn");
latest_btn.addEventListener("click", () => {
  latest_btn.classList.toggle("cato_button_active");
  latest.classList.toggle("movie_box_active");
  la;
});
let latest_array = movie.filter((e) => {
  return e.upload == "letest";
});

window.addEventListener("load", () => {
  latest_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
          <a href="${url}">
            <img src="${img}" alt="${title}">
            <div class="content">
                <h5>${title}</h5>
                <h6>
                    <span>${year}</span>
                    <div class="rate">
                        <i class='bx bxs-heart'></i>
                        <i class='bx bx-low-vision'></i>
                        <i class='bx bxs-star'></i>
                        <h6>${rate}</h6>
                    </div>
                </h6>
            </div>
        </a>
      `;
    latest.appendChild(card);
  });
});

// // 2022 box start
let year_2022 = document.getElementById("year_2022");
let year2022_btn = document.getElementById("year2022_btn");
year2022_btn.addEventListener("click", () => {
  year2022_btn.classList.toggle("cato_button_active");
  year_2022.classList.toggle("movie_box_active");
});
let year2022 = movie.filter((e) => {
  return e.year == "2022";
});

window.addEventListener("load", () => {
  year2022.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
          <a href="${url}">
            <img src="${img}" alt="${title}">
            <div class="content">
                <h5>${title}</h5>
                <h6>
                    <span>${year}</span>
                    <div class="rate">
                        <i class='bx bxs-heart'></i>
                        <i class='bx bx-low-vision'></i>
                        <i class='bx bxs-star'></i>
                        <h6>${rate}</h6>
                    </div>
                </h6>
            </div>
        </a>
      `;
    year_2022.appendChild(card);
  });
});

// // 2021 box start
let year_2021 = document.getElementById("year_2021");
let year2021_btn = document.getElementById("year2021_btn");
year2021_btn.addEventListener("click", () => {
  year2021_btn.classList.toggle("cato_button_active");
  year_2021.classList.toggle("movie_box_active");
});
let year2021 = movie.filter((e) => {
  return e.year == "2021";
});

window.addEventListener("load", () => {
  year2021.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
          <a href="${url}">
            <img src="${img}" alt="${title}">
            <div class="content">
                <h5>${title}</h5>
                <h6>
                    <span>${year}</span>
                    <div class="rate">
                        <i class='bx bxs-heart'></i>
                        <i class='bx bx-low-vision'></i>
                        <i class='bx bxs-star'></i>
                        <h6>${rate}</h6>
                    </div>
                </h6>
            </div>
        </a>
      `;
    year_2021.appendChild(card);
  });
});

// // 2020 box start
let year_2020 = document.getElementById("year_2020");
let year2020_btn = document.getElementById("year2020_btn");
year2020_btn.addEventListener("click", () => {
  year2020_btn.classList.toggle("cato_button_active");
  year_2020.classList.toggle("movie_box_active");
});
let year2020 = movie.filter((e) => {
  return e.year == "2020";
});

window.addEventListener("load", () => {
  year2020.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
          <a href="${url}">
            <img src="${img}" alt="${title}">
            <div class="content">
                <h5>${title}</h5>
                <h6>
                    <span>${year}</span>
                    <div class="rate">
                        <i class='bx bxs-heart'></i>
                        <i class='bx bx-low-vision'></i>
                        <i class='bx bxs-star'></i>
                        <h6>${rate}</h6>
                    </div>
                </h6>
            </div>
        </a>
      `;
    year_2020.appendChild(card);
  });
});

// // letter_a box start
let letter_a = document.getElementById("letter_a");
let letter_a_btn = document.getElementById("letter_a_btn");
letter_a_btn.addEventListener("click", () => {
  letter_a_btn.classList.toggle("cato_button_active");
  letter_a.classList.toggle("movie_box_active");
});
let letter_a_array = movie.filter((e) => {
  return e.letter == "A";
});

window.addEventListener("load", () => {
  letter_a_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
          <a href="${url}">
            <img src="${img}" alt="${title}">
            <div class="content">
                <h5>${title}</h5>
                <h6>
                    <span>${year}</span>
                    <div class="rate">
                        <i class='bx bxs-heart'></i>
                        <i class='bx bx-low-vision'></i>
                        <i class='bx bxs-star'></i>
                        <h6>${rate}</h6>
                    </div>
                </h6>
            </div>
        </a>
      `;
    letter_a.appendChild(card);
  });
});

// // letter_b box start
let letter_b = document.getElementById("letter_b");
let letter_b_btn = document.getElementById("letter_b_btn");
letter_a_btn.addEventListener("click", () => {
  letter_b_btn.classList.toggle("cato_button_active");
  letter_b.classList.toggle("movie_box_active");
});
let letter_b_array = movie.filter((e) => {
  return e.letter == "B";
});

window.addEventListener("load", () => {
  letter_b_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
          <a href="${url}">
            <img src="${img}" alt="${title}">
            <div class="content">
                <h5>${title}</h5>
                <h6>
                    <span>${year}</span>
                    <div class="rate">
                        <i class='bx bxs-heart'></i>
                        <i class='bx bx-low-vision'></i>
                        <i class='bx bxs-star'></i>
                        <h6>${rate}</h6>
                    </div>
                </h6>
            </div>
        </a>
      `;
    letter_b.appendChild(card);
  });
});

// // letter_t box start
let letter_t = document.getElementById("letter_t");
let letter_t_btn = document.getElementById("letter_t_btn");
letter_t_btn.addEventListener("click", () => {
  letter_t_btn.classList.toggle("cato_button_active");
  letter_t.classList.toggle("movie_box_active");
});
let letter_t_array = movie.filter((e) => {
  return e.letter == "T";
});

window.addEventListener("load", () => {
  letter_t_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
          <a href="${url}">
            <img src="${img}" alt="${title}">
            <div class="content">
                <h5>${title}</h5>
                <h6>
                    <span>${year}</span>
                    <div class="rate">
                        <i class='bx bxs-heart'></i>
                        <i class='bx bx-low-vision'></i>
                        <i class='bx bxs-star'></i>
                        <h6>${rate}</h6>
                    </div>
                </h6>
            </div>
        </a>
      `;
    letter_t.appendChild(card);
  });
});

// // rate8 box start
let rate8 = document.getElementById("rate8");

let rate8_array = movie.filter((e) => {
  return e.rate >= 8;
});

window.addEventListener("load", () => {
  rate8_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
          <a href="${url}">
            <img src="${img}" alt="${title}">
            <div class="content">
                <h5>${title}</h5>
                <h6>
                    <span>${year}</span>
                    <div class="rate">
                        <i class='bx bxs-heart'></i>
                        <i class='bx bx-low-vision'></i>
                        <i class='bx bxs-star'></i>
                        <h6>${rate}</h6>
                    </div>
                </h6>
            </div>
        </a>
      `;
    rate8.appendChild(card);
  });
});

// // rate4 box start
let rate4 = document.getElementById("rate4");

let rate4_array = movie.filter((e) => {
  return e.rate >= 4;
});

window.addEventListener("load", () => {
  rate4_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
          <a href="${url}">
            <img src="${img}" alt="${title}">
            <div class="content">
                <h5>${title}</h5>
                <h6>
                    <span>${year}</span>
                    <div class="rate">
                        <i class='bx bxs-heart'></i>
                        <i class='bx bx-low-vision'></i>
                        <i class='bx bxs-star'></i>
                        <h6>${rate}</h6>
                    </div>
                </h6>
            </div>
        </a>
      `;
    rate4.appendChild(card);
  });
});
// // movies box2 end

// // btns start

// // rate change
let change_input = document.getElementById("change_input");
change_input.addEventListener("change", () => {
  if (change_input.value >= 8) {
    rate8.classList.add("box2_actives");
  } else {
    rate8.classList.remove("box2_actives");
  }

  if (change_input.value < 8) {
    rate4.classList.add("box2_actives");
  } else {
    rate4.classList.remove("box2_actives");
  }
});
