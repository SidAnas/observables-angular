import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  intervalSubs: Subscription;

  constructor() { }

  ngOnInit(): void {
    // this.intervalSubs = interval(1000).subscribe(
    //   data => {
    //     console.log(data);
    //   }
    // );
    const myIntervalObs = Observable.create(
      observer => {
        let count = 0;
        setInterval(() => {
          observer.next(count);
          if (count === 2) {
            observer.complete();
          }
          if (count > 3){
            observer.error(new Error('Count is greater than 3'));
          }
          count++;
        }, 1000);
      }
    );

    this.intervalSubs = myIntervalObs.pipe(filter( data => {
      return data > 0;
    }), map( (data: number) => {
      return 'Round: ' + (data + 1);
    })).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log(error);
        alert(error);
      }, () => {
        console.log('Completed!');
      }
    );
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

}
