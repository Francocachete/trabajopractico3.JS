const meses = ["enero, febrero, marzo, abril, mayo, junio, julio, agosto, sptiembre, octubre, noviembre, diciembre"];

document.write(`<p>el primer elemento del array es ${meses[0]}</p>`)
document.write("<h2>Lista de meses</h2>");
document.write("<ul>")
for(let listadeMeses = 0; listadeMeses < meses.length; listadeMeses++ ){
document.write(`<li>${meses[listadeMeses]}</li>`)
}
document.write("</ul>")