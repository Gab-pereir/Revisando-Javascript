const allDropdowns = document.querySelectorAll('.dropdown');

allDropdowns.forEach(function(item) {
    console.log(item);
})

allDropdowns.forEach((item, index, array) => {
    console.log(item);
})