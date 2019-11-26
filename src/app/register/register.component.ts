import { Component, OnInit } from '@angular/core'
import { AuthService } from '../core/auth.service'
import { Router, Params } from '@angular/router'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Location } from '@angular/common'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  validateForm: FormGroup
  errorMessage: String = ''
  successMessage: String = ''

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty()
      this.validateForm.controls[i].updateValueAndValidity()
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() =>
      this.validateForm.controls.checkPassword.updateValueAndValidity()
    )
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true }
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true }
    }
    return {}
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private location: Location
  ) {
    this.createFrom()
  }
  createFrom() {
    this.validateForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  logout() {
    this.authService.doLogout().then(
      res => {
        console.log(res)
        this.router.navigate(['/login'])
      },
      error => {
        console.log('Logout error', error)
      }
    )
  }

  tryRegister(value) {
    this.authService.doRegister(value).then(
      res => {
        this.errorMessage = ''
        this.successMessage = 'Your account has been created'
        this.logout()
      },
      err => {
        console.log(err)
        this.errorMessage = err.message
        this.successMessage = ''
      }
    )
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [null, [Validators.required]],
      phoneNumberPrefix: ['+86'],
      phoneNumber: [null, [Validators.required]],
      website: [null, [Validators.required]],
      captcha: [null, [Validators.required]],
      agree: [false]
    })
  }
}
