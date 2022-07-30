import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Utils} from "../Shared/Utils/utils";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // if(!Utils.getSessionStorage('login')){
    //   this.router.navigate(['/'])
    // }
  }

}
