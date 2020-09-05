const menuDiv = document.createElement("div");
menuDiv.classList.add("menuDiv");

const drinksDiv = document.createElement("div");
drinksDiv.classList.add("drinksDiv");
const drinksH2 = document.createElement("h2");
drinksH2.textContent = "Drinks";
drinksDiv.style.backgroundImage = "url('https://i.dailymail.co.uk/1s/2019/09/20/14/18720314-0-image-a-24_1568985945964.jpg')";
drinksDiv.appendChild(drinksH2);


const mainDiv = document.createElement("div");
mainDiv.classList.add("mainDiv");
const mainH2 = document.createElement("h2");
mainH2.textContent = "Main";
mainDiv.style.backgroundImage = "url('https://image.dnevnik.hr/media/images/567x350/Jan2018/61454893.jpg')";
mainDiv.appendChild(mainH2);

const sidesDiv = document.createElement("div");
sidesDiv.classList.add("sidesDiv");
const sidesH2 = document.createElement("h2");
sidesH2.textContent = "Sides";
sidesDiv.style.backgroundImage = "url('https://image.dnevnik.hr/media/images/1600x1067/Aug2019/61742840.jpg')";
sidesDiv.appendChild(sidesH2);

menuDiv.appendChild(mainDiv);
menuDiv.appendChild(sidesDiv);
menuDiv.appendChild(drinksDiv);

export {menuDiv}