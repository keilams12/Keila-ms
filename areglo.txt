import { Empleado } from './Empleado';
import empleadosData from './empleados.json';

const empleados: Empleado[] = empleadosData.map(
    (data: any) => new Empleado(data.nombre, data.edad, data.salario)
);

const empleadosAJson = (): string => {
    return JSON.stringify(empleados);
};

console.log(empleadosAJson());
