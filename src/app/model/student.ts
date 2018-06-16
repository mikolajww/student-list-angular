import {Grade} from './grade';

export class Student {

  id:number;
  grades: Grade[];

  constructor(public name: string, public surname: string, public indexNr: number, public thumbnailUrl?:string) {
    this.grades = [];
  }

}
