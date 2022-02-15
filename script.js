const projects = document.querySelectorAll(".project");
// for (let project of projects) {
//     project.addEventListener('click',
//         function (e) {
//             const projectInfo = project.querySelector('p');
//             projectInfo.classList.toggle('hide');
//             projectInfo.removeEventListener('click', function (e) {

//             });

//         });
// }

const hide = function (items) {
  for (let item of items) {
    const header = item.querySelector("h3");
    const paragraphInfo = item.querySelector("p");
    header.addEventListener("click", function (e) {
      if (e.target === e.currentTarget) paragraphInfo.classList.toggle("hide");
    });
  }
};

hide(projects);

const darkMode = document.querySelector("#btn-check-outlined");
const darkModeText = document.querySelector(".btn-outline-secondary");
const documentBody = document.body;

darkMode.addEventListener("click", function (e) {
  if (e.target === e.currentTarget) {
    documentBody.classList.toggle("dark-mode");

    if (documentBody.classList.contains("dark-mode"))
      darkModeText.innerText = "Light Mode";
    else if (!documentBody.classList.contains("dark-mode")) {
      darkModeText.innerText = "Dark Mode";
    }
  }
});
