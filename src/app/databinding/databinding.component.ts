import { Component, OnInit } from '@angular/core';
import { PropertyBindingComponent } from './property-binding.component';
import { EventBindingComponent } from  './event-binding.component';


@Component({
  moduleId: module.id,
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],

})
export class DatabindingComponent {
   stringInterpolation = 'This is a string';


onClicked(value: string){
  alert(value);
}


}
