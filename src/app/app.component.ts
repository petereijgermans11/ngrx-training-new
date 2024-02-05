import { Component, OnInit, signal } from '@angular/core';
import { Mode } from './interfaces/Mode';
import cities from '../assets/cities.json';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    modeEnum = Mode;
    citiesList = cities;
  
    mode = signal(Mode.ShowCase);
    activeCity = this.citiesList.cities[0];
  
    setNewCity(city: any) {
      this.activeCity = city;
    }
  
    addModeHandler(mode: any) {
      this.mode.set(mode);
    }
  
    cancelFormHandler() {
      this.mode.set(Mode.ShowCase);
    }
  }

