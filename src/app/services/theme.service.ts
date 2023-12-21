import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  setTheme(themeName: string): void {
    const existingLinkElement = document.querySelector(
      'link[rel="stylesheet"]:is([href*="style-nexus.css"], [href*="style-nexus-black.css"])'
    ) as HTMLLinkElement;

    if (existingLinkElement) {
      // Remove the existing stylesheet from the DOM
      this.renderer.removeChild(document.head, existingLinkElement);
    }

    const newLinkElement = this.renderer.createElement('link');
    this.renderer.setAttribute(newLinkElement, 'rel', 'stylesheet');

    const newThemeHref = `./assets/css/${themeName}.css`;

    this.renderer.setAttribute(newLinkElement, 'href', newThemeHref);
    this.renderer.appendChild(document.head, newLinkElement);

    // Store the selected theme in local storage
    localStorage.setItem('selectedTheme', themeName);
  }
}

// import { WorkspaceProject } from '@angular-devkit/core/src/experimental/workspace';
// import { Workspace } from '@angular-devkit/core/src/experimental/workspace';
// import { Injectable } from '@angular/core';
// import { AngularWorkspace } from '@angular/cli/models/architect-command';

// @Injectable({
//   providedIn: 'root',
// })
// export class ThemeService {
//   constructor(private angularWorkspace: AngularWorkspace) {}

//   setTheme(themeName: string): void {
//     const workspace = this.angularWorkspace.getRawWorkspace();
//     const projectName = 'nexus'; // Replace with your actual project name
//     const project: WorkspaceProject = workspace.projects[projectName];

//     // Modify the styles array based on the selected theme
//     project.architect.build.options.styles = [
//       'src/styles.scss',
//       'src/assets/css/theme.css',
//       'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
//       'src/assets/css/vendor.bundle.css',
//       `src/assets/css/${themeName}.css`,
//     ];
//   }
// }
