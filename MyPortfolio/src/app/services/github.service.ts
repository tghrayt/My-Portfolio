import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Repo } from '../models/repo';

@Injectable({
  providedIn: 'root'
})
export class GithubService {


  private urlApi :string = environment.baseUrl;
  constructor(private http: HttpClient) { }


  public getRepoInformation(): Observable<Repo[]> {
   
    return this.http.get<Repo[]>(this.urlApi)
    .pipe(
      map((response: Repo[]) => {
        if(response){
          return response;
        }  })
    );
    
  }
}
