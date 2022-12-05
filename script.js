class alumno {


    constructor(codigo, nombre, nota1, nota2, nota3, nota4) {

        this.codigo = codigo;
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }


    get promedio() {
        let promedio =Math.round((this.nota1 * 0.15) + (this.nota2 * 0.2) + (this.nota3 * 0.25) + (this.nota4 * 0.4))
        return "Mi promedio es :" + promedio
    }
    get condicion() {
        let promedio =Math.round((this.nota1 * 0.15) + (this.nota2 * 0.2) + (this.nota3 * 0.25) + (this.nota4 * 0.4))
        if (promedio >= 12) {
            return "Aprobado"}
        else{
            return "Desaprobado"

        }
    }
    get obsequio(){
        let promedio =Math.round((this.nota1 * 0.15) + (this.nota2 * 0.2) + (this.nota3 * 0.25) + (this.nota4 * 0.4))

        if (promedio > 17){

            return "Te ganaste una Mochila"}
        else {
            return "Esfuerzate Más"
        }

    }
       
}
let apolo = new alumno("001", "Apolo", 15, 16, 17, 15)
console.log(apolo.promedio)
console.log(apolo.condicion)
console.log(apolo.obsequio)
