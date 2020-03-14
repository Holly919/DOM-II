// Your code goes here
const links = document.querySelectorAll('.nav-link')
links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.stopPropagation();
     link.style.color = 'blue'
      event.preventDefault();

  })
})

// 1. dblclick
const navLinks = document.querySelectorAll('a');

navLinks.forEach(navLink => (navLink.addEventListener('dblclick', e => {
    e.preventDefault()
    e.stopPropagation()
    navLink.style.color = 'crimson'
})));

// 2. click
const headerBackground = document.querySelector('header');

headerBackground.addEventListener('click', e => {
    headerBackground.style.backgroundColor = 'darkcyan'
});


// 3. mouseover
const busImg = document.querySelector("img");

busImg.addEventListener("mouseover", event => {
    event.target.style.visibility="hidden";
    setTimeout(function () {
        event.target.style.visibility = "visible";
    }, 500);
});


// 4. wheel
const funBusText = document.querySelector('.intro p');

funBusText.addEventListener('wheel', () => {
    funBusText.style.backgroundColor = "darkcyan"
});

// 5. mouseleave
funBusText.addEventListener('mouseleave', () => {
    funBusText.style.backgroundColor = "aliceblue"
});

// 6. keydown
const text = document.querySelectorAll("p");
text.forEach(item => {
    window.addEventListener('keydown', () => {
        item.style.color = "aquamarine";
    });
});

// 7. keyup
text.forEach(item => {
    window.addEventListener('keyup', () => {
        item.style.color = "darkslategray";
        // event.stopPropagation()
    });
});

// 8. resize
 //const travelImgs = document.querySelector(".img-content")
// const travelImgs = document.getElementsByClassName('img-content') [0]
// window.addEventListener('resize', () => {
//     travelImgs.src = "img/adventure.jpg"
// })

const body = document.querySelector("body");

window.addEventListener('resize', () => {
    body.style.background = "lightseagreen";
});

// 9. scroll
document.addEventListener("scroll", () => {
    body.style.background = "lightgoldenrodyellow";
    event.stopPropagation()
});


// 10. select
// const textselect = document.getElementsByClassName('destination');
// textselect.addEventListener("select", () => {
//     event.target.style.color ="red";
// });

const hSelect = document.querySelectorAll("h4");

hSelect[0].addEventListener("select", () => {
    hSelect[0].style.color ="red";
});
hSelect[1].addEventListener("select", () => {
    hSelect[1].style.color ="red";
});
hSelect[2].addEventListener("select", () => {
    hSelect[2].style.color ="red";
});






// gsap.set(".btn",{opacity: 0, scale: 0.1});

// gsap.to(".btn", {
//   duration: 1,
//   scale: 1,
//   opacity: 1,
//   rotate: -360,
//   ease: "bounce",
//   stagger: {
//   amount: 1,
//     from: "end"
//   }
// })



gsap.set(".btn",{opacity: 0, scale: 0.1, translateY: -1})
// register the effect with GSAP:
gsap.registerEffect({
    name: "grow",
    defaults: {duration:3}, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {duration: config.duration, opacity: 1, scale: 1, translateY: 100, });
    }
});

gsap.effects.grow(".btn");
