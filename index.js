let menu = document.querySelector('.main__menu').children;

for (let i = 0; i < menu.length; i++) {
    console.log(this);
    menu[i].addEventListener('click', function(e) {
        for (let prop of menu) {
            if (prop != menu[i]) { prop.classList.remove('active'); }
        }
        (this.classList.contains('active')) ? this.classList.remove('active'): this.classList.add('active');
    });
}

document.querySelector('.toggle').addEventListener('click', function() {
    let mainMenu = document.querySelector('.main__menu');
    mainMenu.style.display = (mainMenu.style.display == 'block') ? 'none' : 'block';
});