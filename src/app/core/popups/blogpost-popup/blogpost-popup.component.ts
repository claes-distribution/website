import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, HostListener, ChangeDetectorRef } from '@angular/core';
import { IBlogPreview } from '../../api/api.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dis-blogpost-popup',
  templateUrl: './blogpost-popup.component.html',
  styleUrls: ['./blogpost-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogpostPopupComponent implements OnInit {
  @Input() blog: IBlogPreview;
  @Output() closed = new EventEmitter<void>();
  @HostListener('click', ['$event.target']) onClick(btn) {
    this.close();
  }

  constructor(
    private ref: ChangeDetectorRef,
    private sanitize: DomSanitizer,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.ref.markForCheck();
  }

  get resourceUrl(): SafeResourceUrl {
    // sanitize url to news site for iframe url is missing actual title but hey you can't have all the nice things
    const title = this.blog.title[this.culture];
    return this.sanitize.bypassSecurityTrustResourceUrl(
      `https://news.groupclaes.be/${encodeURIComponent(title.split(' ').join('-'))}/${this.blog.id}?cc=${this.culture}`
    );
  }

  close(): void {
    this.closed.emit();
  }

  get culture(): string {
    return this.translate.currentLang;
  }
}
