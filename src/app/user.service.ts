import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class UserService {

  activateEmitter = new Subject<boolean>();
  deactivateEmitter = new Subject<boolean>();

}
