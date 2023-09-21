    // to validate calculate function!
var x=false;

            //INPUTS
const dayIn = document.getElementById("day");
const monthIn = document.getElementById("month");
const yearIn = document.getElementById("year");

            //OUTPUT
const dayOut = document.getElementById("DD");
const monthOut = document.getElementById("MM");
const yearOut = document.getElementById("YY");
            //ERROR
var errorday = document.querySelector('.error-day');
var errormonth = document.querySelector('.error-month');
var erroryear = document.querySelector('.error-year');
            //CALCULATE BUTTON
var btn = document.querySelector(".btn");


btn.addEventListener('click', calculateAge) 


            //Day
dayIn.addEventListener('input', (e) => {
    if(+dayIn.value < 1 || +dayIn.value > 31){
        // one way by adding class
        errorday.classList.add('error');

        //other way to do is directly mention error in innerHTML,
        // errorday.innerHTML='Must be valid date'
        x=false;
        return //stop the execution
    }
    else if(+dayIn.value === 0){
        errorday.classList.add('error');
        x=false;
        return
    }
    else{
        errorday.classList.remove('error');
        x=true;
    }
})

                //Month
monthIn.addEventListener('input', (e) => {
    if(+monthIn.value < 1 || +monthIn.value > 12){
        errormonth.classList.add('error');
        x=false;
        return
    }
    else if(+monthIn.value === 0){
        errormonth.classList.add('error');
        x=false;
        return
    }
    else{
       errormonth.classList.remove('error');
        x=true;
    }
})

        //YEAR
yearIn.addEventListener('input', (e) => {
    if(+yearIn.value < 1900 ){
        erroryear.classList.add('error');
        x=false;
        return
    }
    else if(+yearIn.value > new Date().toISOString().split("T")[0].split("-")[0]){
        erroryear.classList.add('error');
        x=false;
        return       
    }

    else{
        erroryear.classList.remove('error');
        x=true;

    }
})

function calculateAge() {
    if(x){
        var d1 = dayIn.value;
        var m1 = monthIn.value;
        var y1 = yearIn.value;

        var date = new Date();
        var d2 = date.getDate();
        var m2 = 1 + date.getMonth();
        var y2 = date.getFullYear();
        var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        
        if(d1 > d2){
  	    d2 = d2 + month[m2 - 1];
  	    m2 = m2 - 1;
          }
        
          if(m1 > m2){
  	    m2 = m2 + 12;
  	    y2 = y2 - 1;
         }
        var days = d2 - d1;
        var months = m2 - m1;
        var years = y2 - y1;
         //OUTPUT DISPLAY
        dayOut.innerHTML= days;
        monthOut.innerHTML= months;
        yearOut.innerHTML= years;

        }
        else{
            alert('Enter Date');
         }
    }