import { Component, OnInit } from '@angular/core';
import { AtmStateService } from 'src/services/atm-state/atm-state.service';

@Component({
    selector: 'app-admin-landing',
    templateUrl: './admin-landing.component.html',
    styleUrls: ['./admin-landing.component.scss']
})
export class AdminLandingComponent implements OnInit {

    constructor(
        public atmStateService: AtmStateService
    ) { }

    ngOnInit(): void {

    }
}
