import {Component} from "@angular/core";
import {AccountService} from "./account.service";
import {Account} from "./account";

@Component({
  selector: 'a11y-ng-if-section',
  templateUrl: './app/a11y-ng-if-section.component.html'
})
export class A11yNgIfSectionComponent{

  account: Account;

  constructor(private accountService: AccountService){}

  ngOnInit():void {
    this.accountService.getAccount().subscribe((item:Account) => {
      this.account = item;
    });
  }

}
