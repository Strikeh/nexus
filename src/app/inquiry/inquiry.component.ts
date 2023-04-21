import { Component } from '@angular/core';
import './../../assets/js/smtp.js';

declare let Email: any;

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.scss'],
})
export class InquiryComponent {
  sendEmail() {
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'impressions@nexus.io',
      Password: '6AD1B69FE53C7C788AAC1B7B2289FA0C7757',
      To: 'impressions@nexus.io',
      From: 'impressions@nexus.io',
      Subject: 'this.model.subject',
      Body: `
      <i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>${'this.model.name'} <br /> <b>Email: </b>${'this.model.email'}<br /> <b>Subject: </b>${'this.model.subject'}<br /> <b>Message:</b> <br /> ${'this.model.message'} <br><br> <b>~End of Message.~</b> `,
    }).then((message) => {
      alert(message);
      // f.resetForm();
    });
  }
}
