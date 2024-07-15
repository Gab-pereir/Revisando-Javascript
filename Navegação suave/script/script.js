const linksection = document.querySelectorAll('.js-nav li a');

function scroolSection(event){
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const initPosition = section.offsetTop;

    window.scrollTo({
        top: initPosition - 80,
        behavior: 'smooth'
    })
}

linksection.forEach(link => {
    link.addEventListener('click', scroolSection);
})