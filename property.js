import properties from "./propertyData.js";


const container = document.querySelector('.property-content-container');


const displayItems = (menuItem)=>{
    container.innerHTML = menuItem.map((item)=>{
        const {img, category, title, location, state, bed, bath, miles} = item;
        return `
                <div class="property-details">
                     <div class="property-details-container">
                        <div class="image">
                            <img src=${img} alt="resident">
                        </div>
                        <div class="house-details">
                            <div class = "category">
                            <p>${category}</p>
                            </div>
                            <div class="house-title">
                              <h2>${title}</h2>  
                            </div>
                            
                            <div class="house-location">
                                <h2>${location}.</h2>
                            </div>
                            
                           
                            <p><Span><i class="fa fa-map-marker" aria-hidden="true"></i></Span> ${state}</p>

                        </div>

                        <div class="home-info">
                            <span>${bed}</span>
                            <span>${bath}</span>
                            <span>${miles}</span>
                        </div>
                        <div class="more-details">

                            <button type="submit" class="btn details-btn"> More Details <span><i class="fa fa-arrow-right"></i></span></button>
                        </div>
                    </div>
                </div>
                   
        `

     
       
    })
    .join('');
    

}

displayItems(properties);

const btnContainer = document.querySelector('.property-filterBtn');

const displayButton = ()=>{

    const Buttons = ['All', ...new Set(properties.map((property)=> property.category))];

    btnContainer.innerHTML = Buttons.map((category)=>{
        return `<h3 class="filterBtn " data-id="${category}">${category} </h3>`;
    }).join('');

    const btns = document.querySelectorAll('.filterBtn');
    btns.forEach((btn)=>{
        btn.addEventListener('click', (e)=>{
            const el = e.target.dataset.id;
            const filterBtn = properties.filter( (item)=>{
                
                if (item.category === el) {
                 
                    return item;
                }
                
            });
    
            if (el === 'All') {

                displayItems(properties);
 
            }
            else{
               
                 displayItems(filterBtn);
                
                
            }


        });
        
       
    });

    const clickBtn = ()=>{

       for (let i = 0; i < btns.length; i++) {
         btns[0].classList.add('active3');
         btns[i].addEventListener('click', ()=>{

            btns.forEach((btn)=>btn.classList.remove('active3'))
        
            btns[i].classList.add('active3')
         });
    
       }

        
    }
    clickBtn();
}
displayButton();



export default property