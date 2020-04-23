import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyAppService } from '../my-app.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  angForm: FormGroup;
  constructor( private fb: FormBuilder, private ms: MyAppService, private router: Router ) { this.createForm(); }

  ngOnInit(): void {
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      bio: ['', Validators.required],
      age: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  addMember(name, bio, age) {
    this.ms.addMember(name, bio, age);
    this.router.navigate(['members']);
  }

  onSubmit() {
		//this.hasFormErrors = false;
		let request: any;
		const controls = this.angForm.controls;
		/** check form */
		if (this.angForm.invalid) {
			Object.keys(controls).forEach((controlName) =>
				controls[controlName].markAsTouched()
			);
			//this.hasFormErrors = true;
			return;
		}
    this.addMember(controls.name.value,controls.bio.value,controls.age.value)
    this.router.navigate(['members']);
	}
}