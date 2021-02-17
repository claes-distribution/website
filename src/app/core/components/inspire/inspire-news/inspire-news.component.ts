import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { BlogpostsService, IBlogPreview } from 'src/app/core/data/blogposts.service'

@Component({
  selector: 'dis-inspire-news',
  templateUrl: './inspire-news.component.html',
  styleUrls: ['./inspire-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InspireNewsComponent implements OnInit {
  newsList: IBlogPreview[]
  loading = true
  loadingAdditional = false
  additionalAvailable = true
  currentBlog: IBlogPreview
  currentPage = 1

  constructor(
    private translate: TranslateService,
    private blogpostService: BlogpostsService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadNews()

    this.translate.onLangChange.subscribe(() => {
      this.ref.markForCheck()
    })
  }

  loadNews() {
    const cachedNews = this.retrieveFromCache('be.claes-distribution.www.news')

    if (cachedNews) {
      this.newsList = JSON.parse(cachedNews).map(e => this.fixPostContent(e))
      this.additionalAvailable = !(this.newsList.length < 6)
      this.loading = false
      this.ref.markForCheck()
      return
    }

    this.blogpostService.get(6, 0).subscribe(result => {
      window.sessionStorage.setItem('be.claes-distribution.www.news', JSON.stringify(result.blogposts))

      this.newsList = result.blogposts.map(e => this.fixPostContent(e))
      this.additionalAvailable = !(this.newsList.length < 6)
      this.loading = false
      this.ref.markForCheck()
    })
  }

  loadMore() {
    this.currentPage++
    this.loadingAdditional = true
    this.ref.markForCheck()


    const cachedNewsPage = this.retrieveFromCache('be.claes-distribution.www.news-' + (this.currentPage - 1))
    if (cachedNewsPage) {
      const additionalNews = JSON.parse(cachedNewsPage).map(e => this.fixPostContent(e))
      this.loadingAdditional = false
      this.newsList.push(...additionalNews)
      this.additionalAvailable = !(additionalNews.length < 3) || this.newsList.length >= this.maxItems

      this.ref.markForCheck()
      return
    }

    this.blogpostService.get(3, this.currentPage).subscribe(result => {
      window.sessionStorage.setItem('be.claes-distribution.www.news-' + (this.currentPage - 1), JSON.stringify(result.blogposts))
      this.loadingAdditional = false
      this.newsList.push(...result.blogposts.map(e => this.fixPostContent(e)))
      this.additionalAvailable = !(result.blogposts.length < 3) || this.newsList.length >= this.maxItems

      this.ref.markForCheck()
    })
  }

  private fixPostContent(blog) {
    blog.image = blog.image.replace('{lang}', this.culture)

    if (!blog.ctaText.nl) {
      blog.ctaText.nl = 'Lees meer'
    }
    if (!blog.ctaText.fr) {
      blog.ctaText.fr = 'Lire plus'
    }

    return blog
  }

  private retrieveFromCache(cacheKey: string) {
    const cachedItem = window.sessionStorage.getItem(cacheKey)
    return cachedItem ?? null
  }

  newsHref(url: string): string {
    return url.replace('{lang}', this.culture)
  }

  open(blog: IBlogPreview, $event: any) {
    this.currentBlog = blog
    $event.preventDefault()
    this.ref.markForCheck()
    document.body.style.overflow = 'hidden'
  }

  close() {
    this.currentBlog = undefined
    this.ref.markForCheck()
    document.body.style.overflow = 'initial'
  }

  get maxItems(): number {
    return this.currentPage * 3
  }

  get culture(): string {
    return this.translate.currentLang
  }
}
