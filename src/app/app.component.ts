import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICity } from './interfaces/city.interface';
import { select, Store } from '@ngrx/store';
import { setMode, getMode, selectMode } from './store/application';
import { Mode } from './interfaces/Mode';
import cities from '../assets/cities.json';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    cities$: Observable<ICity[]>;
    isLoading$: Observable<boolean>;
    mode$: Observable<Mode>;
    Mode = Mode;
    citiesList = cities;

    constructor(private readonly store: Store) {}

    ngOnInit(): void {
        this.initDispatch();
        this.initSubscriptions();
    }

    private initDispatch(): void {
        this.store.dispatch(getMode());
    }

    private initSubscriptions(): void {
        this.mode$ = this.store.pipe(select(selectMode)); 
    }

    activeCity = this.citiesList.cities[0];

    setNewCity(city: any) {
      this.activeCity = city;
    }

    public modeHandler(mode: Mode) {
        this.store.dispatch(setMode({ mode }));
      }
}

