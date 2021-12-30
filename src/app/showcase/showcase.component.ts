import { Component, OnInit } from '@angular/core';
import { Sites } from './static-sites.model';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
  apps = Sites

  constructor() { }

  ngOnInit(): void {
  }

}
