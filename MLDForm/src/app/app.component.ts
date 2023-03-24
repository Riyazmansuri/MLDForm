import { Component } from '@angular/core';
import { AppService } from './app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MLDForm';
  constructor(private appService: AppService) { }

  form: FormGroup = new FormGroup({});
  createFormGroup() {
    let group: any = {}
    this.result.forEach((element: any) => {
      group[element.table_column] = parseInt(element.is_mandatory) === 1 ? new FormControl('', Validators.required)
        : new FormControl('');

    });
    console.log(group);
    console.log(new FormGroup(group));
    return new FormGroup(group);
  }

  result: any = [];

  ngOnInit(): void {
    this.getDynamicFormFields();
  }

  onSubmit() {
    console.log(this.form.value);
  }

  getDynamicFormFields() {
    const data = { "client_id": "CO-40", "device": "1", "device_id": "browser", "app_version": "1", "user_id": "115", "admin_id": "115", "brand_id": "108", "is_panel": "1" };
    this.appService.postAPI(data).subscribe(
      (response: any) => {
        this.result = response.data;
        this.form = this.createFormGroup();
        console.log(response);
      });

  }
}
