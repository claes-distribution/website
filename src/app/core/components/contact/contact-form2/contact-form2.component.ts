import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ApiService, ContactQuestion } from 'src/app/core/api/api.service';

@Component({
  selector: 'dis-contact-form2',
  templateUrl: './contact-form2.component.html',
  styleUrls: ['./contact-form2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactForm2Component implements OnInit {
  @Input() type?: string;
  @Input() title?: string;

  @Output() send: EventEmitter<void> = new EventEmitter<void>();

  requestOfferForm: FormGroup;
  contactAccountingForm: FormGroup;
  contactItForm: FormGroup;

  contactReasons: string[] = [
    'requestOffer',
    'contactAccounting',
    'contactIt'
  ];
  contactReason: string;

  file: { name: string; content: string };

  constructor(
    private ref: ChangeDetectorRef,
    private fb: FormBuilder,
    private translate: TranslateService,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    if (this.type === 'predefined') {
      this.contactReason = 'requestOffer';
      this.requestOfferForm = this.fb.group({
        name: ['', [Validators.required]],
        subject: [this.title, [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required]],
        zipcode: ['', [Validators.required, Validators.pattern(/^[0-9]{4}$/)]],
        question: ['', [Validators.required]]
      });
    }
  }

  reasonChanged($event: any) {
    const newReason: string = $event.value;

    this.requestOfferForm = undefined;
    this.contactAccountingForm = undefined;
    this.contactItForm = undefined;

    switch (newReason) {
      case 'requestOffer':
        this.requestOfferForm = this.fb.group({
          name: ['', [Validators.required]],
          subject: [this.translate.instant('components.contact.contact-form.contactReasons.requestOffer'), [Validators.required]],
          email: ['', [Validators.required, Validators.email]],
          phone: ['', [Validators.required, Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)]],
          zipcode: ['', [Validators.required, Validators.pattern(/^[0-9]{4}$/)]],
          question: ['', [Validators.required]]
        });
        break;

      case 'contactAccounting':
        this.contactAccountingForm = this.fb.group({
          name: ['', [Validators.required]],
          subject: [this.translate.instant('components.contact.contact-form.contactReasons.contactAccounting'), [Validators.required]],
          email: ['', [Validators.required, Validators.email]],
          phone: ['', [Validators.required, Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)]],
          question: ['', [Validators.required]]
        });
        break;

      case 'contactIt':
        this.contactItForm = this.fb.group({
          name: ['', [Validators.required]],
          subject: [this.translate.instant('components.contact.contact-form.contactReasons.contactIt'), [Validators.required]],
          email: ['', [Validators.required, Validators.email]],
          phone: ['', [Validators.required, Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)]],
          question: ['', [Validators.required]]
        });
        break;

      default:
        break;
    }
    this.ref.markForCheck();
  }

  sendFormValues(values: any) {
    let question: ContactQuestion;
    switch (this.contactReason) {
      case 'requestOffer':
        question = {
          Email: values.email,
          Company: 'claes-distribution',
          Department: 'info',
          Question: `${values.name} ~${values.email}~ postcode: ${values.zipcode} (${values.phone})<br>` + values.question,
          Subject: values.subject
        };
        break;

      case 'contactAccounting':
        question = {
          Email: values.email,
          Company: 'claes-distribution',
          Department: 'boekhouding',
          Question: `${values.name} ~${values.email}~ (${values.phone})<br>` + values.question,
          Subject: values.subject
        };
        break;

      case 'contactIt':
        question = {
          Email: values.email,
          Company: 'claes-distribution',
          Department: 'it',
          Question: `${values.name} ~${values.email}~ (${values.phone})<br>` + values.question,
          Subject: values.subject
        };
        break;

      default:
        alert('Beep boop bop Error!');
        return;
    }

    this.api.sendContactQuestion(question).subscribe((resp: string) => {
      if (resp && resp === 'OK') {
        alert(this.translate.instant('components.contact.contact-form.sendSuccess'));
        this.send.emit();
      }
      this.ref.markForCheck();
    });
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        // this.srcResult = e.target.result;
        const buffer: ArrayBuffer = e.target.result;
        this.file = {
          name: inputNode.files.item(0).name,
          content: this._arrayBufferToBase64(buffer)
        };
      };

      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

  _arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return Base64.encode(binary);
  }

  get predefined(): boolean {
    return this.type === 'predefined';
  }
}
