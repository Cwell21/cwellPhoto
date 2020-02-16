console.log('connected and working....');

// GRAB ELEMENTS
const elBody = document.getElementsByTagName('body');
const elMainWrapper = document.getElementById('mainWrapper')
const elLogo = document.getElementById('logo');
const elAboutRibbon = document.getElementById('aboutRibbon');
const elAboutRibbonFigure = document.getElementById('aboutRibbonFigure');
const elAboutRibbonArticle = document.getElementById('aboutRibbonArticle');
const elModule = document.getElementsByClassName('module');
const elSkillContainer = document.getElementsByClassName('skillContainer');
const elSkillBar = document.getElementsByClassName('skillBar');



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

// DISPLAY SUB PAGE ON CLICK
function dispSubPage(elIdToOpen) {
  
  let elSchools = document.getElementsByClassName('school');

  document.getElementById(elIdToOpen).style.width = '100vw';
  document.getElementById(elIdToOpen).style.height = '100vh';
  
  for(let i=0; i < elSchools.length; i++) {
    elSchools[i].style.marginLeft = '0px';
  }


  if (elIdToOpen == 'resume'){
    
    let elSkillName = document.getElementsByClassName('skillName');
    for(let i=0; i<elSkillBar.length; i++) {
      switch (elSkillName[i].innerHTML){
        case 'HTML 5':
          elSkillBar[i].style.width = '85px';
          break;
        case 'CSS':
          elSkillBar[i].style.width = '70px';
          break;
        case 'Javascript':
          elSkillBar[i].style.width = '70px';
          break;
        case 'React JS':
          elSkillBar[i].style.width = '40px';
          break;
        case 'Python':
          elSkillBar[i].style.width = '10px';
          break;
        case 'SASS/SCSS':
          elSkillBar[i].style.width = '60px';
          break;
        default:
          break;
      }      
    }
  }  
}

// HIDE SUB PAGE ON CLICK
function closePage(elIdToClose) {
  document.getElementById(elIdToClose).style.width = '0';
  document.getElementById(elIdToClose).style.height = '0';

  if(elIdToClose == 'resume') {
    let elSkillBar = document.getElementsByClassName('skillBar')

    for(let i=0; i < elSkillBar.length; i++) {
      elSkillBar[i].style.width = 0;
    }
  }

}

// IIFE TO DETERMINE HEIGHT OF SKILLS LIST ITEMS IN RESUME SECTION
(function () {

  let containerHeight = 100 / elSkillContainer.length;

  for(let i=0; i < elSkillContainer; i++) {
    elSkillContainer[i].style.height = `${containerHeight}%`;
  }

}());

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