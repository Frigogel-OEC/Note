const titles = document.querySelectorAll('.sub-title, .title');
const tableOfContentsButton = document.querySelector('.dropdown-button');
const tableOfContents = document.querySelector('.table-of-contents');
const colors = document.querySelectorAll('[color]:not(.sidebar):not(.box):not(.i-box)');

const sidebars = document.querySelectorAll('.sidebar, .box, .i-box');

sidebars.forEach(sidebar => {
    let color = sidebar.getAttribute('color');
    sidebar.style.setProperty('--color', color);
})

colors.forEach(color => {
    let colorName = color.getAttribute('color');
    color.style.setProperty('color', colorName);
});


let count = id = 0;
titles.forEach(title => {
    if (title.className === 'title') {
        tableOfContents.innerHTML += `<a href="#${id}"><h1>${title.innerHTML}</h1></a>`
        count = 0;
    }
    else {
        count++
        text = title.innerHTML;
        title.innerHTML = count + '. ' + text;
        
        tableOfContents.innerHTML += `<a href="#${id}"><h1 style="margin-left: 2em;">${title.innerHTML}</h1></a>`
    }

    title.setAttribute('id', id);
    id++
})

tableOfContentsButton.addEventListener('click', () => {
    if (tableOfContentsButton.getAttribute('active') === 'True') {
        tableOfContentsButton.setAttribute('active', 'False');
        tableOfContents.style.setProperty('max-height', '0');
    }
    else {
        tableOfContentsButton.setAttribute('active', 'True');
        tableOfContents.style.setProperty('max-height', 'fit-content');
    }
    
})