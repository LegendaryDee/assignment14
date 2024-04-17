const getCrafts = async() => {
    try {
        return (await fetch("http://localhost:3000/api/crafts")).json();
    } catch(error){
        console.log("error retrieving data");
        return "";
    }
};

const showCrafts = async() => {
    const craftsJSON = await getCrafts();
    const craftsDiv = document.getElementById("crafts-div");

    if(craftsJSON == ""){
        craftsDiv.innerHTML = "Sorry, no crafts";
        return;
    }

    //now loop through the json
    craftsJSON.forEach((craft)=>{
        const section = document.createElement("section");
        section.className ="w3-col l3 m6 w3-margin-bottom";

        const divCard = document.createElement("div");
        divCard.className = "w3-display-container w3-border";
        section.appendChild(divCard);

        const img = document.createElement("img");
        img.src = "http://localhost:3000/api/crafts/images";
        img.style= "width:100%";
        divCard.appendChild(img);

        const divOverlay = document.createElement("div");
        divCard.className = "w3-display-middle w3-display-hover w3-xlarge w3-text-white";
        divCard.appendChild(divOverlay);

        const name = document.createElement("p");
        name.textContent = craft.name;
        divOverlay.appendChild(name);

        divCard.onclick = () => {
          alert("Description: " +craft.description);
        };

        craftsDiv.appendChild(section);
    });
  };

showCrafts();
