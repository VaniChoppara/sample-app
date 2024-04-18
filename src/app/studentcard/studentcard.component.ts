import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-studentcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studentcard.component.html',
  styleUrl: './studentcard.component.css'
})
export class StudentcardComponent {
 students:any[]=[];
 //@Input("name")studentName:String="";
 //@Input("student") studentObj:Student=new Student;
 @Input("studentArray") studentList:Student[]=[];
  //1. ECE
  //2. CSC
  //3. EEE
  //6. Non Computers

  constructor(){
   
  }

 ngOnInit(){
  this.students=this.studentList;
 }
}
