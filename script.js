'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////
///////////////////

const header=document.querySelector(".header");

// creating and inserting element
const message=document.createElement('div');
message.classList.add('cookie-message');
message.textContent="We use cookies fot analytics";
message.innerHTML='juhfjuih uhjdfh efhdhkjnkjhrhrherhiuherhuirhuirhr';
//header.prepend(message);
//header.append(message.cloneNode(true));

//header.before(message);

//
const btnScrollTo=document.querySelector('.btn--scroll-to');
const section1=document.querySelector('#section--1');
btnScrollTo.addEventListener('click',(e)=>
{
 const scroll=section1.getBoundingClientRect();
 console.log(e.target.getBoundingClientRect());
 console.log(scroll);
console.log("button is cliked")

// window.scrollTo
// ({
// left:scroll.left+window.pageXOffset,
// top:scroll.top+window.pageYOffset,
// behavior:"smooth"

// }) // old method of doing this
section1.scrollIntoView({behavior:'smooth'});

})
/// page navigation

// const navlinks=document.querySelectorAll(".nav__link");
// const sections=document.querySelectorAll(".section");
// console.log(sections);
// navlinks.forEach((navlink,i)=>
// {
//   navlink.addEventListener('click',(e)=>
//   {
//     e.preventDefault();
//     sections[i].scrollIntoView({behavior:'smooth'});
//   })
// })
// but this method is not efficient
// event delegation
document.querySelector('.nav__links').addEventListener('click',(e)=>
{
  console.log(e.target);
  e.preventDefault();
  if(e.target.classList.contains('nav__link'))
  {
    const id=e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
  }
})
// dom traversing

// going down
// const h1=document.querySelector("h1");
// console.log(h1);
// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.children);  // html collections
// h1.firstElementChild.style.color="white";  // text fisrt child
// h1.lastElementChild.style.color="orangered"; 


// going up 

// console.log(h1.parentNode);
// h1.parentNode.style.backgroundColor="green";
// h1.parentNode.style.backgroundColor="white";
// going up via dom traversal 



//tabbed component
const btns=document.querySelectorAll(".operations__tab");

const contents=document.querySelectorAll(".operations__content");

const btnsContainer=document.querySelector(".operations__tab-container");
btnsContainer.addEventListener(("click"),(e)=>
{
  e.preventDefault();
  // btn transition
  const clicked=e.target.closest('.operations__tab');
  if(!clicked) return;
  btns.forEach((btn)=>
  {
      btn.classList.remove("operations__tab--active")
  })
clicked.classList.add("operations__tab--active");

// content showing

const data_tab=clicked.getAttribute("data-tab");
const content=document.querySelector(`.operations__content--${data_tab}`);

contents.forEach((con)=>
{
  
  con.classList.remove("operations__content--active");

})
content.classList.add("operations__content--active");

})

// menu fade navigation
const nav=document.querySelector(".nav");
nav.addEventListener("mouseover",(e)=>
{
  if(e.target.classList.contains("nav__link"))
  {

 
  const link=e.target;
const sibling=link.closest('.nav').querySelectorAll(".nav__link");
sibling.forEach((el)=>
{
  if(el!==link)
  {
     el.style.opacity=0.5;
  }
})
console.log(sibling);
  }
})
nav.addEventListener("mouseout",(e)=>
{
  if(e.target.classList.contains("nav__link"))
  {

 
  const link=e.target;
const sibling=link.closest('.nav').querySelectorAll(".nav__link");
sibling.forEach((el)=>
{
  if(el!==link)
  {
     el.style.opacity=1;
  }
})
console.log(sibling);
  }
})
// This is the old method of doing this thing
