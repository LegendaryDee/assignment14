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
        craftsDiv.innerHTML = "No crafts available";
        return;
    }
    const crafts = await getCrafts();
        const column01 = document.getElementById("column01");
        const column02 = document.getElementById("column02");
        const column03 = document.getElementById("column03");
        const column04 = document.getElementById("column04");

        for(let i=0; i< crafts.length; i++){
          const section = document.createElement("section");

         

          const img = document.createElement("img");
          img.src = crafts[i].img;

          section.append(img);

        //   `column{i%4}`.append(section);

        if (i%4 == 0) 
        {
            column01.append(section);
        } else if (i%4 == 1) {
            column02.append(section);
        } else if (i%4 == 2) {
            column03.append(section);
        }
        else if (i%4 == 3) {
            column04.append(section);
        }
        }
        };


        if(craftsJSON= "")
    {
       
        craftsDiv.innerHTML = "No data to display"
        return;

    }
    const craftsContainer = document.createElement("section");
    craftsContainer.classList.add("crafts-container");
    craftsDiv.append(craftsContainer);
    
    let craftSection;

    for(let i=0; i<4; i++)
    {
        craftSection = document.createElement("section");
        craftSection.classList.add('craft-section$(1)'); //Might need changing
        craftsContainer.append(craftSection);
    }

    const craftSection00 = document.querySelector(".craft-section00");
    craftSection00.classList.add("craftSection00");

    const craftSection01 = document.querySelector(".craft-section01");
    craftSection01.classList.add("craftSection1");

    const craftSection02 = document.querySelector(".craft-section02");
    craftSection02.classList.add("craftSection02");

    const craftSection03 = document.querySelector(".craft-section03");
    craftSection03.classList.add("craftSection03");
        
        craftSection.append(craftImg);
        
        craftImg.onclick = (event) =>
        {
            openModal1("expand-img-section");
            openModal2("expand-text-section");

            const expandInfoSection = document.getElementById("expand-text-section");
            expandInfoSection.innerHTML = "";

            const expandNameh3 = document.createElement("h2");
            expandNameh3.classList.add("inline");
            expandNameh3.innerHTML = crafts.name;
            expandInfoSection.append(expandNameh3);

            const editPencilLink = document.createElement("e");
            editPencilLink.innerHTML = ""; //Don't know what to put in here
            editPencilLink.id = "edit-pencil-img";

            const deletePencilLink = document.createElement("d");
            deletePencilLink.innerHTML = "x";
            expandInfoSection.append(deletePencilLink);
            deletePencilLink.id = "delete-x-link";

            const expandDescription = document.createElement("p");
            expandDescription.innerHTML = craft.description; //Come back to this


            const expandSuppliesTitle = document.createElement("h3")
            expandSuppliesTitle.innerHTML = "Supplies:"
            expandInfoSection.append(expandSuppliesTitle);

            const expandSupplies = document.createElement("ul");

            for(let i=0; i<craft.supplies.length; i++)
            {
                const expandSuppliesP = document.createElement("li");
                expandSuppliesP.append(craft.supplies[i]);
                expandSupplies.append(expandSuppliesP);
            };


        

        expandInfoSection.append(expandSupplies);

        const expandImg = document.getElementById("expand-img-section");
        expandImg.classList.add("expand-craft-image");
        expandImg.src= "images/" + craft.img;
        expandImg.append(expandImg);

        editPencilLink.onclick = showAddCraft;

        deletePencilLink.onclick = (event) =>
        {
            event,preventDefault();
            console.log("deletePencilLink clicking")

            deleteCraftPrompt(craftsJSON[i]);
        }

        populateCraftEditForm(craftsJSON[i]);
    }
 
    showCrafts(); 

    


   

  
    

