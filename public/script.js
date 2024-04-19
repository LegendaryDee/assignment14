

document.addEventListener("DOMContentLoaded", () => {
    const craftsList = document.getElementById("crafts-list");

    // Fetch 
    fetch("./api/crafts")
        .then(response => response.json())
        .then(crafts => {
            crafts.forEach(craft => {
                const craftCard = document.createElement("div");
                craftCard.classList.add("craft-card");

                const img = document.createElement("img");
                img.src = craft.img;
                img.alt = craft.name;
                

                img.addEventListener("click", () => {
                    const modal = document.getElementById("myModal");
                    const modalContent = document.querySelector(".modal-content");
                    const modalTitle = document.getElementById("modal-title");
                    const modalDescription = document.getElementById("modal-description");
                    const modalSupplies = document.getElementById("modal-supplies");
                    const modalImage = document.getElementById("modal-image");

                    modalTitle.textContent = craft.name;
                    modalDescription.textContent = craft.description;

                    modalSupplies.innerHTML = "";

                    craft.supplies.forEach(supply => {
                        const listItem = document.createElement("li");
                        listItem.textContent = supply;
                        modalSupplies.appendChild(listItem);
                    });

                    modalImage.src = `http://localhost:3000/api/crafts${craft.image}`;

                    modal.style.display = "block";
                });

                craftCard.appendChild(img);

                craftsList.appendChild(craftCard);
            });
        })
        .catch(error => console.error("Error fetching crafts data:", error));

    const span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
    };
    window.onclick = function(event) {
        const modal = document.getElementById("myModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});


















    //     if(craftsJSON= "")
    // {
       
    //     craftsDiv.innerHTML = "No data to display"
    //     return;

    // }
    // const craftsContainer = document.createElement("section");
    // craftsContainer.classList.add("crafts-container");
    // craftsDiv.append(craftsContainer);
    
    // let craftSection;

    // for(let i=0; i<4; i++)
    // {
    //     craftSection = document.createElement("section");
    //     craftSection.classList.add('craft-section$(1)'); //Might need changing
    //     craftsContainer.append(craftSection);
    // }

    // const craftSection00 = document.querySelector(".craft-section00");
    // craftSection00.classList.add("craftSection00");

    // const craftSection01 = document.querySelector(".craft-section01");
    // craftSection01.classList.add("craftSection1");

    // const craftSection02 = document.querySelector(".craft-section02");
    // craftSection02.classList.add("craftSection02");

    // const craftSection03 = document.querySelector(".craft-section03");
    // craftSection03.classList.add("craftSection03");
        
    //     craftSection.append(craftImg);
        
    //     craftImg.onclick = (event) =>
    //     {
    //         openModal1("expand-img-section");
    //         openModal2("expand-text-section");

    //         const expandInfoSection = document.getElementById("expand-text-section");
    //         expandInfoSection.innerHTML = "";

    //         const expandNameh3 = document.createElement("h2");
    //         expandNameh3.classList.add("inline");
    //         expandNameh3.innerHTML = crafts.name;
    //         expandInfoSection.append(expandNameh3);

    //         const editPencilLink = document.createElement("e");
    //         editPencilLink.innerHTML = ""; //Don't know what to put in here
    //         editPencilLink.id = "edit-pencil-img";

    //         const deletePencilLink = document.createElement("d");
    //         deletePencilLink.innerHTML = "x";
    //         expandInfoSection.append(deletePencilLink);
    //         deletePencilLink.id = "delete-x-link";

    //         const expandDescription = document.createElement("p");
    //         expandDescription.innerHTML = craft.description; //Come back to this


    //         const expandSuppliesTitle = document.createElement("h3")
    //         expandSuppliesTitle.innerHTML = "Supplies:"
    //         expandInfoSection.append(expandSuppliesTitle);

    //         const expandSupplies = document.createElement("ul");

    //         for(let i=0; i<craft.supplies.length; i++)
    //         {
    //             const expandSuppliesP = document.createElement("li");
    //             expandSuppliesP.append(craft.supplies[i]);
    //             expandSupplies.append(expandSuppliesP);
    //         };


        

    //     expandInfoSection.append(expandSupplies);

    //     const expandImg = document.getElementById("expand-img-section");
    //     expandImg.classList.add("expand-craft-image");
    //     expandImg.src= "images/" + craft.img;
    //     expandImg.append(expandImg);

    //     editPencilLink.onclick = showAddCraft;

    //     deletePencilLink.onclick = (event) =>
    //     {
    //         event,preventDefault();
    //         console.log("deletePencilLink clicking")

    //         deleteCraftPrompt(craftsJSON[i]);
    //     }

    //     populateCraftEditForm(craftsJSON[i]);
    // }
 
    // showCrafts(); 

    


   

  
    

