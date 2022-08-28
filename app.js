import properties from "./propertyData.js";
import property from "./property.js";
import reviews from "./reviewsData.js";
import review from "./review.js";
import navBar from "./navBar.js";

// // Buy and Rent Section

// const buyRent = document.querySelector('.buy-rent-content-wrapper');
// const btns = document.querySelectorAll('#btn');
// const contents = document.querySelectorAll('.content');
// buyRent.addEventListener('click', (e)=>{
//     const id = e.target.dataset.id;
//     console.log(id);
//    if(id){
//     btns.forEach((btn)=>{
//         btn.classList.remove('active1');
//         e.target.classList.add('active1');
       
//     });
//     contents.forEach((content)=>{
//         content.classList.remove('active2')
//     });

//     const element = document.getElementById(id);
//     element.classList.add('active2')
//    }
// })


// Number Count Section


const numbers = [...document.querySelectorAll('.number')];


const updateCount = (e)=>{
    const value = parseInt(e.dataset.value);
    const increment = Math.ceil(value / 1000);
    let initialValue = 0;

    const IncreaseCount = setInterval(() => {
        initialValue += increment;

        if(initialValue > value){
            e.textContent = `${value}+`;
            clearInterval(IncreaseCount);
            return;
        }

        e.textContent = `${initialValue}+`;

    }, 10);
}


numbers.forEach((number)=>{
    updateCount(number)
})



// Deal Section



const largeImage = document.querySelector('.largeImage');
const smallImages = document.querySelectorAll('.smallImage');


const autoPlay = ()=>{
    for (let i = 0; i < smallImages.length; i++) {
        setTimeout(() => {
            
            largeImage.src =  smallImages[0].src;
            

        }, 12000);
        setTimeout(() => {
            
         
           largeImage.src = smallImages[1].src;
          
           
           
            
        }, 14000);
        setTimeout(() => {
           
           largeImage.src = smallImages[2].src;
          
          
            
        }, 16000);
        setTimeout(() => {
           
           largeImage.src = smallImages[3].src;
          
            
        }, 18000);
        setTimeout(() => {
           
           largeImage.src = smallImages[4].src;
         
            
        }, 40000);
       
        
        
    }
     
  
}

const courasel = ()=>{
setInterval(() => {

    autoPlay ();

}, 10000);
}

courasel();



const commlargeImage = document.querySelector('.comm-largeImage');
const commsmallImages = document.querySelectorAll('.comm-smallImage');


const CommautoPlay = ()=>{
    for (let i = 0; i < commsmallImages.length; i++) {
        setTimeout(() => {
            
            commlargeImage.src =  commsmallImages[0].src;
           

        }, 12000);
        setTimeout(() => {
            
         
           commlargeImage.src = commsmallImages[1].src;
         
           
           
            
        }, 14000);
        setTimeout(() => {
           
           commlargeImage.src = commsmallImages[2].src;
         
          
            
        }, 16000);
        setTimeout(() => {
           
           commlargeImage.src = commsmallImages[3].src;
           
            
        }, 18000);
        setTimeout(() => {
           
           commlargeImage.src = commsmallImages[4].src;
          
            
        }, 40000);
       
        
        
    }
     
  
}

const Commcourasel = ()=>{
setInterval(() => {

    CommautoPlay ();

}, 10000);
}

Commcourasel();








