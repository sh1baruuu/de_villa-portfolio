
window.addEventListener('blur', () =>{
    document.title = "Come back here!";
});
window.addEventListener('focus', () =>{
    document.title = "De Villa | Portfolio";
});

const navLinks = document.querySelectorAll('.link a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const msg = "This section is under development. Please check back later!";
        const targetId = this.getAttribute('href');
        if (targetId=="#contacts"){
            alert(msg);
            alert("If you want to get in touch with me, please send an email to devillarudolphangelo@gmail.com.");
        }else{
            alert(msg);
        }
    });
});

const hamburgerBtn = document.querySelector('.hamburgerBtn');

hamburgerBtn.addEventListener('click', () =>{
    alert("This is under development. Please check back later!");
});


const image = document.querySelector('#image');
const img = image.querySelector('img');

img.addEventListener('load',()=>{
     loader.style.display="none";
     console.log("loaded");
     });