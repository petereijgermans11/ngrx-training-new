import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { Mode } from '../../../app/interfaces/Mode';
import { Store } from '@ngrx/store';
import { setMode } from '../../store/application';

@Component({
  selector: 'app-addbutton',
  standalone: true,
  imports: [NgIf],
  templateUrl: './addbutton.component.html',
})
export class AddbuttonComponent {
  @Input() mode?: Mode;
  @Output() changeMode = new EventEmitter();
  Mode = Mode;


  constructor(private readonly store: Store) {}

  setToAddMode(mode: Mode) {
    this.store.dispatch(setMode({ mode }));
  }
}
