class Persona {
    private edad: number;

    constructor(public nombre: string, edad: number) {
        this.edad = edad;
    }

    saludar() {
        console.log(`Persona: Tu nombre es ${this.nombre} y tienes ${this.edad} años`);
    }

    getEdad(): number {
        return this.edad;
    }
}
