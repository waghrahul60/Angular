import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'form-app';

  // public nameControl = new FormControl();
  // public nameControl = new FormControl('', Validators.required);
  public nameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern('[a-zAZ0-9]*'),
  ]);

  public readFormValue() {
    const uesrname = this.nameControl.value;
    console.log(uesrname);

    this.nameControl.setValue('');
  }
}
