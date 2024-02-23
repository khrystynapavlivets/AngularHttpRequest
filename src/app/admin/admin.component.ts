import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, HttpClientModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',

})
export class AdminComponent {
  constructor() { }

  ngOnInit(): void {
  }
}
