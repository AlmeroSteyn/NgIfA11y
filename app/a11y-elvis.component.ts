import {Component} from "@angular/core";
import {Account} from "./account";
import {AccountService} from "./account.service";

@Component({
  selector: 'a11y-elvis',
  templateUrl: './app/a11y-elvis.component.html'
})
export class A11yElvisComponent{

  account: Account;

  constructor(private accountService: AccountService){}

  ngOnInit():void {
    this.accountService.getAccount().subscribe((item:Account) => {
      this.account = item;
    });
  }
  
}
