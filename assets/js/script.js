let currentDay = $('#currentDay');

let hours = document.querySelectorAll(`textarea`);
let buttons = document.querySelectorAll(`button`);

let today = moment().format(`dddd\, MMM Do`);
let time = moment().format(`HH`);

// test out different times of day by changing 'time'
// time = 12;

currentDay.text(today);

// color codes each row based on the current time using class assignment
hours.forEach(i => {
    let hour = i.id;
    // remove non-number values from id name and parse integer value
    hour = hour.replace(/[^0-9]/g,'');
    hour = parseInt(hour);
    // debug comparisons
    // console.log(`The time is ${time} and the hour is ${hour}`);
    if(hour < time){
        i.classList.add(`past`);
    }else if(hour > time){
        i.classList.add(`future`);
    }else i.classList.add(`present`);
});

buttons.forEach((i,x) => {
    i.addEventListener("click", event => {
        save(x);
    });
});

// saves textarea contents on button click
function save(x){
    localStorage.setItem(`note${x}`, hours[x].value);
};

// restores saved notes if any are present
hours.forEach((i,x) => {
    i.innerText = localStorage.getItem(`note${x}`);
})