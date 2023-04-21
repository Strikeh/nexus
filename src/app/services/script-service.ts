import { async } from '@angular/core/testing';
import { Renderer2, Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ScriptService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  /**
   * Append the JS tag to the Document Body.
   * @param renderer The Angular Renderer
   * @param src The path to the script
   * @returns the script element
   */
  public loadJsScript(
    renderer: Renderer2,
    src: string,
    text?: string,
    element?: HTMLElement
  ): HTMLScriptElement {
    const script = renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.txt = text;
    script.async = 'async';
    renderer.appendChild(element ?? this.document.body, script);
    return script;
  }
}
