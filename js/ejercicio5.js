function cadena(texto){
    if(texto === texto.toUpperCase()){
        return `<p>La cadena de ${texto}, esta en letras mayusculas</p>`
    }else if (texto === texto.toLowerCase()){
        return `<p>La cadena de ${texto}, esta en letras minusculas</p>`
    }else{
        return `<p>La cadena de ${texto}, esta en letras mayusculas y minusculas</p>`
    }
}

document.write(cadena("Afuera hace Calor"))