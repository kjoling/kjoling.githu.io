const projects = document.querySelectorAll('.project');
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
        const paragraphInfo = item.querySelector('p');
        item.addEventListener('click', function (e) {
            paragraphInfo.classList.toggle('hide');
            console.dir(paragraphInfo);
            paragraphInfo.removeEventListener('click', hide);
        });
        paragraphInfo.removeEventListener('click', hide);
    }
}

hide(projects);
// make it so clicking on paragraph does not hide it 