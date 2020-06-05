import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createdeal',
  templateUrl: './createdeal.component.html',
  styleUrls: ['./createdeal.component.css']
})
export class CreatedealComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
            title: ['', Validators.required],
            theme: ['', Validators.required],
            image: ['', Validators.required],
            liendeal: ['', Validators.required],
            description: ['', Validators.required]
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted= true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }
}
