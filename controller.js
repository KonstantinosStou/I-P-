
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
const newTexts = ["Paintjob oven", "Calibre", "10 paint spaces"];
const newTexts2 = ["Headlight defogging","Car paintjob","waxing","10 paint spaces","Painting oven","Calibre"];


const staffTitle = document.querySelector('.staff-title');
const staffText = document.querySelector('.staff-text');

const contactTitle = document.querySelector('.contact-title');
const privacy = document.querySelector('.privacy');
const companyName = document.querySelector('.cc');
const adressSpan = document.querySelector('.address-span');
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
    servicePosterTextElements: Array.from(servicePosterTextElements).map(servicePosterText => servicePosterText.innerText),
    staffTitle: staffTitle.innerText,
    staffText: staffText.innerText,
    contactTitle: contactTitle.innerText,
    privacy: privacy.innerText,
    companyName: companyName.innerText,
    adressSpan: adressSpan.innerText,

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
    servicePosterTextElements.innerText = servicePosterTextElements.forEach((servicePosterText, index) => {
      servicePosterText.innerText = originalValues.servicePosterTextElements[index];
    });
    staffTitle.innerText = originalValues.staffTitle;
    staffText.innerText = originalValues.staffText;
    contactTitle.innerText = originalValues.contactTitle;
    privacy.innerText = originalValues.privacy;
    companyName.innerText = originalValues.companyName;
    adressSpan.innerText = originalValues.adressSpan;
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
      liPosters.forEach((element, index) => {
        if (index < newTexts2.length) {
            element.innerText = newTexts2[index];
        }
      });
      posterT.innerText = 'BODYWORK/PAINT SHOP I&P STOURAITIS';
      serviceTitleText.innerText = 'OUR STORE';
      serviceP.innerText = 'In our store you will find a specialized paint and body shop area, with spaces for up to 10 cars. Our highly experienced staff aims to repair your car\'\s damage immediately.'; 
      
      servicePosterTextElements.forEach((element, index) => {
        if (index < newTexts.length) {
            element.innerText = newTexts[index];
        }
      });
      
      //serviceLearnMore.innerText = 'Learn more';
      staffTitle.innerText = 'EXPERIENCED STAFF';
      staffText.innerText = 'With many years of experience in the fields of car bodywork and painting, our store staff is ready to serve you.';

      contactTitle.innerText = 'CONTACT US';
      privacy.innerText = 'Privacy Policy';
      companyName.innerText = 'I&P bodywork, All rights reserved';
      adressSpan.innerText = 'Location:';
    }
  });
}

navbarLang(grBtnMob);
navbarLang(enBtnMob);
console.log(adressSpan.innerText);

//////////

const slideshow = (element, startNumber, endNumber, interval) => {
  let currentNumber = startNumber;
  let isForward = true; // Indicates whether the slideshow is going forward or backward

  const updateImage = () => {
      const img = element.querySelector('.staff-img');
      img.src = `p&i staff-${currentNumber}.png`;

      // Increment or decrement the currentNumber based on the direction
      if (isForward) {
          currentNumber++;
      } else {
          currentNumber--;
      }

      // Toggle direction when reaching the end or the start
      if (currentNumber > endNumber) {
          currentNumber = endNumber - 1;
          isForward = false;
      } else if (currentNumber < startNumber) {
          currentNumber = startNumber + 1;
          isForward = true;
      }
  };

  // Initial update
  updateImage();

  // Set interval for slideshow
  const intervalId = setInterval(updateImage, interval);

  // Return the intervalId if you want to be able to clear the interval later
  return intervalId;
};

// Run slideshow for the first <li> element
const intervalId1 = slideshow(document.querySelector('.staff-list li:nth-child(1)'), 1, 6, 3000);

// Run slideshow for the second <li> element
const intervalId2 = slideshow(document.querySelector('.staff-list li:nth-child(2)'), 7, 12, 3000);
