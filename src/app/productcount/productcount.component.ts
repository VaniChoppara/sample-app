import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productcount',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './productcount.component.html',
  styleUrl: './productcount.component.css'
})
export class ProductcountComponent {
  
  @Input()
  all:number=20;

  @Input()
  mobile:number=10;

  @Input()
  tv:number=10;

  @Input()
  laptop:number=10;

  @Input()
  ac:number=10;

  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string>=new EventEmitter<string>();

 
  selectedRadioButtonValue:string='All';


  onRadioButtonChange(){
    //The following Event Emitter will emit the event during radio change
    //When ever radio button is clicked it will emit the event to the details component
   // console.log("You Clicked the Radio Button with Option ==> " + this.selectedRadioButtonValue);
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
  }

}
