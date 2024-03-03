import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscriptioin!: Subscription;
  title: string | undefined = 'List';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.subscriptioin = this.router.events.subscribe(() => {
      let path = this.activatedRoute.snapshot.firstChild?.routeConfig?.path;
      this.title = path !== '**' ? path : '404';
    });
  }
  goToFormPg() {
    this.router.navigate(['/form']);
  }
  goToListPg() {
    this.router.navigate(['/home']);
  }
  ngOnDestroy() {
    this.subscriptioin.unsubscribe();
  }
}
