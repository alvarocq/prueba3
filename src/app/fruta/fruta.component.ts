import { Component } from '@angular/core';

@Component({

	selector: 'fruta',
	templateUrl: './fruta.component.html'

	})
export class FrutaComponent{
	public nombre_componente = 'Componente de fruta';
	public listado_frutas = 'Naranja, Manzana, Pera y Sandía';

	public nombre: string = 'David';
	public edad:number = 66;
	public mayorDeEdad:boolean = true;
	public trabajos:Array<any> =['Carpintero', 44, 'Fontanero']; 
	comodin:any = 23;

	constructor(){
		console.log(this.trabajos);
		this.edad = 77;

	}

	ngOnInit(){

		this.holaMundo(this.nombre);


				// Variables y alcance

		var uno = 8;
		var dos = 15;
			if(true){
				let uno = 7;
				var dos = 14;
				console.log("Dentro del if "+ uno + dos);
			}
		console.log("Fuera del if " + uno + dos);

		//let solo mantiene su valor dentro del if, fuera valdrá la de let

	}





	holaMundo(nombre:any){
		alert('Holaa chiqui '+ nombre);
	}
}