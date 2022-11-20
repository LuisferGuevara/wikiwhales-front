import { IWhale } from './../models/model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WhalesService {
  // private whales: IWhale[];

  constructor( private http: HttpClient) {}

  public getAllWhales(): Observable<any>{
    return this.http.get("https://wikiwhales-back.vercel.app/whales")
  }
  // getWhales(): IWhale[] {
  //   return this.whales;
  // }

  public getOneWhale(id:string): Observable<any>{
    return this.http.get(`https://wikiwhales-back.vercel.app/whales/${id}`)
  }
  public postWhale(newWhale:any){
    return this.http.post("https://wikiwhales-back.vercel.app/whales/create", newWhale)
  }
  public deleteWhale(id:string): Observable<any>{
    return this.http.delete(`https://wikiwhales-back.vercel.app/whales/delete/${id}`)
  }


}
