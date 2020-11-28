import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AtmHistoryService } from 'src/services/atm-history/atm-history.service';
import { AtmStateService } from 'src/services/atm-state/atm-state.service';
import { TransactionHistoryType } from 'src/enum/transaction-history-type.enum';

@Component({
    selector: 'app-withdraw',
    templateUrl: './withdraw.component.html',
    styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {

    public withdrawlAmount: number = 0;
    public withdrawForm: FormGroup;
    public withdrawlSuccessFull: Boolean = null

    constructor(
        private atmHistoryService: AtmHistoryService,
        private atmStateService: AtmStateService
    ) { }

    ngOnInit(): void {
        this.withdrawForm = new FormGroup({
            withdrawlAmount: new FormControl([Validators.min(1), Validators.required])
        });
    }

    public processWithdrawl(): void {
        this.withdrawlAmount = this.withdrawForm.controls['withdrawlAmount'].value;
        this.withdrawlSuccessFull = this.atmStateService.processWithdrawl(this.withdrawlAmount)
        this.logHistory();
        this.withdrawForm.controls['withdrawlAmount'].setValue(null);
    }

    private logHistory(): void {
        this.atmHistoryService.addHistory({
            type: TransactionHistoryType[TransactionHistoryType.withdrawl],
            message: 'Attempt to Withdraw of ' + this.withdrawlAmount + ((this.withdrawlSuccessFull) ? ' was a success' : ' failed, insufficient funds'),
            date: new Date()
        });
    }
}
