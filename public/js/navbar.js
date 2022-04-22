var navigate = document.getElementsByTagName('nav');
navigate[0].classList.toggle("sticky", window.scrollY > 10);
window.addEventListener('scroll', function() {
    navigate[0].classList.toggle("sticky", window.scrollY > 10);
});