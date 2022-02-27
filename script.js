const introSectionHeading = document.querySelector("#intro-section-heading");
const introSectionTextContainer = document.querySelector(
  "#intro-section-text-container"
);
const observer = new IntersectionObserver(function (entry) {
  if (entry[0].isIntersecting) {
    introSectionHeading.classList.add("animate__animated");
    introSectionHeading.classList.add("animate__fadeInUp");
    introSectionTextContainer.classList.add("animate__fadeInUp");
    introSectionTextContainer.classList.add("animate__animated");
  }
});

observer.observe(document.querySelector("#intro-section-heading"));

// const newsroomGrid = document.querySelector(".newsrooms-grid");
// const newsroomGridItems = document.querySelectorAll(".newsrooms-grid-item");
// const observer2 = new IntersectionObserver(function (entry) {
//   if (entry[0].isIntersecting) {
//     for (let i = 0; i < newsroomGridItems.length; i++) {
//       setTimeout(() => {
//         newsroomGridItems[i].classList.add("animate__fadeInLeft");
//         newsroomGridItems[i].classList.add("animate__animated");
//       }, 500);
//     }
//   }
// });

// observer2.observe(document.querySelector(".newsrooms-content"));
