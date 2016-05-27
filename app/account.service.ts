import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import {Account} from "./account";

@Injectable()
export class AccountService{
  constructor (private http: Http) {}

  private accountUrl = 'app/account';

  getAccount (): Observable<Account> {
    return this.http.get(this.accountUrl)
      .delay(3000)
      .map(this.extractData);
  }

  private extractData(res: Response) {
      let body = res.json();
      return body.data || { };
  }

}
