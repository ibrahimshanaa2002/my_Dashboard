import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private selectedOptionSubject: ReplaySubject<string> = new ReplaySubject<string>(1);
  public selectedOption$: Observable<string> = this.selectedOptionSubject.asObservable();

  setSelectedOption(option: string) {
    this.selectedOptionSubject.next(option);
  }
}