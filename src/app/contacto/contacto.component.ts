import { Component } from '@angular/core';
//para pasar información por la url:
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'contacto',
	templateUrl:'./contacto.component.html'
	})

export class ContactoComponent{
	public titulo = "Página contacto";
	public parametro:any;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router
		){}

	ngOnInit(){
		this._route.params.forEach((params: Params) => {
			this.parametro = params['page'];
		});
	}

	redirigirDos(){
		this._router.navigate(['/pagina-principal']);
	}

	redirigir(){
		this._router.navigate(['/contacto', 'victorroblesweb.es']);
	}


}