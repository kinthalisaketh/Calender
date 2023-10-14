const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".icons i");

let date = new Date();
var currYear = date.getFullYear();
var currMonth = date.getMonth();


const months = ["January" , "February" , "March","April","May","June","July",
            "August","September","October","November","December"];



const renderCalender=()=>{
    let firstDayofMonth = new Date(currYear,currMonth,1).getDay(),
     lastDateofMonth = new Date(currYear,currMonth+1,0).getDate(),
     lastDayofMonth = new Date(currYear,currMonth,lastDateofMonth).getDay(),
     lastDateofLastMonth = new Date(currYear,currMonth,0).getDate();

    let liTag ="";

    for(let i= firstDayofMonth; i>0 ; i-- ){
        liTag += `<li class="inactive">${lastDateofLastMonth -i +1}</li>`;
    }

    
    for (let i = 1; i <= lastDateofMonth; i++) { 
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()  && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for(var i = lastDayofMonth ; i<6;i++){
        liTag += `<li class="inactive">${i-lastDayofMonth +1}</li>`;
    }

    
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?seasons , "+ months[currMonth] + "')";
   

    currentDate.innerText = months[currMonth] +" "+currYear;
    daysTag.innerHTML = liTag;
}
renderCalender();

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? (currMonth - 1) : (currMonth + 1);

        if(currMonth <=0 || currMonth>11){
            date = new Date(currYear, currMonth);
            currYear=date.getFullYear();
            currMonth = date.getMonth();
        }
        else{
            date = new Date();

        }
        
        renderCalender();
    })
})