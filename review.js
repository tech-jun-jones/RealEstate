import reviews from "./reviewsData.js";



const container = document.querySelector('.reviews-content-container');
const displayData = ()=>{

    const displayItem = reviews.map((item, index)=>{
        const {img, name, text} = item;
        let position = 'next';
        if(index === 0){
            position = 'active'
        }
        if(index === reviews.length -1){
            position = 'last';
        }
        return  `  <div class="reviews-content ${position}">
                        <div class="review-image">
                            <img src="${img}" alt="${name} ">
                        </div>
                        <div class="custo-name">
                            <h2>${name} </h2>
                        </div>
                        <div class="reviews-text">
                            <p>${text} </p>
                        </div>

                        <div class="icon">
                            <i class="fa fa-quote-right"></i>
                        </div>

                    </div> `
    }).join('');
    container.innerHTML = displayItem;
}
displayData();


export default reviews;

const prevBtn = document.querySelector('.btn-left');
const nextBtn = document.querySelector('.btn-right');

const startReviews = (type)=>{
    const active = document.querySelector('.active');
    const last = document.querySelector('.last');
    let next = active.nextElementSibling;
   
    if(!next){
        next = container.firstElementChild;
    }


    active.classList.remove(['active']);
    last.classList.remove(['last']);
    next.classList.remove(["next"]);

    if(type === 'prev'){
        active.classList.add('next');
        last.classList.add('active');
        next = last.previousElementSibling;
        if(!next){
            next = container.lastElementChild;
        }

         next.classList.remove(["next"]);
         next.classList.add('last');
        return;
    }


    active.classList.add('last');
    last.classList.add('next');
    next.classList.add('active');
   
}

prevBtn.addEventListener('click', ()=>{
    startReviews('prev');
});
nextBtn.addEventListener('click', ()=>{
    startReviews();
});

setInterval(() => {
    startReviews()
}, 5000);

