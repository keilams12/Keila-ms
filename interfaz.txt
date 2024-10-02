interface Direccion {
    calle: string;
    ciudad: string;
    pais: string;
}

class Persona {
    private edad: number;
    direccion: Direccion;

    constructor(public nombre: string, edad: number, direccion: Direccion) {
        this.edad = edad;
        this.direccion = direccion;
    }

    saludar() {
        console.log(`Persona: Tu nombre es ${this.nombre}, tienes ${this.edad} años y vives en ${this.direccion.ciudad}`);
    }
}
