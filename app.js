
    //    ham burger
let ham =document.querySelector(".ham");
let div =document.querySelector(".div");
let line1=document.querySelector('.line1');
let line2=document.querySelector('.line2');
let line3=document.querySelector('.line3');
ham.addEventListener('click',()=>{
    div.classList.toggle('div1');
    line1.classList.toggle('hlo');
    line2.classList.toggle('hlo');
    line3.classList.toggle('hlo');

})

        //  accordion   
let answer=document.querySelectorAll(".answer")
let faq=document.querySelectorAll(".faq")
faq.forEach((faq)=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle('active')
    })
})
 
            // loadmore
let section2=document.querySelector(".section2-2");
let btn1 = document.querySelector("#btn-1")
btn1.addEventListener("click",()=>{
    section2.classList.add("added")
    btn1.style.display='none';
})

                // Form
let input1=document.querySelector('.input1');
let input2=document.querySelector('.input2');
let submit=document.querySelector('.form button');
let form=document.querySelector(".form")
let form1=document.querySelector(".form1")

submit.addEventListener('click',()=>{
    let value1=input1.value;
    let value2=input2.value;
    form.style.display='none';
    form1.style.display='flex';
    let formh3=document.querySelector(".form1-1 h2");
    formh3.textContent=value1;
    let formh31=document.querySelector(".form1-2 h2");
    formh31.textContent=value2;
    if(value1=="" && value2==""){
        form.style.display="flex";
        form1.style.display='none';
        alert("Enter the details ")
    }
    
})

 



let images=document.querySelectorAll('.image img');
let popup=document.querySelector('.popup');
let popupimg=document.querySelector('.popup img')
let cross=document.querySelector('.popup span');
images.forEach((image)=>{
    image.addEventListener('click',()=>{
        popup.style.display='block';
        popupimg.src=image.getAttribute('src')
    })
})
cross.addEventListener('click',()=>{
    popup.style.display='none';
})