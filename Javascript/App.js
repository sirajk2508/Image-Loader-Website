import { imageData } from "./constants.js";

const container = document.getElementById("imageContainer");

const loadDoctorData = () => {
  imageData.map((item) => {
    let card = document.createElement("div");
    card.classList.add("doctor-card");

    let img = new Image();
    img.src = item.image;
    img.classList.add("doctor-image");

    let name = document.createElement("p");
    name.textContent = item.name;
    name.classList.add("doctor-name");

    let specialty = document.createElement("p");
    specialty.textContent = item.specialty;
    specialty.classList.add("doctor-specialty");

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(specialty);

    container.appendChild(card);
  });
};

loadDoctorData();
