import { Student } from "./student";
export class StudentService {
    students :Student[] = [
        {name: 'Anil', course: 'MBA', mark: 520, DOB: new Date('1-4-1998'), gender: 'male'},
        {name: 'steve', course: 'BTech', mark: 430, DOB: new Date('12-1-1998'), gender: 'male'},
        {name: 'Andrew', course: 'M.sc', mark: 320, DOB: new Date('3-9-1998'), gender: 'male'},
        {name: 'Malik', course: 'Bca', mark: 320, DOB: new Date('1-7-1998'), gender: 'male'},
        {name: 'Arman', course: 'MBA', mark: 520, DOB: new Date('9-6-1998'), gender: 'Female'},
    ];

    totalMarks : number =  600;
}