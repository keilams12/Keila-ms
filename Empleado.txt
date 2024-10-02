class Empleado extends Persona {
    constructor(nombre: string, edad: number, public salario: number) {
        super(nombre, edad);
    }

    trabajar() {
        console.log(`${this.nombre} está trabajando 8 horas al día.`);
    }
}
