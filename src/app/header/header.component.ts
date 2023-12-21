import { ThemeService } from './../services/theme.service';
import { Component } from '@angular/core';

@Component({
  selector: 'nexus-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLightTheme: boolean = true;

  constructor(private themeService: ThemeService) {
    // Initialize based on the current theme
    // this.isLightTheme = this.themeService.isLightTheme();
    const storedTheme = localStorage.getItem('selectedTheme');

    if (storedTheme) {
      // Apply the stored theme
      this.themeService.setTheme(storedTheme);

      this.isLightTheme = storedTheme === 'style-nexus';
    }
  }

  toggleTheme(): void {
    this.isLightTheme = !this.isLightTheme;
    this.themeService.setTheme(
      this.isLightTheme ? 'style-nexus' : 'style-nexus-black'
    );
  }
}
