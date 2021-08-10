const overview = document.getElementById("overview");
const structure = document.getElementById("structure");
const surface = document.getElementById("surface");

const overview_main = document.querySelector(".overview_main");
const structure_main = document.querySelector(".structure_main");
const surface_main = document.querySelector(".surface_main");
const planet_in = document.querySelector(".planet_in");
const planet_out = document.querySelector(".planet_out");

overview.addEventListener("click", change);
structure.addEventListener("click", change);
surface.addEventListener("click", change);

function change(e) {
  if (e.target.value === "01 overview") {
    console.log("overview");
    overview.style.backgroundColor = "#419ebb";
    structure.style.backgroundColor = "transparent";
    surface.style.backgroundColor = "transparent";
    overview_main.style.display = "block";
    structure_main.style.display = "none";
    surface_main.style.display = "none";
    planet_in.style.display = "none";
    planet_out.style.display = "block";
  }
  if (e.target.value === "02 internal Structure") {
    console.log(structure_main);
    overview.style.backgroundColor = "transparent";
    structure.style.backgroundColor = "#419ebb";
    surface.style.backgroundColor = "transparent";
    overview_main.style.display = "none";
    structure_main.style.display = "block";
    surface_main.style.display = "none";
    planet_in.style.display = "block";
    planet_out.style.display = "none";
  }
  if (e.target.value === "03 surface geology") {
    console.log("surface");
    overview.style.backgroundColor = "transparent";
    structure.style.backgroundColor = "transparent";
    surface.style.backgroundColor = "#419ebb";
    overview_main.style.display = "none";
    structure_main.style.display = "none";
    surface_main.style.display = "block";
    planet_in.style.display = "block";
    planet_out.style.display = "none";
  }
}
