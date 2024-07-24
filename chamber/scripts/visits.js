const span = document.getElementById("timesVisited");

var lastVisited = localStorage.getItem("lastVisited");
const dateToday = new Date().getDate();
const monthToday = new Date().getMonth();
const yearToday = new Date().getFullYear();
const nowString = `${yearToday}-${monthToday}-${yearToday}`


if (lastVisited){
    if (Date(lastVisited) === Date(nowString)){
        span.innerHTML = `Back so soon? Welcome back`
    }
    else{
        span.innerHTML = `Welcome Back! Its been ${(Date(lastVisited) - Date(nowString))/86400} days since your last visit.`
    }
}
else{
    localStorage.setItem("lastVisited", nowString);
    span.innerHTML = `Welcome to the page`
}