class Departamento {
    empleados: Empleado[] = [];

    agregarEmpleado(empleado: Empleado) {
        this.empleados.push(empleado);
    }

    eliminarEmpleado(nombre: string) {
        this.empleados = this.empleados.filter(empleado => empleado.nombre !== nombre);
    }

    listarEmpleados() {
        return this.empleados.map(empleado => empleado.nombre);
    }
}
