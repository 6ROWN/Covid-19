//Menu
const navMenu = document.querySelector(".nav-menu");
    toggleMenu = document.querySelector(".nav-toggle");
    closeMenu = document.querySelector(".nav-close");

toggleMenu.addEventListener("click", ()=>{
    navMenu.classList.toggle("show");
});

closeMenu.addEventListener("click", ()=>{
    navMenu.classList.remove("show");
});

//SCROLL TO TOP BUTTON
const toTop = document.getElementById("top-btn");
window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})

//GET DATA FROM COVID API

document.addEventListener("DOMContentLoaded", function(){
    //Init covid api
    const covid = new CovidApi();
    //Init UI
    const ui = new UI();

    covid.getData()
    .then(data=>{
        //Get Global Data
        ui.globalOutput(data.data.Global)  
        
        //Get Country data
        ui.countryOutput(data.data.Countries)   

        //Get news Info
        ui.news(data.newsData.articles)
        
        //Filter Country
        const searchInput = document.querySelector(".search-input");
        searchInput.addEventListener("keyup", ui.filterSearch);
        
        ui.barChart(data.data.Global)
    })   
})



