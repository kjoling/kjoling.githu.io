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
