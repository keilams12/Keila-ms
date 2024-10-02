class Empresa {
    empleados: Empleado[] = [];

    agregarEmpleado(empleado: Empleado) {
        this.empleados.push(empleado);
    }

    eliminarEmpleado(nombre: string) {
        this.empleados = this.empleados.filter(empleado => empleado.nombre !== nombre);
    }

    calcularTotalSalarios(): number {
        return this.empleados.reduce((total, empleado) => total + empleado.salario, 0);
    }
}
