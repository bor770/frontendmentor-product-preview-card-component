import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'product-preview-card-component';

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.iconRegistry.addSvgIcon(
      `cart`,
      this.sanitizer.bypassSecurityTrustResourceUrl(
        `../assets/images/icon-cart.svg`
      )
    );
  }
}
