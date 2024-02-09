import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Mode } from '../../../app/interfaces/Mode';
import { Store } from '@ngrx/store';
import { setMode } from '../../store/application';

@Component({
  selector: 'app-add-city-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-city-form.component.html',
})
export class AddCityFormComponent implements OnInit {
  addCityForm: FormGroup = {} as FormGroup;
  errors: any = {};
  @Output() cancelForm = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit() {
    this.addCityForm = this.formBuilder.group({
      cityname: ['', [Validators.required, Validators.minLength(2)]],
      image: [''],
      description: [''],
    });
  }

  onSubmit() {
    const cityName = this.addCityForm?.get('cityname')?.value;
    const imageValue = this.addCityForm?.get('image')?.value;
    const descriptionValue = this.addCityForm?.get('description')?.value;
   
    if (!cityName) {
        return;
    }
    console.log(this.addCityForm.value);
  }

  cancel() {
    this.store.dispatch(setMode({mode :Mode.ShowCase}));
  }
}
