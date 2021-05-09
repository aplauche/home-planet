// Opening Scene
const eyesTl = gsap.timeline({ repeat: -1 });

const eyeballs = document.querySelectorAll(
  "path#ball, path#ball_2, path#ball_3, path#ball_4, path#ball_5, path#ball_6"
);

eyesTl
  .set(eyeballs, { y: 0, x: 0 })
  .to(eyeballs, { y: 7, x: 2, stagger: 0.3, duration: 0.3, delay: 2 })
  .to(eyeballs, { y: 0, x: 0, duration: 0.3, delay: 2 });

const hatTl = gsap.timeline({ repeat: -1, repeatDelay: 4 });
const hat = document.querySelector("g#hat");

hatTl
  .set(hat, { y: 0, x: 0, rotation: 0 })
  .to(hat, { y: -50, x: -10, rotation: 20 })
  .to(hat, { y: 0, x: 0, rotation: 0, duration: 0.75, delay: 0.3 });

const armTl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
const rightArm = document.querySelector("#right-arm");
const leftArm = document.querySelector("#left-arm");

armTl
  .set(rightArm, { rotation: 0 })
  .set(leftArm, { rotation: 0 })
  .to(leftArm, { rotation: 20, delay: 2 })
  .to(rightArm, { rotation: -20 })
  .to(leftArm, { rotation: 0, delay: 2 })
  .to(rightArm, { rotation: 0 });

// Ending Scene
const tvTl = gsap.timeline({ repeat: -1 });
const tv = document.querySelector("#tv-light");

tvTl
  .set(tv, { opacity: 1 })
  .to(tv, { opacity: 0.8, duration: 0.5, delay: 0.3 })
  .to(tv, { opacity: 0.85, duration: 0.25, delay: 0.2 })
  .to(tv, { opacity: 0.75, duration: 0.5, delay: 0.1 })
  .to(tv, { opacity: 1, duration: 0.25, delay: 0.3 });

const links = document.querySelectorAll("svg a");
const label = document.querySelector("div.label");

links.forEach((link) => {
  link.addEventListener("mouseenter", function (e) {
    const text = link.getAttribute("data-label");
    label.innerText = text;
    label.style.opacity = 1;
    gsap.to(links, { opacity: 0.25, duration: 0.2 });
    gsap.to(link, { opacity: 1 });
  });
  link.addEventListener("mouseleave", function (e) {
    label.style.opacity = 0;
    label.innerText = "";
    gsap.to(links, { opacity: 1 });
  });
});

window.addEventListener("mousemove", function (e) {
  const xPos = e.clientX;
  const yPos = e.clientY;

  label.style.top = yPos + "px";
  label.style.left = xPos + "px";
});
