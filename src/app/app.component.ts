import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'obs';

  show = false;

  constructor(private userServie: UserService){}

  ngOnInit(): void {
    this.userServie.activateEmitter.subscribe(
      isShow => {
        this.show = isShow;
      }
    );

    this.userServie.deactivateEmitter.subscribe(
      nShow => {
        this.show = nShow;
      }
    );
  }
}
