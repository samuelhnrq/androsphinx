import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../entities/ghostcms';
import { map } from 'rxjs/operators';

@Injectable()
export class GhostService {
  readonly BUTTERCMS_ENDPOINT = 'https://samosaara.duckdns.org/ghost/api/v2';

  constructor(private http: HttpClient) {}

  latestPosts(): Observable<IPost[]> {
    return this.http
      .get(
        this.BUTTERCMS_ENDPOINT +
          '/content/posts/?key=25cdee44f8c74ed42b7cebe6be'
      )
      .pipe(map((x) => x as IPost[]));
  }
}
