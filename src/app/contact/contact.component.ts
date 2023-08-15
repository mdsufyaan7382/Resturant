import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
  formData = {
    name: '',
    email: '',
    message: '',
    mobile:''
  };

  submitForm() {
    // Handle form submission logic here, e.g., sending data to a server
    console.log(this.formData);

}

  }


