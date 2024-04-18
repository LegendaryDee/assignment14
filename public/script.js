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
    const crafts = await getCrafts();
        const column01 = document.getElementById("column01");
        const column02 = document.getElementById("column02");
        const column03 = document.getElementById("column03");
        const column04 = document.getElementById("column04");

        for(int i=0; i< crafts.length(); i++){
          const section = document.createElement("section");

          const title = document.createElement("h3");
          title.innerHTML= crafts[i].name;

          const img = document.createElement("img");
          img.src = crafts[i].image;

          section.append(title);
          section.append(img);

          `column{i%4}`.append(section);
        };

    // // now loop through the json
    // craftsJSON.forEach((craft)=>{
    //     const section = document.createElement("section");
    //     section.className ="w3-col l3 m6 w3-margin-bottom";

    //     const divCard = document.createElement("div");
    //     divCard.className = "w3-display-container w3-border";
    //     section.appendChild(divCard);

    //     const img = document.createElement("img");
    //     img.src = craft.image;
    //     img.style= "width:100%";
    //     divCard.appendChild(img);

    //     const divOverlay = document.createElement("div");
    //     divCard.className = "w3-display-middle w3-display-hover w3-xlarge w3-text-white";
    //     divCard.appendChild(divOverlay);

    //     const name = document.createElement("p");
    //     name.textContent = craft.name;
    //     divOverlay.appendChild(name);

    //     divCard.onclick = () => {
    //       alert("Description: " +craft.description);
    //     };

    //     craftsDiv.appendChild(section);
        
        
    // });
  };

showCrafts();
