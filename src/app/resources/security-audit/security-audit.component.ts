import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-security-audit',
  templateUrl: './security-audit.component.html',
  styleUrls: ['./security-audit.component.scss'],
})
export class SecurityAuditComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Security Audit' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content:
          'nexus, crypto, blockchain, web3, Security Audit, ISE Assesment, Evaluators, Independent Security',
      },
    ]);
    this.setTitle('Nexus - Security Audit');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
