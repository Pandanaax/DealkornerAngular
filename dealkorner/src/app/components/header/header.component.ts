import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   
      this.registerForm = this.formBuilder.group({
              email: ['', Validators.required],
              password: ['', Validators.required],
              
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

