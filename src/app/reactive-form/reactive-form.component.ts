import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  constructor(){

  }

  //utilizando formGroup e formControl
  // profileForm = new FormGroup({
  //   name: new FormControl(''),
  //   cpf: new FormControl(''),
  //   address: new FormGroup(
  //     {
  //       street: new FormControl(''),
  //       city: new FormControl(''),
  //       state: new FormControl(''),
  //       zip: new FormControl('')
  //     }
  //   )
  // });

  formBuilder = inject(FormBuilder);

  //utilizando formBuilder
  profileForm = this.formBuilder.group({
    name: ['', Validators.required],
    cpf: ['', Validators.required],
    address: this.formBuilder.group({
      street:['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      zip: ['',Validators.required]
    }),
    opicionais: this.formBuilder.group({
      servico: ['']
    }),
    nicknames: this.formBuilder.array([this.formBuilder.control('')])
  });

  get apelidos(){
    return this.profileForm.get('nicknames') as FormArray
  }

  atualizarDados(){
    this.profileForm.patchValue({
      name: 'Rafael',
      cpf: '12345678901',
      address: {
        street: '34',
        city: 'Brasilia',
        state: 'DF',
        zip: '93827467'
      }
    });
  }

  adicionarApelido(){
    this.apelidos.push(this.formBuilder.control(''));
  }

  submitForm(){
    console.log(this.profileForm.value);
  }
}
