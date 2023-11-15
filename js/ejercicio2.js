let ciudades = ["Nueva York, Estados Unidos", "Barcelona, España", "Tokio, Japón", "Londres, Reino Unido", "Roma, Italia", "Pekín, China", "Río de Janeiro, Brasil", "Ámsterdam, Países Bajos", "Sídney, Australia", "El Cairo, Egipto"];

console.log(ciudades);


console.log(ciudades.length);
document.write(`<p>el primer elemento del array es ${ciudades[0]}</p>`);
document.write(`<p>el tercer elemento del array es ${ciudades[2]}</p>`);
document.write(`<p>el último elemento del array es ${ciudades[9]}</p>`);

ciudades.push("Paris")

document.write("<h2>Lista de ciudades</h2>");
document.write("<ul>")
for(let listadeCiudades = 0; listadeCiudades < ciudades.length; listadeCiudades++ ){
document.write(`<li>${ciudades[listadeCiudades]}</li>`)
}
document.write("</ul>")

