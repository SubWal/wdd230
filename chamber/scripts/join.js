const select = document.getElementById("membership");

const options = ["NP Membership (No fees for non-profit organizations)",
                    "Bronze Membership",
                     "Silver Membership",
                      "Gold Membership"];

const prices = ["0", "$50", "$100", "$150"]                      

select.innerHTML = `<Option value = default>Choose One ...</Option>`
options.map((option)=>{
    var optionEl = `<Option value = option${options.indexOf(option)}> ${option} </Option>`
    var descrip = `<div><h2>${option}</h2><h3>${prices[options.indexOf(option)]}</h3>`
    document.getElementById("membershipInfo").innerHTML += descrip
    select.innerHTML+=optionEl;
})

const timeStamp = document.getElementById("timeStamp");
timeStamp.value = new Date();
console.log(timeStamp.value)

document.getElementById("description").addEventListener("focus", ()=>{
    if (document.getElementById("description").value== "Your Organization's brief introduction "){
    document.getElementById("description").value = ``
}})

document.querySelector("fieldset").setAttribute("width",
 `${document.querySelector("select").offsetWidth}`)
