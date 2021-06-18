import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule } from '@angular/router';
import { HelloWorldService } from './services/hello-world.service';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild( 
      [
        {
          path: "contact", 
          component: ContactComponent
        }
      ]
    )
  ], 
  exports: [], 
  providers: [HelloWorldService]
})
export class ContactModule { }
