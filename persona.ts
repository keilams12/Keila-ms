class Persona {
    constructor(public nombre: string, public edad: number) {}
    
    saludar() {
        console.log(`Persona: Tu nombre es ${this.nombre} y tienes ${this.edad} años`);
    }
}
