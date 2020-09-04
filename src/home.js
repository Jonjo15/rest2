let homeDiv = document.createElement("div");
homeDiv.classList.add("homeDiv");
let homeImg = document.createElement("img");
homeImg.classList.add("homeImg");
let homePara = document.createElement("p");
homePara.textContent = "Baturini Ristorante, the best restaurant the world has ever seen";
homeImg.src = "https://www.057info.hr/images/vijesti/orginal/Portus_Beach_Club_(1)_1557908364.JPG";
homeDiv.appendChild(homeImg);
homeDiv.appendChild(homePara);

export {homeDiv} ;
