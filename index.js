let menu = document.querySelector('.main__menu');

for (let i = 0; i < menu.children.length; i++) {
    menu.children[i].addEventListener('click', function(e) {
        for (let prop of menu.children) {
            if (prop != menu.children[i]) { prop.classList.remove('active'); }
        }
        (this.classList.contains('active')) ? this.classList.remove('active'): this.classList.add('active');
    });
}

document.querySelector('.toggle').addEventListener('click', function() {
    menu.style.display = (menu.style.display == 'block') ? 'none' : 'block';
});