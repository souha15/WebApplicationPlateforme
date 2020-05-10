import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  userActivity;
  userInactive: Subject<any> = new Subject();

  constructor(private router: Router) {
    this.setTimeout();
    this.userInactive.subscribe(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/user-register']);
    });
  }

  setTimeout() {
    this.userActivity = setTimeout(() => this.userInactive.next(undefined), 1500000);

  }

  @HostListener('window:mousemove') refreshUserState() {
    clearTimeout(this.userActivity);
    this.setTimeout();
  }
}
