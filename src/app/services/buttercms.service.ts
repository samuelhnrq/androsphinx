import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { IPost } from '../entities/buttercms';
import { map } from 'rxjs/operators';

@Injectable()
export class ButterCMSService {
  readonly BUTTERCMS_ENDPOINT = 'https://api.buttercms.com/v2/';

  constructor(private http: HttpClient) { }

  latestPosts(): Observable<IPost[]> {
    return this.http.get(
      this.BUTTERCMS_ENDPOINT + '/posts?auth_token='
    ).pipe(
      map(x => x as IPost[])
    );
  }
}
