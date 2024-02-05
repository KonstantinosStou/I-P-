
// Declarations
const navBarIco = document.querySelector('.navbar-icon');
const dropdownMenu = document.querySelector('.dropdown-mob-sec');
const navBar1 = document.querySelector('.navbar-span-1');
const navBar2 = document.querySelector('.navbar-span-2');
const navBar3 = document.querySelector('.navbar-span-3');
const navBig1 = document.querySelector('#nav1');
const navBig2 = document.querySelector('#nav2');
const navBig3 = document.querySelector('#nav3');
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
const newTexts2 = ["Headlight defogging","Car paintjob","waxing","10 paint spaces","Painting oven","Calibre", "Insurance coverage", "A/C", "Electical windows"];


const staffTitle = document.querySelector('.staff-title');
const staffText = document.querySelector('.staff-text');
//const gallery = document.querySelector('.gallery');
//const galleryTitle = document.querySelector('.gallery-title');
const reviewsTitle = document.querySelector('.review-title');
const reviewsLink = document.querySelector('.reviews-learn-more');
//test area
const reviewH3 = document.querySelector('.review-h3');
const reviewSpan = document.querySelector('.review-span');
const dots = document.querySelectorAll('.dot');

//

const contactTitle = document.querySelector('.contact-title-a');
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
    reviewsTitle: reviewsTitle.innerText,
    reviewsLink: reviewsLink.innerText,
    //galleryTitle: galleryTitle.innerText,
    contactTitle: contactTitle.innerText,
    privacy: privacy.innerText,
    companyName: companyName.innerText,
    adressSpan: adressSpan.innerText,

};

const nextReviewNames = [
  'Antonis Agapitos',
  'Georgia Kokota',
  'Stathis Kakonas'
];

const nextReviewSpan = [
  'Επαγγελματίες, πολύ φιλικοί, και συνεπείς. Κάνουν καλή δουλειά, σε λογικές τιμές',
  'Εξαιρετική δουλειά, με ποιότητα και καλές τιμές. Αξιόπιστοι στους χρόνους. Θεωρώ πως αξίζει να τους εμπιστευτείτε και σίγουρα θα εκτιμηθεί η δουλειά τους και θα γίνετε ευχαριστημένοι πελάτες τους.',
  'Καλοί τεχνίτες και στα δύσκολα! Πολύ αξιόπιστοι!'
]

//const dropdownMenuItem = document.querySelector('.dropdown-menu-show');
const elementsToToggle = [
  document.querySelector('.main-poster'),
  document.querySelector('.service-area'),
  document.querySelector('.staff-area'),
  document.querySelector('.reviews-main'),
  document.querySelector('.contact-us-container'),
  document.querySelector('.page-divider')
  //document.querySelector('.gallery')
  //document.querySelector('.footer')
];

// Initialization
function init() {
  dropdownMenu.classList.add('hidden');
  elementsToToggle.forEach(element => element.classList.remove('hidden'));
}

init();

// Function to control mobile navigation visibility
function controlNavMob() {
  try {
    dropdownMenu.classList.toggle('hidden');
    //dropdownMenuItem.classList.toggle('hidden');
    elementsToToggle.forEach(element => element.classList.toggle('hidden'));
  } catch (err) {
    // console.log(err);
  }
}

// Event handler for navBarIco click
function controlNavMobHandler() {
  navBarIco.addEventListener('click', controlNavMob);
}

controlNavMobHandler();

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
    reviewsTitle.innerText = originalValues.reviewsTitle;
    reviewsLink.innerText = originalValues.reviewsLink;
    contactTitle.innerText = originalValues.contactTitle;
    privacy.innerText = originalValues.privacy;
    companyName.innerText = originalValues.companyName;
    adressSpan.innerText = originalValues.adressSpan;

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
      //galleryTitle.innerText = 'GALLERY';
      reviewsTitle.innerText = 'REVIEWS';
      reviewsLink.innerText = 'learn more';


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

//Slideshow for the staff area

const slideshowStaff = (element, startNumber, endNumber, interval) => {
  let currentNumber = startNumber;
  let isForward = true; // Indicates whether the slideshow is going forward or backward

  const updateImage = () => {
      const img = element.querySelector('.staff-img');
      img.src = `p&i staff-${currentNumber}.jpg`;

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
const intervalId1 = slideshowStaff(document.querySelector('.staff-list li:nth-child(1)'), 1, 6, 3000);

// Run slideshow for the second <li> element
//const intervalId2 = slideshow(document.querySelector('.staff-list li:nth-child(2)'), 7, 12, 3000);

const scrollIntoViewPc = function(element) {
  element.addEventListener('click', function () {
    if (element === navBig1) {
      serviceArea.scrollIntoView({ behavior: 'smooth' });
    }

    if (element === navBig2) {
      staffArea.scrollIntoView({behavior: 'smooth'})
    }

    if (element === navBig3) {
      contactArea.scrollIntoView({behavior: 'smooth'})
    }
  }
)};

scrollIntoViewPc(navBig1);
scrollIntoViewPc(navBig2);
scrollIntoViewPc(navBig3);
//
const scrollToSection = (targetSection, backgroundColor) => {
  dropdownMenu.classList.add('hidden');
  elementsToToggle.forEach(element => element.classList.remove('hidden'));
  // Calculate the height of the fixed header
  const headerHeight = document.querySelector('.header').offsetHeight;

  // Scroll to the target section, taking into account the header height
  window.scroll({
    top: targetSection.offsetTop - headerHeight,
    behavior: 'smooth'
  });

  // Temporarily change background color with CSS transition
  targetSection.style.transition = 'background-color 0.5s ease-in-out';
  targetSection.style.backgroundColor = backgroundColor;

  // Reset background color after the transition ends
  setTimeout(() => {
    targetSection.style.transition = '';
    targetSection.style.backgroundColor = '';
  }, 800);
};

const navbarItem = function(element, targetSection, backgroundColor) {
  element.addEventListener('click', function () {
    scrollToSection(targetSection, backgroundColor);
  });
};

navbarItem(navBar1, serviceArea, '#272932');
navbarItem(navBar2, staffArea, '#272932');
navbarItem(navBar3, contactArea, '#272932');

const reviewSlideshow = () => {

};

//TEST AREA
const slideshowReviews = (element, interval) => {
  const reviewH3 = element.querySelector('.review-h3');
  const reviewSpan = element.querySelector('.review-span');
  const dots = document.querySelectorAll('.dot');

  const originalName = reviewH3.innerText;
  const originalSpan = reviewSpan.innerText;

  let currentReviewIndex = 0;

  const updateReview = () => {
    reviewH3.innerText = nextReviewNames[currentReviewIndex];
    reviewSpan.innerText = nextReviewSpan[currentReviewIndex];

    // Toggle active class on dots
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentReviewIndex);
    });

    currentReviewIndex++;

    // Reset to original values when reaching the end
    if (currentReviewIndex >= nextReviewNames.length) {
      currentReviewIndex = 0;
    }
  };

  // Initial update
  updateReview();

  // Set interval for slideshow
  const intervalId = setInterval(updateReview, interval);

  // Return the intervalId if you want to be able to clear the interval later
  return intervalId;
};

const intervalId = slideshowReviews(document.querySelector('.reviews-main'), 8000);
