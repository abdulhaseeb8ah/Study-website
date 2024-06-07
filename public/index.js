import {pythonQuestions,javaQuestions,javascriptQuestions,phpQuestions,csharpQuestions} from './Questions.js';

const toggleButton = document.querySelector('#hamburger');
const homeBtn = document.querySelector('#home-btn');
const aboutBtn = document.querySelector('#about-btn');
const footer_home = document.querySelector('#footer-home');
const footer_about = document.querySelector('#footer-about');
const navMenu = document.querySelector('#sidebar');
let interval;

toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});

function page_visible(e,home,about) {
  e.preventDefault();
  videoTutorial.style.display = "none";
  aboutSection.style.display = about;
  homeSection.style.display = home;
  quizSection.style.display = "none";
}

  document.addEventListener("DOMContentLoaded", function() {
    
    homeBtn.onclick = (e) => {
      page_visible(e,"block","none");
    };

    footer_home.onclick = (e) => {
      page_visible(e,"block","none");
    };

    aboutBtn.onclick = (e) => {
      page_visible(e,"none","block");
    };

    footer_about.onclick = (e) => {
      page_visible(e,"none","block");
    };

    const hamburger = document.getElementById("hamburger");
    const close = document.getElementById("close");
    const sidebar = document.getElementById("sidebar");
    const questionsContainer = document.querySelector(".questions-container");

    start.addEventListener('click', () => {
      if(name.value == "" || email.value == "") 
        {
            alert("Please enter your name and email address to start the quiz");
        }
        else
        {
            detailsContainer.style.display = "none";
            questionsContainer.style.display = "block";
            startTimer(60 * quizData.length, timerContainer);
        }
    });

    hamburger.addEventListener("click", function() {
      sidebar.style.display = "inline-block";
      hamburger.style.display = "hidden";
    });

    close.addEventListener("click", function() {
        sidebar.style.display = "none";
        hamburger.style.display = "inline-block";
    });
  });

  window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const indexParam = urlParams.get('index');
    if (indexParam !== null) {
      const index = parseInt(indexParam) - 1; 
      if (!isNaN(index) && index >= 0 && index < playlistVideos.length) {
        currentIndex = index;
        showVideoAtIndex(currentIndex);
      } else {
        console.log("Invalid index in URL");
      }
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    let menuItems2 = document.querySelectorAll(".dropdown-menu2 button");

    menuItems2.forEach(menuItem => {
      menuItem.addEventListener('click', function() {
        let language = this.getAttribute('data-language');
        handleMenuItemClickQuiz(language);
      });
    });

    let menuItems = document.querySelectorAll(".dropdown-menu1 button");

    menuItems.forEach(menuItem => {
      menuItem.addEventListener('click', function() {
        let language = this.getAttribute('data-language');
        handleMenuItemClick(language);
      });
    });

    let menuItems3 = document.querySelectorAll("#sidebar [role='menuitem']");

    menuItems3.forEach(menuItem => {
      menuItem.addEventListener('click', function() {
        let language = this.getAttribute('data-language');
        handleMenuItemClick(language);
      });
    });

    let footer_menu_courses = document.querySelectorAll("#footer-courses [role='menuitem']");

    footer_menu_courses.forEach(menuItem => {
      menuItem.addEventListener('click', function() {
        let language = this.getAttribute('data-language');
        handleMenuItemClick(language);
      });
    });

    let footer_menu_quiz = document.querySelectorAll("#footer-quiz [role='menuitem']");

    footer_menu_quiz.forEach(menuItem => {
      menuItem.addEventListener('click', function() {
        let language = this.getAttribute('data-language');
        handleMenuItemClickQuiz(language);
      });
    });
  
});

let playtlistId = "PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop";

const videoCardContainer = document.querySelector(".video-card-container");
const videoSwitch = document.querySelector(".video-switch");
const videoTitle = document.querySelector(".title-content");
const videoDescription = document.querySelector(".title-description");
const titlecontent = document.querySelector(".title-content");
const quizSection = document.querySelector('.quiz-section');
const homeSection = document.querySelector('.home-section');
const aboutSection = document.querySelector('.about-section');
const videoTutorial = document.querySelector('.video-tutorials');
const changeBtns = document.querySelector(".change-buttons");
const nextButton = document.querySelector("#nextButton");
const prevButton = document.querySelector("#prevButton");
const email = document.querySelector("#email");
const name = document.querySelector("#name");
const start = document.querySelector("#start");
const detailsContainer = document.querySelector(".details-container");
let titleHeading;
let titleDescription;

let api = "AIzaSyCf042WXYWrjQxunOAN9V5Cl_GHF7rvtMw";
let playlistItems_http = "https://www.googleapis.com/youtube/v3/playlistItems?";
let channel = "https://www.googleapis.com/youtube/v3/channels?";
let currentIndex = 0;
let playlistVideos = [];
let quizData = [];
const quizHeading = document.querySelector('#quiz-heading');

function handleMenuItemClickQuiz(language) {
  
  quizHeading.innerHTML = language + " Quiz";
  videoTutorial.style.display = "none";
  aboutSection.style.display = "none";
  homeSection.style.display = "none";
  quizSection.style.display = "block";
  clearInterval(interval);
  
  switch(language) {
    case 'Java':
      quizData = javaQuestions;
      break;
    case 'Python':
      quizData = pythonQuestions;
      break;
    case 'C#':
      quizData = csharpQuestions;
      break;
    case 'PHP':
      quizData = phpQuestions;
      break;
    case 'JavaScript':
      quizData = javascriptQuestions;
      break;
    default:
      console.log("Invalid language selected");
      break;
  }
  
submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

const selectedQuestions = selectRandomQuestions(quizData, 5);
quizData = []; 
quizData.push(...selectedQuestions);

displayQuestion();

if(quizSection.style.display === 'none') {
  clearInterval(interval);
}
}
const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');
const timerContainer = document.getElementById('timer');
const questionNumber = document.getElementById('question-number');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];
let timer;

function selectRandomQuestions(data, numQuestions) {
    const shuffledData = [...data];
    shuffleArray(shuffledData);
    return shuffledData.slice(0, numQuestions);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayQuestion() {
    const questionData = quizData[currentQuestion];

    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;

    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
    optionsElement.style.color = "orange";
    optionsElement.style.fontSize = "1.5rem";
    optionsElement.style.fontFamily = "Nunito, sans-serif";
    optionsElement.style.marginRight = "20px";
    optionsElement.style.fontWeight = "bold";
    optionsElement.style.marginTop = "20px";
    optionsElement.style.flexWrap = "wrap";

    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);

    for (let i = 0; i < shuffledOptions.length; i++) {
        questionNumber.innerHTML = `Question ${currentQuestion + 1} of ${quizData.length}`;
        const option = document.createElement('label');
        option.className = 'option';

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.style.marginLeft = "30px";
        radio.style.height = "18px";
        radio.style.width = "18px";
        radio.name = 'quiz';
        radio.value = shuffledOptions[i];

        const optionText = document.createTextNode(shuffledOptions[i]);

        option.appendChild(radio);
        option.appendChild(optionText);
        optionsElement.appendChild(option);
    }

    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
}

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    timer = duration;
        interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent ="Time = " + minutes + ":" + seconds;

        if (--timer < 0 || currentQuestion >= quizData.length) {
            clearInterval(interval);
            displayResult();
        }
    }, 1000);
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === quizData[currentQuestion].answer) {
            score++;
        } else {
            incorrectAnswers.push({
                question: quizData[currentQuestion].question,
                incorrectAnswer: answer,
                correctAnswer: quizData[currentQuestion].answer,
            });
        }
        currentQuestion++;
        selectedOption.checked = false;
        if (currentQuestion < quizData.length) {
            displayQuestion();
        } else {
            displayResult();
        }
    }
}

function displayResult() {
    clearInterval(interval);
    questionNumber.style.display = 'none';
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    resultContainer.innerHTML = name.value + ` you scored ${score} out of ${quizData.length}!`;
}

function retryQuiz() {
    clearInterval(interval);
    timerContainer.innerHTML = '';
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'flex';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'flex';
    resultContainer.innerHTML = '';
    displayQuestion();
    startTimer(60 * quizData.length, timerContainer); 
}

function showAnswer() {
    clearInterval(interval);
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'none';

    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
        incorrectAnswersHtml += `
        <p>
            <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
            <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
            <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>`;
    }

    resultContainer.innerHTML = `
      <h2>${name.value} you scored ${score} out of ${quizData.length}!</h2>
      <h4>Incorrect Answers:</h4>
      ${incorrectAnswersHtml}`;
    }


function handleMenuItemClick(language) {
  videoTutorial.style.display = "flex";
  videoTutorial.style.flexDirection = "column";
  quizSection.style.display = "none";
  aboutSection.style.display = "none";
  homeSection.style.display = "none";
  videoPlayerContainer.style.display = "none";
  videoCardContainer.style.display = "block";
  videoSwitch.style.display = "block";
  videoTitle.style.display = "block";
  videoDescription.style.display = "block";
  videoTitle.innerHTML = "";
  videoDescription.innerHTML = "";
  changeBtns.style.display = "flex";
  changeBtns.style.marginLeft = "4px";
  changeBtns.style.marginRight = "4px";

  switch(language) {
      case 'Java':
          playtlistId = 'PLmRclvVt5DtnqhXTJwd-oqVRwO3bLZCGV';
          break;
      case 'PHP':
          playtlistId = 'PL0eyrZgxdwhwBToawjm9faF1ixePexft-';
          break;
      case 'JavaScript':
          playtlistId = 'PLwGdqUZWnOp1hqyT6h7pY0RlXIIGlE5U0';
          break;
      case 'C#':
          playtlistId = 'PL0eyrZgxdwhxD9HhtpuZV22KxEJAZ55X-';
          break;
      case 'Python':
          playtlistId = 'PLmRclvVt5DtmcLF3ywxKg692lhfD6SUOr';
          break;
      default:
          playtlistId = 'PLmRclvVt5DtnqhXTJwd-oqVRwO3bLZCGV';
  }

  fetchPlaylistVideos(playtlistId);
}

function fetchPlaylistVideos(playlistId) {
 
  fetch(playlistItems_http + new URLSearchParams({
      key: api,
      part: "snippet",
      maxResults: 5,
      playlistId: playlistId
  }))
  .then((res) => res.json())
  .then((data) => {
      playlistVideos = data.items;
      showVideoAtIndex(currentIndex);
  })
  .catch((err) => console.log(err));
}

const makeVideoCard = (data) => {
  
  videoCardContainer.innerHTML = ""; 

  const videoDiv = document.createElement("div");
  videoDiv.style.width = "100%";
  videoDiv.style.height = "100%";
  videoDiv.classList.add("video");

  const thumbnailImg = document.createElement("img");
  thumbnailImg.style.width = "100%";
  thumbnailImg.style.height = "100%";
  thumbnailImg.src = data.snippet.thumbnails.high.url;
  thumbnailImg.style.cursor = "pointer";
  thumbnailImg.classList.add("thumbnail");
  thumbnailImg.alt = "";


  thumbnailImg.addEventListener("click", () => {
    
    videoPlayerContainer.style.display = "block";
    videoCardContainer.style.display = "none";
    playVideo(data.snippet.resourceId.videoId);
  });
  
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");
  const infoDiv = document.createElement("div");
  infoDiv.style.display = "inline";
  
  infoDiv.classList.add("info");
  const descDiv = document.createElement("div");
  descDiv.style.overflow = "hidden";
  descDiv.style.display = "flex";
  descDiv.style.flexWrap = "wrap";
  descDiv.classList.add("desc");

  titleHeading = document.createElement("h4");
  titleHeading.style.fontFamily = "Nunito, sans-serif";
  titleHeading.style.fontWeight = "bold";
  titleHeading.style.color = "orange";
  titleHeading.style.display = "inline";
  titleHeading.classList.add("title");
  titleHeading.textContent = data.snippet.title;

  function get100Words(str) {
    const wordsArray = str.split(/\s+/);
    let count = 0;
    let resultArray = [];
  
    for (let word of wordsArray) {
      resultArray.push(word);
      count++;
  
      if (count >= 100 && word.endsWith('.')) {
        break;
      }
    }
  
    const result = resultArray.join(" ");
    return result;
  }

  titleDescription = document.createElement("h4");
  titleDescription.style.fontFamily = "Nunito, sans-serif";
  titleDescription.style.fontWeight = "bold";
  titleDescription.classList.add("title-description");
  titleDescription.textContent = get100Words(data.snippet.description);
  titleDescription.style.paddingLeft = "5%";
  titleDescription.style.paddingRight = "5%";

  infoDiv.appendChild(titleHeading);
  
  descDiv.appendChild(titleDescription);
  contentDiv.appendChild(infoDiv);
  videoDiv.appendChild(thumbnailImg);
  videoCardContainer.appendChild(videoDiv); 
  titlecontent.appendChild(contentDiv);
  videoDescription.appendChild(descDiv);
};

const getChannelIcon = async (video_data) => {
  try {
    const response = await fetch(channel + new URLSearchParams({
      key: api,
      part: "snippet",
      id: video_data.snippet.channelId
    }));
    const data = await response.json();
    video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
    makeVideoCard(video_data);
  } catch (err) {
    console.log(err);
  }
};

nextButton.addEventListener("click", async (event) => {
  titleHeading.textContent = "";
  titleDescription.textContent = "";
  videoPlayerContainer.style.display = "none";
  videoCardContainer.style.display = "block";
  event.preventDefault(); 
  currentIndex = (currentIndex + 1) % playlistVideos.length;
  await showVideoAtIndex(currentIndex);
  videoPlayerContainer.innerHTML = "";
});

prevButton.addEventListener("click", async (event) => {
  titleHeading.textContent = "";
  titleDescription.textContent = "";
  videoPlayerContainer.style.display = "none";
  videoCardContainer.style.display = "block";
  event.preventDefault(); 
  currentIndex = (currentIndex - 1 + playlistVideos.length) % playlistVideos.length;
  await showVideoAtIndex(currentIndex);
});

async function showVideoAtIndex(index) {
  const video = playlistVideos[index];
  await getChannelIcon(video);
  history.pushState(null, null, `?index=${index + 1}`);
}
let videoPlayerContainer = document.querySelector(".video-player-container");

function playVideo(videoId) {
  videoCardContainer.innerHTML = ""; 
  videoPlayerContainer.innerHTML = "";
  const videoPlayer = document.createElement("iframe");
  videoPlayer.style.width = "100%";
  videoPlayer.style.height = "100%";
  videoPlayer.src = `https://www.youtube.com/embed/${videoId}?rel=0`;
  videoPlayer.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
  videoPlayer.allowFullscreen = true;
  videoPlayerContainer.appendChild(videoPlayer);
}

document.addEventListener("DOMContentLoaded", () => {
 
  const dropdownToggles1 = document.querySelectorAll(".dropdown-toggle1")

  dropdownToggles1.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const dropdownMenu = toggle.nextElementSibling

      if (dropdownMenu.classList.contains("hidden")) {

        document.querySelectorAll(".dropdown-menu").forEach((menu) => {
          menu.classList.add("hidden")
        })

        dropdownMenu.classList.remove("hidden")
      } else {
        dropdownMenu.classList.add("hidden")
      }
    })
  })

  const dropdownToggles2 = document.querySelectorAll(".dropdown-toggle2")

  dropdownToggles2.forEach((toggle) => {
    toggle.addEventListener("click", () => {

      const dropdownMenu = toggle.nextElementSibling

      if (dropdownMenu.classList.contains("hidden")) {
        document.querySelectorAll(".dropdown-menu").forEach((menu) => {
          menu.classList.add("hidden")
        })

        dropdownMenu.classList.remove("hidden")
      } else {
        dropdownMenu.classList.add("hidden")
      }
    })
  })

  window.addEventListener("click", function (e) {
    if (!e.target.matches(".dropdown-toggle1")) {
      document.querySelectorAll(".dropdown-menu1").forEach((menu) => {
        if (!menu.contains(e.target)) {
          menu.classList.add("hidden")}
      })
    }
  })

  window.addEventListener("click", function (e) {
    if (!e.target.matches(".dropdown-toggle2")) {
      document.querySelectorAll(".dropdown-menu2").forEach((menu) => {
        if (!menu.contains(e.target)) {
          menu.classList.add("hidden")
        }
      })
    }
  })
  
  const mobileMenuButton = document.querySelector('.mobile-menu-button')
  const mobileMenu = document.querySelector('.navigation-menu')
  
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
  })
  
})

document.getElementById("footer-condition").addEventListener("click", (event) => {
  document.getElementById("footer-condition-section").style.zIndex = "2000";
  document.getElementById("footer-condition-section").style.display = "flex";
  event.preventDefault();
});

document.getElementById("conditions-close").addEventListener("click", (event) => {
  document.getElementById("footer-condition-section").style.display = "none";
  event.preventDefault();
}); 

document.getElementById("footer-privacy").addEventListener("click", (event) => {
  document.getElementById("footer-privacy-section").style.zIndex = "2000";
  document.getElementById("footer-privacy-section").style.display = "flex";
  event.preventDefault();
});

document.getElementById("privacy-close").addEventListener("click", (event) => {
  document.getElementById("footer-privacy-section").style.display = "none";
  event.preventDefault();
}); 