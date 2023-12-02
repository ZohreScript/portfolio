


//  aside

const nav = document.querySelector(".nav"),
  navlist = nav.querySelectorAll("li"),
  totalNavList = navlist.length;
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navlist[i].querySelector("a");
  a.addEventListener("click", function () {
  removeBackSection();
  
    for (let j = 0; j < totalNavList; j++) {
      if (navlist[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
        // allSection[j].classList.add("back-section");
      }
      navlist[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}
function removeBackSection(){
  for (let i = 0; i < totalSection; i++) {

    allSection[i].classList.remove("back-section");
  }
}
function addBackSection(num){
  allSection[num].classList.add("back-section");
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }

  const target = element.getAttribute("href").split("#")[1];
  
  document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navlist[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[i];
    if (
      target ===
      navlist[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navlist[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
 const sectionIndex= this.getAttribute("data-section-index");
 console.log(sectionIndex);
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}





//add skill with % inputtext-dashboaredpage

const textInput = document.getElementById('textInput');
const percentInput = document.getElementById('percentInput');
const addButton = document.getElementById('addButton');
const displayText = document.getElementById('displayText');
const inputs = [];

addButton.addEventListener('click', function() {
  console.log("ok")
  const inputText = textInput.value;
  const inputPrice = percentInput.value;

  if (inputText !== '' && inputPrice !== '') {
    const input = {
      text: inputText,
      price: inputPrice
    };
    inputs.push(input);
    displayInputs();
    textInput.value = ''; // Clear the text input field
    percentInput.value = ''; // Clear the percent input field
  }
});

function displayInputs() {
  displayText.innerHTML = ''; // Clear the list

  for (let i = 0; i < inputs.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = inputs[i].text + ' - %' + inputs[i].price;
    displayText.appendChild(listItem);
  }
}

//add education and experience
 let entries = [];
function addEntry() {
  const title = document.getElementById("title").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const description = document.getElementById("description").value;

  entries.push({ title, startDate, endDate, description });

  displayEntries();
  resetForm();
}

function displayEntries() {
  const entriesList = document.getElementById("entriesList");
  entriesList.innerHTML = "";

  entries.forEach(entry => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${entry.title}</strong><br>
                          Start Date: ${entry.startDate}<br>
                          End Date: ${entry.endDate}<br>
                          ${entry.description}`;
    entriesList.appendChild(listItem);
  });
}

function resetForm() {
  document.getElementById("myForm").reset();
}

//add portfolio
let entrieportfolio = []; // Declare and initialize the entries array

function addEntryProject() {
  const url = document.getElementById("url").value;
  const image = document.getElementById("img").files[0];

  const reader = new FileReader();
  reader.onload = function(event) {
    const imageDataUrl = event.target.result;
    entrieportfolio.push({ url: url, image: imageDataUrl });

    displayEntriesProject();
    resetFormProject();
  };
  reader.readAsDataURL(image);
}

function displayEntriesProject() {
  const entriesListproject = document.getElementById("entriesListproject");
  entriesListproject.innerHTML = "";
console.log("right")
  entrieportfolio.forEach(entry => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<p>${entry.url}</p><img src="${entry.image}" alt="Entry Image">`;
    entriesListproject.appendChild(listItem);
  });
  console.log("ok")
}

function resetFormProject() {
  document.getElementById("portfolioform").reset();
}

// typing Animation
var typed = new Typed(".typing", {
  strings: [
    "programmer",
    "web developer",
    "backend developer",
    "freelancer",
    "fullstack developer",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
