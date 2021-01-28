import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import * as crypto from 'crypto-js'

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(
    private http: HttpClient
  ) { }

  get(email?: string | null) {
    if (email) {
      const hash = crypto.SHA1(email)
      return this.http.get<IGetSubscriberResponse>(`${this.url}/${hash}`)
    } else {
      return this.http.get<IGetSubscriberResponse>(`${this.url}`)
    }
  }

  post(subscriber: ISubscriber) {
    return this.http.post<IPostSubscriberResponse>(`${this.url}`, subscriber)
  }

  update(email: string, subscriber: ISubscriber) {
    const hash = crypto.SHA1(email)
    return this.http.put(`${this.url}/${hash}`, subscriber)
  }

  get url(): string {
    return 'https://liva.groupclaes.be/distribution/subscribers'
  }
}

export interface IPostSubscriberResponse {
  result: boolean
  reason?: string | null
}

export interface IGetSubscribersResponse {
  subscribers: ISubscriber[]
}

export interface IGetSubscriberResponse {
  subscriber: ISubscriber
}

export interface ISubscriber {
  email: string
  createdOn: Date
  modifiedOn: Date
  personalName: string | null
  personalSurname: string | null
  personalCompany: string | null
  personalPhone: string | null
  optInOn: Date | null
  optInMethod: string
  optInTerms: string
  acceptedOptInTerms: boolean
  confirmationMailSent: boolean
  reminderMailSent: boolean
}
