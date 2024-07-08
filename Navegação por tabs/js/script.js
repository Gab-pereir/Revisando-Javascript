const navTabs = document.querySelectorAll('.js-nav-tabs li a');
const tabItem = document.querySelectorAll('.js-tab-item');

navTabs.forEach((nav, index) => {
    nav.addEventListener('click', (event) =>  {
        event.preventDefault();

        navTabs.forEach(itemNav => {
            itemNav.classList.remove('active'); //Remove todas as classes "active" presentes
        }) 
        nav.classList.add('active'); //Adiciona a classe "active" na parte clicada

        tabItem.forEach(tab => {
            tab.classList.remove('active')
        })
        tabItem[index].classList.add('active');
    })
})
