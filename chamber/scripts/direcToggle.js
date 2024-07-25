const main = document.getElementById("directory");
main.style.display = "grid";
main.style.gridTemplateColumns = "1fr 1fr 1fr";

 function  dataRetriever(){
    fetch("./data/members.json")
        .then(response => response.json())
        .then(data =>{
            
            members(data)
        })
        .catch(error =>{
            console.log(error)
        })
}

const members =(data)=>{
    data.map(member => {memberCard(member)
    // console.log(member)
})
    
}

const memberCard=(member)=>{
    const card = document.createElement("div")
    card.setAttribute("id", "memberCard")
    const name = member.name;
    const address = member.address;
    const phoneNo = member.phoneNo;
    const imgUrl = member.imgUrl;
    const memLevel = member.memLevel;
    const desc = member.description;

    card.innerHTML = `  <img src = ${imgUrl} alt = ${name}>
                        <h2> ${name}</h2>
                        <h3>${address}</h3>
                        
                        <h3>${phoneNo}</h3>
                        <h3>${memLevel}</h3>
                        <br>`

    const description =  document.createElement("p");
    description.textContent = desc;
    card.appendChild(description);    

    description.style.display = "none";

    card.addEventListener("mouseover", () => {
        description.style.display = "inline";
        description.style.padding = "0.5em"
    });
    card.addEventListener("pointerleave", ()=>{
        description.style.display = "none";
    } )

    main.appendChild(card)


}

const toggle = ()=>{
    const toggleButton = document.querySelector(".toggle")
    toggleButton.textContent = "Display in Flex";
    
    toggleButton.addEventListener("click", ()=>{
        if (toggleButton.textContent == "Display in Flex"){
            toggleButton.textContent = "Display in Grid";
            main.style.display = "flex";
            main.style.flexDirection = "column";
            
            
        }
        else{
            toggleButton.textContent = "Display in Flex";
            main.style.display = "grid";
            main.style.gridTemplateColumns = "1fr 1fr 1fr";
            main.style.gap = "2em"
        }
    })
}

toggle();
dataRetriever();