// abrir menu

let menuBtn = document.getElementById('menuBtn')

menuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav')
    this.classList.toggle('fa-xmark')
})

let typed = new Typed('.auto-input', {
    strings: ['Desenvolvedor Back-end!', 'Desenvolvedor Front-end!', 'Analista de suporte'],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})