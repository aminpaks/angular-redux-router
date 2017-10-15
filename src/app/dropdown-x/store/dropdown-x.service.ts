import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { DropdownXItem } from '../dropdown-x.types';

export interface GithubRepository {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;

  // I was lazy to type all :)
  [misc: string]: any;
}

@Injectable()
export class DropdownXService {
  readonly endpoint = 'https://api.github.com/users/aminpaks';

  constructor(private http: Http) { }

  static transformToItem(repos: GithubRepository[]): DropdownXItem[] {
    return repos.map(repo => (<DropdownXItem>{
      title: repo.name,
      url: repo.html_url,
      value: repo.id.toString(),
    }));
  }
  getRepositories(): Observable<GithubRepository[]> {
    return this.http.get(this.endpoint + '/repos').map(response => response.json());
  }
}
