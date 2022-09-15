




const navBar = document.querySelector('.navBar');
const scrollLinks = document.querySelectorAll('.scroll-link');
const navList = document.querySelector('.navlist');




window.addEventListener('scroll', ()=>{
let scroll = window.pageYOffset;
const navHeight = navBar.getBoundingClientRect().height;
if(scroll > navHeight){
    navBar.classList.add('fixed-nav');
}
else{
    navBar.classList.remove('fixed-nav');
}
});


scrollLinks.forEach((links)=>{
    links.addEventListener('click',(e)=>{
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id)
        const navHeight = navBar.getBoundingClientRect().height;
        const navListHeight = navList.getBoundingClientRect().height;
        const fixedNav = navBar.classList.add('fixed-nav');
        let position = element.offsetTop - navHeight;

        if(!fixedNav){
            position - navHeight
        }
        if(navHeight > navHeight){
            position + navListHeight
        }
        window.scrollTo({
            left:0,
            top: position,
        });
    })
    
})


const MenuBtn = document.querySelector('.btn-menu');
const NavList = document.querySelector('.navlist');
console.log(MenuBtn);


MenuBtn.addEventListener('click', ()=>{

    NavList.classList.toggle('toggle');

    if(NavList.classList.contains('toggle')){
        console.log('love you');
        document.body.style.overflow = 'hidden';
       
    }
    else{
        document.body.style.overflow = 'auto';
    }
})


export default navBar;