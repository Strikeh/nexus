import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ScriptService } from '../services/script-service';

const path =
  '//rf.revolvermaps.com/0/0/8.js?i=5f2xlo2m52c&m=0c&c=ff0000&cr1=ffffff&f=calibri&l=0&bv=60&cw=0ca4fb&cb=012235';

@Component({
  selector: 'app-visitors',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetricsComponent implements AfterViewInit {
  @ViewChild('globe') globeElement: ElementRef<HTMLInputElement>;

  constructor(
    private renderer: Renderer2,
    private scriptService: ScriptService
  ) {}

  ngAfterViewInit() {
    this.executeVisitorsScript();
  }

  private executeVisitorsScript() {
    const scriptElement = this.scriptService.loadJsScript(
      this.renderer,
      path,
      '',
      this.globeElement.nativeElement
    );
    scriptElement.onload = () => {
      setTimeout(() => {
        const divs = document.querySelectorAll("[style*='max-width: 341px']");
        if (divs.length) {
          (<HTMLElement>divs[0]).style.maxWidth = '100%';
        }
      }, 500);
    };
    // scriptElement.onerror = () => {
    //   console.log('Could not load the Crypthopper script!');
    // };
  }
}
