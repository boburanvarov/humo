import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Router} from "@angular/router";
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  isCollapsed = false;
  rotateActive = false;
  errorCode: any;
  errorText = '';

  @ViewChild('errorSwal')
  public readonly errorSwal!: SwalComponent;

  @ViewChild('saveSwal')
  public readonly saveSwal!: SwalComponent;


  constructor(
    private apiService: ApiService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  errorSwalFunc() {
    // this.router.navigate([])
  }

  saveSwalFunc() {
    // this.router.navigate([])
  }


  updateState() {
    this.rotateActive = true;
    console.log('ok')
    this.apiService.updateStates().subscribe(
      (res) => {
        console.log(res, 'res')
        if (res) {
          this.saveSwal.fire();
          this.rotateActive = false;
        } else {

          this.errorSwal.fire();
          this.rotateActive = false;
        }
      },
      (error) => {
        if (error.status === 404 || error.status === 500 || error.status === 400) {
          this.errorCode = error.status;
          this.errorText = error.error.error;
          this.errorSwal.fire();
          this.rotateActive = false;

        } else {
          this.saveSwal.fire();
          this.rotateActive = false;
          this.errorCode = error.status;
          this.errorText = error.error.text;
          console.log(error);
        }

      },
    )
  }

}
