import {Component} from "@angular/core";
import {CORE_DIRECTIVES} from "@angular/common";
import {AccountService} from "./account.service";
import {Account} from "./account";

@Component({
  selector: 'a11y-ng-ig-page',
  templateUrl: './app/a11y-ng-if-page.component.html',
  directives: [CORE_DIRECTIVES]
})
export class A11yNgIfPageComponent{

  account: Account;
  isLoading: boolean = false;

  constructor(private accountService: AccountService){}

  ngOnInit():void {
    this.isLoading = true;
    this.accountService.getAccount().subscribe((item:Account) => {
      this.account = item;
      this.isLoading = false;
    });
  }

}
