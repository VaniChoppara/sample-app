import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentcardComponent } from './studentcard/studentcard.component';
import { Student } from './studentcard/student';
import { ProductcountComponent } from"./productcount/productcount.component";
import { ProductdetailsComponent} from './productdetails/productdetails.component';
import { CclogoDirective } from './cclogo.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentcardComponent, ProductdetailsComponent, ProductcountComponent, CclogoDirective, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



  student:Student=new Student;
  studentArray:Student[]=[];
    title = 'Sample App';

    cardNumber:string="";

    constructor(){    
      this.studentArray=[
        {
          id:1,
          studentName:"sam",
          studentAge:22,
          studentPhone:91929291,
          studentAddress:[
            59,
           "Telok Blangha Heights",
          
          ],
          studentBranch:2
    
        }, {
          id:2,
          studentName:"Ram",
          studentAge:22,
          studentPhone:91929291,
          studentAddress:[
            59,
           "Telok Blangha Heights",
          
          ],
          studentBranch:3
        },
          {
          id:3,
          studentName:"Tony",
          studentAge:22,
          studentPhone:91929291,
          studentAddress:[
            59,
           "Telok Blangha Heights",
         
          ],
          studentBranch:7
          }
        ]
    }
}
