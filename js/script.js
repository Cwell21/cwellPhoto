console.log('connected and working....');

// GRAB ELEMENTS
const elBody = document.getElementsByTagName('body');
const elMainWrapper = document.getElementById('mainWrapper')
const elLogo = document.getElementById('logo');
const elAboutRibbon = document.getElementById('aboutRibbon');
const elAboutRibbonFigure = document.getElementById('aboutRibbonFigure');
const elAboutRibbonArticle = document.getElementById('aboutRibbonArticle');
const elModule = document.getElementsByClassName('module');


let mainWrapperYPos = 0;

//LOGO HOVER EFFECT
elLogo.addEventListener('mouseover', () => {
  elLogo.src='images/resumeLogoOver.svg';
})
elLogo.addEventListener('mouseout', () => {
  elLogo.src='images/resumeLogo.svg';
})


// ABOUT RIBBON SCROLL EFFECT
function myScroll() {

  let xPos = elAboutRibbon.getBoundingClientRect();
  console.log(xPos);
  if(xPos.y <= 300){
    elAboutRibbonFigure.style.position = 'relative';
    elAboutRibbonFigure.style.left = 0;
    elAboutRibbonArticle.style.position = 'relative';
    elAboutRibbonArticle.style.right = 0;
  }

  // if(xPos.y <= -150){
  //   pulseModule();
  // }   
}

// function pulseModule() {
//   setTimeout(() => {
//     for(let i=0; i<elModule.length; i++){
//       elModule[i].classList.add('modulePulse');
//     }
//   }, 50);
  
//   setTimeout(()=> {
//     for(let i=0; i<elModule.length; i++) {
//       elModule[i].classList.remove('modulePulse');
//       elModule[i].classList.add('moduleVisible');
//     }
//   },500);    
// }