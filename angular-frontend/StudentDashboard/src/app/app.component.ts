import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentDashboard';
  
  studentDetails: any = null;


  constructor(private studentService: StudentService) {
    this.getStudents();
  }

  
  
  register(registerForm: NgForm) { //to make use of register() in the app.component.html, we need to call the service
                //and to call the service, we need to inject service here(similar to call service here in spring)
    this.studentService.registerStudent(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getStudents();
      },
      (err) => {
        console.log(err);
      }
    ); 
  }


getStudents() {
  this.studentService.getStudents().subscribe(
    (resp) => {
      console.log(resp);
      this.studentDetails = resp;
    },
    (err) => {
      console.log(err);
    }
  );
}


deleteStudent(tempStudent: any) {
  this.studentService.deleteStudent(tempStudent.rollNumber).subscribe(
    (resp) => {
      console.log(resp);
      this.getStudents();
    },
    (err) => {
      console.log(err);
    }
  );
}





}
