const apikey = "03f82eefdb64f43f063a1b326054153b"

let btn = document.querySelector(".search-btn")
let search = document.querySelector(".search")

 let apiurl   =    "https://api.openweathermap.org/data/2.5/weather?units=metric"
 let time = document.querySelector(".date-time")
 const now = new Date();

function datetime() {
   
 let month = now.getMonth() + 1; // Months are zero-indexed
 const day = String(now.getDate()).padStart(2, '0');
 const hours = String(now.getHours()).padStart(2, '0');
 const minutes = String(now.getMinutes()).padStart(2, '0');

 switch (month) {
   case 1:
      month = "JANUARY"
      break;
      case 2:
      month = "FEBRUARY"
      break;
      case 3:
      month = "MARCH"
      break;
      case 4:
      month = "APRIL"
      break;
      case 5:
      month = "MAY"
      break;
      case 6:
      month = "JUNE"
      break;
      case 7:
      month = "JULY"
      break;
      case 8:
      month = "AUGUST"
      break;
      case 9:
      month = "SEPTEMBER"
      break;
      case 10:
      month = "OCTOBER"
      break;
      case 11:
         month = "NOVEMBER"
         break;
         case 12:
         month = "DECEMBER"
         break;
      
   default:
      break;
 } 
 const today = new Date();
const dayNumber = today.getDay();
const daysOfWeek = [
    "Sunday",  // 0
    "Monday",  // 1
    "Tuesday", // 2
    "Wednesday",// 3
    "Thursday", // 4
    "Friday",   // 5
    "Saturday"  // 6
];

const dayName = daysOfWeek[dayNumber];
console.log(dayName)
 const formattedDate = `${month}  ${day}`;
 const formattedTime = `${hours}:${minutes}`;
 time.innerHTML =`${dayName} | ${formattedDate} | ${formattedTime}`

}
datetime()
 async function checkweather(city) {
    const response = await fetch(apiurl + "&q=" +city + `&appid=${apikey}`)
    var data = await response.json()
    
    console.log(data)
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".wheather-condition").innerHTML = data.weather[0].main
    datetime()
 }
 btn.addEventListener("click", ()=>{
    let city = search.value
    checkweather(city)
    
 })
 let searchshow = document.querySelector(".search-show")
let count = 0;
 searchshow.addEventListener("click",()=>{
   let searchdiv = document.querySelector(".search-div")
   if (count==0) {
   searchdiv.style.display = "block"
   searchshow.innerHTML = "+"
   
   count++;
   } else if(count==1) {
   searchdiv.style.display = "none"
   searchshow.innerHTML = "🔎"
   count--;
      
   }
  
 })

