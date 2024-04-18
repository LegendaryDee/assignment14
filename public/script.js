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

 
    showCrafts(); 

   

  
    

