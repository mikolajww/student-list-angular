import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[];

  constructor(private studentService:StudentService) {
  }

  addStudent(name:HTMLInputElement, surname:HTMLInputElement, indexNr:HTMLInputElement):boolean{
    if(name.value === "" || surname.value === "" || indexNr.value === "" ) {
      return false;
    }
    this.studentService.addStudent(new Student(name.value, surname.value, parseInt(indexNr.value)));
    return false;
  }

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

  getService() {
    return this.studentService;
  }

}
