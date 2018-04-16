import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({

	selector: 'empleados',
	templateUrl: './empleados.component.html'

	})
export class Empleados{
	public titulo = 'Componente Empleado:';
	public empleado:Empleado;
	public trabajadores:Array<Empleado>;
	public trabajador_externo:boolean;
	public color:string;
	public color_seleccionado:string;

	constructor(){
		this.empleado = new Empleado('David', 45, "Programador", true);
		this.trabajadores = [
			new Empleado('Manolo', 45, 'Programador', false),
			new Empleado('pepe', 43, "Pr", true),
			new Empleado('pepa', 4, "peluquero", false),

		];

		this.trabajador_externo = false;
		this.color = 'red';
		this.color_seleccionado = '#CCC';
	}


	ngOnInit(){
		console.log(this.empleado); 
		console.log(this.trabajadores); 
	}

	cambiarExterno(valor:any){
		this.trabajador_externo = valor;
	}
}