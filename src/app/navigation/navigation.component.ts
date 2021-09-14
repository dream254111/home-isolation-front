import { Component, OnInit } from '@angular/core';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isDisplay = true

  constructor(private util: UtilService) {
    this.util.onURLChange.subscribe(data => this.isDisplay = data)
  }

  ngOnInit(): void {
  }

}
