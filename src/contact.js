const contactDiv = document.createElement("div");
contactDiv.classList.add("contactDiv");

const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
const p4 = document.createElement("p");

p1.textContent = "Find us at:";
p2.textContent = "Smac 88, 52424 Benbovac, Zabarska, Broatia";
p3.textContent = "Email: ivanb2sdds2g@gmail.com";
p4.textContent = "Telephone: (555) 555-555";

contactDiv.appendChild(p1);
contactDiv.appendChild(p2);
contactDiv.appendChild(p3);
contactDiv.appendChild(p4);

export { contactDiv }