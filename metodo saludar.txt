class Empleado extends Persona {
    constructor(nombre: string, edad: number, public salario: number) {
        super(nombre, edad);
    }

    saludar() {
        console.log(`Empleado: Hola ${this.nombre}, tu edad es ${this.getEdad()} y tu salario es de ${this.salario}`);
    }
}
