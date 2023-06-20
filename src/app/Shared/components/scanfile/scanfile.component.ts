import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-scanfile',
  templateUrl: './scanfile.component.html',
  styleUrls: ['./scanfile.component.scss']
})
export class ScanfileComponent implements OnInit {

  uploadedFiles: any[] = [];

  errorText = '';

  @ViewChild('errorSwal')
  public readonly errorSwal!: SwalComponent;

  @ViewChild('saveSwal')
  public readonly saveSwal!: SwalComponent;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  uploadForm = this.fb.group({
    profile: ['', Validators.required]
  });

  ngOnInit(): void {

  }

  get profile() {
    return this.uploadForm.get('profile') as FormControl;
  }

  onBasicUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

  }

  onFileSelect(event: any) {


    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      // @ts-ignore
      this.uploadForm.get('profile').setValue(file);
    }
  }

  errorSwalFunc() {
    // this.router.navigate([])
  }

  saveSwalFunc() {
    location.reload()
  }


  onSubmit() {
    if (!this.uploadForm.valid) {
      this.uploadForm.markAllAsTouched();
      return;
    }
    const formData = new FormData();
    // @ts-ignore
    formData.append('file', this.uploadForm.get('profile').value);

    this.apiService.scanFile(formData).subscribe(
      (res) => {

        this.saveSwal.fire();
        // @ts-ignore
        this.errorText = res;
      },
      (error) => {
        if (error.status === 404 || error.status === 500 || error.status === 400) {
          this.errorSwal.fire();
          // @ts-ignore
          this.errorText = res;
        }
      }
    );
  }

}
