import { animate, state, style, transition, trigger } from '@angular/animations';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',  
  imports: [
    NgIf
  ],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(300)),
    ])
  ],
  standalone: true

})
export class SidenavComponent {

  selectedButton: string = ''; // Initialize the selected button
  dropdown: string = '';
  constructor(private route: Router) { }

  selectButton(buttonName: string): void {
    if(this.selectedButton == buttonName) this.selectedButton = '';
     else this.selectedButton = buttonName; 
     if (buttonName=="dashboard") {
      this.route.navigateByUrl("/dashboard");
     }
  }

  navigate(cc: string){
    this.route.navigateByUrl("/"+cc);
  }


}
