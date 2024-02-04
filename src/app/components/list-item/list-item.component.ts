import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgFor, NgForOf } from '@angular/common';
import { ICity } from '../../../app/interfaces/city.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [NgForOf, NgClass],
  templateUrl: './list-item.component.html',
})
export class ListItemComponent {
  @Input() city!: ICity;
  @Input() activeCity?: ICity;
  @Output() setNewActivecity = new EventEmitter<ICity>();

  constructor(private readonly store: Store) {}

  setActiveCity(city: ICity) {
    this.activeCity = city;
    this.setNewActivecity.emit(city);
  }

}
