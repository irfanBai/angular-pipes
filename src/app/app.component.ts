import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [StudentService]
})
export class AppComponent implements OnInit {
  title = 'angular-pipes';
  students!: Student[];
  totalMarks!: number;
  _filterText: string = '';
  filterStudent!: Student[];
  totalstudent= new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve(this.filterStudent.length)
    }, 2000);
  });

  get filterText() {
    return this._filterText;
  }
  set filterText(value: string) {
    this.filterText = value;
    this.filterStudent = this.filterStudentByGender(value);
  }
  constructor( private studentService: StudentService) {}

  ngOnInit() {
    this.students = this.studentService.students;
    this.totalMarks = this.studentService.totalMarks;
  }

  AddStudent() {
    // let studentCopy = Object.assign([], this.students)
    // this.students.push({name: 'Test', course: 'Test', mark: 520, DOB: new Date('1-4-1998'), gender: 'male'});
    // this.students = studentCopy;
    this.students.push({name: 'Test', course: 'Test', mark: 520, DOB: new Date('1-4-1998'), gender: 'male'});
    this.filterStudent = this.filterStudentByGender(this._filterText);
  }

  changeStudent() {
    // let studentCopy = Object.assign([], this.students)
    // this.students[0].gender = 'Female';
    // this.students = studentCopy;
    this.students[0].gender = 'Female';
    this.filterStudent = this.filterStudentByGender(this._filterText);

  }

  onMouseMove() {}

  filterStudentByGender(filterTerm: string) {
    if(this.students.length === 0 || this.filterText === ''){
      return this.students;
   } else{
       return this.students.filter((student) => {
           return student.gender.toLowerCase() === filterTerm.toLowerCase()
  })
}
  }
}
