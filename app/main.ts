import { provide }    from '@angular/core';
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService,
  SEED_DATA }  from 'angular2-in-memory-web-api';

import {bootstrap}    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import {AppComponent} from "./app.component";
import {AccountData} from "./account-data";

bootstrap(AppComponent,[
  HTTP_PROVIDERS,
    provide(XHRBackend, { useClass: InMemoryBackendService }),
    provide(SEED_DATA,  { useClass: AccountData })               
  ]);
