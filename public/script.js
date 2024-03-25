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
        animalsDiv.append(section);

        const h3 = document.createElement("h3");
        h3.innerHTML = animal.name;
        section.append(h3);

        const img = document.createElement("img");
        img.src = "http://localhost:3000/" + craft.img;
        section.append(img);
    });
};

showCrafts();
