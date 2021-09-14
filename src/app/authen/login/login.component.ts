import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private util: UtilService
  ) { 
    this.util.showNav(false)
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  login() {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty()
        this.validateForm.controls[i].updateValueAndValidity()
      }
    }

    if (this.validateForm.get('username')!.value == 'admin' && this.validateForm.get('password')!.value == 'password') {
      this.router.navigate(['/registration'])
      this.util.showNav(true)
    }
  }

}
