import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SortingParameter, SortingType, StudentService} from "../../../service/student.service";
declare var jQuery:any;

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit {

  @Output() onStudentSorted: EventEmitter<string>;
  constructor(private studentService:StudentService) {
    this.onStudentSorted = new EventEmitter<string>();
  }

  ngOnInit() {
    jQuery('.ui.dropdown').dropdown();
  }

  search(query:HTMLInputElement) {
    this.studentService.setFilter(query.value);
  }

  reset() {
    this.studentService.resetFilter();
  }

  setSorting(param:HTMLInputElement, type:HTMLInputElement) {
    this.studentService.sortingParam = (parseInt(param.value) == 0) ? (SortingParameter.SURNAME)
                                     : (parseInt(param.value) == 1) ? (SortingParameter.NAME) : (SortingParameter.INDEX);
    this.studentService.sortingType = (parseInt(type.value) == 0) ? (SortingType.DESC) : (SortingType.ASC);
    this.onStudentSorted.emit("sorted");
  }
}
