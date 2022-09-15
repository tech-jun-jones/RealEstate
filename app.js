
import properties from "./propertyData.js";
import property from "./property.js";
import reviews from "./reviewsData.js";
import review from "./review.js";
import navBar from "./navBar.js";



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







