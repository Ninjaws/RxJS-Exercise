import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  tabs: string[] = ['Members', 'Messages', 'Posts'];

  tabContent: string;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  selectTab(id: any) {
    this.tabContent = this.tabs[id.itemIndex];
    console.log(id.itemData);
    const routerString = '/' + id.itemData.toLowerCase();
    this.router.navigate([routerString]);
  }

}
