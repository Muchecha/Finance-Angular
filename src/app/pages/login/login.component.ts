import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  [x: string]: any;
  emailFormControl: FormControl<any>;
  matcher: ErrorStateMatcher;

  constructor(public formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    public authService: AuthService) {

  }

  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group
      (
        {
          email: ['', [Validators.required, Validators.email]],
          senha: ['', [Validators.required]]
        }
      )
  }


  get dadosForm() {
    return this, this.loginForm.controls;
  }


  loginUser() {
    this.loginService.login(this.dadosForm["email"].value, this.dadosForm["senha"].value).subscribe(
      token => {
        this.authService.setToken(token);
        this.authService.setEmailUser(this.dadosForm["email"].value);
        this.authService.UsuarioAutenticado(true);
        this.router.navigate(['/dashboard']);
      },
      err => {
        alert('Ocorreu um erro');
      }

    )

  }

  hide = true;

}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


export class InputErrorStateMatcherExample {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
}
