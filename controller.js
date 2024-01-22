
/*

*/
// Declarations
const navBarIco = document.querySelector('.navbar-icon');
const dropdownMenu = document.querySelector('.dropdown-mob-sec');
const navBar1 = document.querySelector('.navbar-span-1');
const navBar2 = document.querySelector('.navbar-span-2');
const navBar3 = document.querySelector('.navbar-span-3');
const serviceArea = document.querySelector('.service-area');
const staffArea = document.querySelector('.staff-area');
const contactArea = document.querySelector('.contact-us-container');
const grBtnMob = document.querySelector('.GR-a-mobile');
const enBtnMob = document.querySelector('.EN-a-mobile');
const posterT = document.querySelector('.poster-title');
const liPosters = document.querySelectorAll('.li-poster');
const serviceTitleText = document.querySelector('.service-title-text');
const serviceP = document.querySelector('.service-title-p');
//const serviceLearnMore = document.querySelector('.service-learn-more');

const servicePosterTextElements = document.querySelectorAll('.service-poster-text');
const newTexts = ["Paintjob oven", "Calibre", "something else", "something else too"];


const staffTitle = document.querySelector('.staff-title');
const staffText = document.querySelector('.staff-text');

const contactTitle = document.querySelector('.contact-title');
const privacy = document.querySelector('.privacy');
const companyName = document.querySelector('.cc');
//original html texts
const originalValues = {
    navBar1: navBar1.innerText,
    navBar2: navBar2.innerText,
    navBar3: navBar3.innerText,
    liPosters: Array.from(liPosters).map(liPoster => liPoster.innerText),
    posterT: posterT.innerText,
    serviceTitleText: serviceTitleText.innerText,
    serviceP: serviceP.innerText,
    //serviceLearnMore: serviceLearnMore.innerText,
    servicePosterTextElements: Array.from(servicePosterTextElements).map(element => element.innerText),
    staffTitle: staffTitle.innerText,
    staffText: staffText.innerText,
    contactTitle: contactTitle.innerText,
    privacy: privacy.innerText,
    companyName: companyName.innerText,

};

//const dropdownMenuItem = document.querySelector('.dropdown-menu-show');
const elementsToToggle = [
  document.querySelector('.main-poster'),
  document.querySelector('.service-area'),
  document.querySelector('.staff-area'),
  document.querySelector('.contact-us-container'),
  //document.querySelector('.footer')
];

// Initialization
function init() {
  dropdownMenu.classList.add('hidden');
  elementsToToggle.forEach(element => element.classList.remove('hidden'));
}

init();

// Function to control navigation on mobile
function controlNavMob() {
  try {
    dropdownMenu.classList.toggle('hidden');
    //dropdownMenuItem.classList.toggle('hidden');
    elementsToToggle.forEach(element => element.classList.toggle('hidden'));
  } catch (err) {
    // Handle errors if needed
    // console.log(err);
  }
}

// Event handler for navBarIco click
function controlNavMobHandler() {
  navBarIco.addEventListener('click', controlNavMob);
}

controlNavMobHandler();

//function to control navbar mobile section taps 
const navbarItem = function(element) {
  element.addEventListener('click', function () {
    // First empty if statement
    if (element === navBar1) {
      dropdownMenu.classList.add('hidden');
      elementsToToggle.forEach(element => element.classList.remove('hidden'));
      serviceArea.scrollIntoView({ behavior: 'smooth' });
    }

    // Second empty if statement
    if (element === navBar2) {
      dropdownMenu.classList.add('hidden');
      elementsToToggle.forEach(element => element.classList.remove('hidden'));
      staffArea.scrollIntoView({ behavior: 'smooth' });
    }

    // Third empty if statement
    if (element === navBar3) {
      dropdownMenu.classList.add('hidden');
      elementsToToggle.forEach(element => element.classList.remove('hidden'));
      contactArea.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

navbarItem(navBar1);
navbarItem(navBar2);
navbarItem(navBar3);

///language switch
const navbarLang = function(element) {
  const revertChanges = () => {
    navBar1.innerText = originalValues.navBar1;
    navBar2.innerText = originalValues.navBar2;
    navBar3.innerText = originalValues.navBar3;
  
    liPosters.forEach((liPoster, index) => {
      liPoster.innerText = originalValues.liPosters[index];
    });
    posterT.innerText = originalValues.posterT;
  
    serviceTitleText.innerText = originalValues.serviceTitleText;
    serviceP.innerText = originalValues.serviceP;
    //serviceLearnMore.innerText = originalValues.serviceLearnMore;
    servicePosterTextElements.innerText = originalValues.servicePosterTextElements;
    staffTitle.innerText = originalValues.staffTitle;
    staffText.innerText = originalValues.staffText;
    contactTitle.innerText = originalValues.contactTitle;
    privacy.innerText = originalValues.privacy;
    companyName.innerText = originalValues.companyName;
  
    // Clear original values
    //originalValues = {};
  };

  element.addEventListener('click', function () {
    // First empty if statement
    if (element === grBtnMob) {
      //dropdownMenu.classList.add('hidden');
      revertChanges();
    }

    // Second empty if statement
    if (element === enBtnMob) {
      //dropdownMenu.classList.add('hidden');
      navBar1.innerText = 'SERVICE';
      navBar2.innerText = 'STAFF';
      navBar3.innerText = 'CONTACT';
      liPosters.forEach(liPoster => {
        liPoster.innerText = 'service text';
      });
      posterT.innerText = 'Poster title';
      serviceTitleText.innerText = 'SERVICE TITLE';
      serviceP.innerText = 'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text '; 
      
      servicePosterTextElements.forEach((element, index) => {
        if (index < newTexts.length) {
            element.innerText = newTexts[index];
        }
      });
      
      //serviceLearnMore.innerText = 'Learn more';
      staffTitle.innerText = 'Experienced staff';
      staffText.innerText = 'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text ';

      contactTitle.innerText = 'Contact us';
      //companyName.privacy.innerText = 'Privacy Policy';
      companyName.innerText = 'I&P bodywork, All rights reserved';
    }
  });
}

navbarLang(grBtnMob);
navbarLang(enBtnMob);
console.log(serviceTitleText.innerText);

