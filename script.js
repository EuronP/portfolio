const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

if (toggle) {
    toggle.addEventListener('click', () => {
        console.log('klik')
        toggle.classList.toggle('active');
        nav.classList.toggle('active');
    })
}
