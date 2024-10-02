class Proyecto {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }
}

class Empleado extends Persona {
    proyectos: Proyecto[] = [];

    asignarProyecto(proyecto: Proyecto) {
        this.proyectos.push(proyecto);
    }
}
