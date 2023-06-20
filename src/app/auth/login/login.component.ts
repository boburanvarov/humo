import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';
import {Utils} from "../../Shared/Utils/utils";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  invalidLogin: Boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  loginForm = this.fb.group({
    username: [],
    password: [],
  })

  ngOnInit(): void {
    Utils.clearSessionStorage()
  }

  signin(){

    const login = {
      username: this.loginForm.value.username,
      password : this.loginForm.value.password
    }

    // @ts-ignore
    if(login.username == 'admin' && login.password == '12'){
        Utils.setToSessionStorage('login', login)
      this.router.navigate(['/main'])

    }else{
      this.invalidLogin = true;
      this.router.navigate(['/'])
    }

  }

}
