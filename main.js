const sections = 
document.querySelectorAll('.carte,.img>img, .descrip>p, .article, .orizontal, .r-img, .r-descr, .s-carte, .tab, .T, .c-container');
sections.forEach((section) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if 
            (entry.isIntersecting){
                section.classList.add('active')
            }
        });
    });
    observer.observe(section);
});


const body = document.body;
const boug = document.getElementById("toggl-mode");

// appliquer le mode sauvegardé lors du chargement
const savedTheme = localStorage.getItem('theme');
  if(savedTheme){
    body.setAttribute ('data-theme', savedTheme)
  }

  //   gestionnaire d'évènement pour le bouton
boug.addEventListener("click", () =>{
    const currentTheme = document. body.getAttribute('data-theme');
    const newTheme = currentTheme
 === 'dark' ? 'claire' : 'dark'  ;
 document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme',newTheme);
});


const hamMenu = document.querySelector('.ham-menu');
const liste = document.querySelector('nav');
hamMenu.addEventListener('click',()=>{
    hamMenu.classList.toggle("active");
    liste.classList.toggle("active");
});

// const body = document.body;
// const toggleButton = document.getElementById('toggle-mode');

// appliquer le mode sauvegardé lors du chargement

//   const savedTheme = localStorage.getItem('theme');
//   if(savedTheme){
//     body.setAttribute ('data-theme', savedTheme)
//   }
//   gestionnaire d'évènement pour le bouton
// toggleButton.onclick = () => {
//     const currentTheme = document. body.getAttribute('data-theme');
//     const newTheme = currentTheme
//  === 'dark' ? 'claire' : 'dark'  ;
//  document.body.setAttribute('data-theme', newTheme);
//     localStorage.setItem('theme',newTheme);
// };


document.getElementById('vus-p1').addEventListener('click', function() {
    var para = document.getElementById('p1');
    var rota = document.getElementById('vus-p1');
    para.classList.toggle('vus');
    rota.classList.toggle('active');
} 
);

document.getElementById('vus-p2').addEventListener('click', () => {
    var para2 = document.getElementById('p2');
    var rota2 = document.getElementById('vus-p2');
    para2.classList.toggle('vus');
    rota2.classList.toggle('active');
} 
);

document.getElementById('vus-p3').addEventListener('click', () => {
    var para3 = document.getElementById('p3');
    var rota3 = document.getElementById('vus-p3');
    para3.classList.toggle('vus');
    rota3.classList.toggle('active');
} 
);




