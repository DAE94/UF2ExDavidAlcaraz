import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Departament} from "../departament";

@Component({
  selector: 'app-aplicacio',
  standalone: true,
  imports: [],
  templateUrl: './aplicacio.component.html',
  styleUrl: './aplicacio.component.css'
})
export class AplicacioComponent {

constructor(private router: RouterOutlet, private http: HttpClient) {
  // this.exercici2();
  // this.exercici1('otaku@institutvidreres.cat');
}

  exercici1(email: string){
    const params = new HttpParams()
    .set('email', email);

    this.http.get<any>('http://localhost:3020/modifCorreuAlcaraz', {params}).subscribe((x)=>{
      console.log(x);
    })
  }
  exercici2(){
    this.http.get('http://localhost:3020/llistaAssigAlcaraz').subscribe(data => {
      console.log(data);
    });
  }
  departament = new Departament(2, "fisicaQuantica","POLITECNICA 2", "972418288","2500");
  exercici3(departament: Departament){
    this.http.post<any>('http://localhost:3020/modifDeptAlcaraz', {departament}).subscribe((data)=>{
      console.log(data);
    })
  }

  exercici4(professor:string){
    this.http.get('http://localhost:3020/impartirAssigAlcaraz').subscribe(data => {})
  }
}
