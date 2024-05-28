import { Component, ElementRef, Input, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
// import Validation from './Validation';
// import { ValidationErrors } from '@angular/forms';
// import { form}


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  // @ViewChild('name') ElementRef!: ElementRef;
  // @Input()item!:Input;
  // in!:Input;
  // constructor(){};
  // user!:ElementRef;
  // ngAfterContentInit() {
  //   if (this) {
  //     console.log(this); 
  //   }
  // }
  // onsubmit():{

  // }

  form: FormGroup = new FormGroup({
    // fullname: new FormControl(''),
    // username: new FormControl(''),
  });
  submitted = false;
  fullname:string='';
  username:any;
  email:any;
  password: any;
  confirmPassword: any;
  acceptTerms:boolean=false;
  


  

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname:new FormControl( ['', Validators.required]),
        username: new FormControl([
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ]),
        email: new FormControl(['', [Validators.required, Validators.email]]),
        password: new FormControl([
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ]),
        confirmPassword: new FormControl(['', Validators.required]),
        acceptTerms: new FormControl([false, Validators.requiredTrue])
      },
      // {
      //   validators: [Validation.match('password', 'confirmPassword')]
      // }
    );
  }
  



}
