import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileStateService {

  private numberCallFunctionSubject = new BehaviorSubject<number>(0);
  numberCallFunction$ = this.numberCallFunctionSubject.asObservable();

  incrementNumberCallFunction() {
    const currentValue = this.numberCallFunctionSubject.value;
    this.numberCallFunctionSubject.next(currentValue + 1);
  }

  decrementNumberCallFunction() {
    const currentValue = this.numberCallFunctionSubject.value;
    if (currentValue > 0) {
      this.numberCallFunctionSubject.next(currentValue - 1);
    }
  }

  getNumberCallFunctionValue(): number {
    return this.numberCallFunctionSubject.value;
  }
}
