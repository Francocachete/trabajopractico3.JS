const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
console.log(meses);


document.write("<h2>Lista de meses</h2>");
document.write("<ul>")
for(let listadeMeses = 0; listadeMeses < meses.length; listadeMeses++ ){
document.write(`<li>${meses[listadeMeses]}</li>`)
}
document.write("</ul>")