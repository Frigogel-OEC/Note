const titles = document.querySelectorAll('.sub-title, .title');
const tableOfContentsButton = document.querySelector('.dropdown-button');
const tableOfContents = document.querySelector('.table-of-contents');
const colors = document.querySelectorAll('[color]:not(.sidebar):not(.box):not(.i-box)');
const translations = document.querySelectorAll('[t]');

const sidebars = document.querySelectorAll('.sidebar, .box, .i-box');

translations.forEach(translation => {
    let t = translation.getAttribute('t');
    let a = translation.innerHTML
    translation.addEventListener('click', () => {
        if (translation.getAttribute('enabled') == 'true') {
            translation.setAttribute('enabled', 'false')
            translation.style.setProperty('background-color', '')
            translation.innerHTML = a
        }
        else {
            translation.setAttribute('enabled', 'true');
            translation.style.setProperty('background-color', 'yellow')
            translation.innerHTML = t
        }
    })
})

sidebars.forEach(sidebar => {
    let color = sidebar.getAttribute('color');
    sidebar.style.setProperty('--color', color);
    let pseudoHeight = window.getComputedStyle(sidebar, ':before').height;
    console.log(sidebar.className);
    className = sidebar.className
    if (className == 'sidebar') {
        sidebar.style.setProperty('--height', `calc(-1 * calc(${pseudoHeight} + .5em))`);
    }
    else {
        sidebar.style.setProperty('--height', `calc(-1 * calc(${pseudoHeight} + 1px + 1em))`);
    }
    
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