export class Departament {
  dept_id: number;
  dept_nom: string;
  dept_ubicacio: string;
  dept_telefon: string;
  dept_prof_dni: string;

  constructor(dept_id:number, dept_nom:string, dept_ubicacio:string, dept_telefon:string, dept_prof_dni:string) {
    this.dept_id = dept_id;
    this.dept_nom = dept_nom;
    this.dept_ubicacio = dept_ubicacio;
    this.dept_telefon = dept_telefon;
    this.dept_prof_dni = dept_prof_dni;

}
}