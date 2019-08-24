import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService, ContactQuestion } from '../core/api/api.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dis-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private ref: ChangeDetectorRef,
    private builder: FormBuilder,
    private api: ApiService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.contactForm = this.builder.group({
      department: ['', Validators.required],
      subject: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      question: ['', [Validators.required, Validators.maxLength(300)]]
    });
    this.ref.markForCheck();
  }

  sendQuestion() {
    const question: ContactQuestion = {
      Email: this.contactForm.value.email,
      Company: 'claes-machines',
      Department: this.contactForm.value.department,
      Question: `${this.contactForm.value.name} (${this.contactForm.value.phone})\n` + this.contactForm.value.question,
      Subject: this.contactForm.value.subject
    };

    this.api.sendContactQuestion(question).subscribe((resp: string) => {
      alert(this.translate.instant('questionSent'));
      this.ref.markForCheck();
    });
  }
}
