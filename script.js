//console.log("EMPEZANDO ...");
const icono=document.querySelector(".icon");
const menu=document.querySelector(".menu");
const menuR=document.querySelector(".menu>img");
const list=document.querySelector(".list");
const form=document.querySelector(".form");
const imgArowF=document.querySelector(".imgArrowF");
const imgArowC=document.querySelector(".imgArrowC");
const featuresList=document.querySelectorAll(".features>li");
const companyList=document.querySelectorAll(".company>li");
const features=document.querySelector(".features");
const company=document.querySelector(".company");
icono.addEventListener("click",()=>{
    menu.classList.toggle("collapsed");
    icono.classList.toggle("active");
    list.classList.toggle("active");
    form.classList.toggle("active");
});
imgArowC.addEventListener("click",()=>{
    imgArowC.classList.toggle("active");
    companyList.forEach((e)=>{
        e.classList.toggle("active");
    });
    company.classList.toggle("active");

});
imgArowF.addEventListener("click",()=>{
    imgArowF.classList.toggle("active");
    
    featuresList.forEach((e)=>{
        e.classList.toggle("active");
    });
    features.classList.toggle("active");
});