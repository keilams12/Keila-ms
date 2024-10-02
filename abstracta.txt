abstract class Vehiculo {
    abstract arrancar(): void;
}

class Coche extends Vehiculo {
    arrancar() {
        console.log('El coche está arrancando');
    }
}

class Moto extends Vehiculo {
    arrancar() {
        console.log('La moto está arrancando');
    }
}
