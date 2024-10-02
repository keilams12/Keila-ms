enum EstadoCivil {
    Soltero,
    Casado,
    Divorciado
}

class Persona {
    estadoCivil: EstadoCivil;

    constructor(public nombre: string, public edad: number, public direccion: Direccion, estadoCivil: EstadoCivil) {
        this.estadoCivil = estadoCivil;
    }

    saludar() {
        console.log(`Hola ${this.nombre}, tu estado civil es ${EstadoCivil[this.estadoCivil]}`);
    }
}
