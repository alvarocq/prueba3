import { Component } from "@angular/core";
import { Coche } from './coche';
import {PeticionesService} from '../services/peticiones.service';

@Component({
	selector: 'coches',
	templateUrl: './coches.component.html',
	providers: [PeticionesService]

	})

export class CochesComponent{
	public coche: Coche;
	public coches:Array<Coche>;
	public articulos:any;

	constructor(
		private _peticionesService: PeticionesService,

		){
		this.coche = new Coche("","","");
		this.coches = [
			new Coche("Seat","120","Blanco"),
			new Coche("Renault","100","Negro"),

		 	];
	}

	ngOnInit(){
		console.log(this._peticionesService.getPrueba());

		this._peticionesService.getArticulos().subscribe(
			res => {


					this.articulos = res;
					console.log(this.articulos);
					if(!this.articulos){console.log("Error en el servidor");}
			
					}
				);
		} 


	onSubmit(){
		console.log(this.coche);
		this.coches.push(this.coche);
		this.coche = new Coche("","","");
	}

}