import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { applicationReducer } from './application.reducers';

@NgModule({
    imports: [
        StoreModule.forFeature('application', applicationReducer),
    
    ]
})
export class ApplicationStoreModule {}
