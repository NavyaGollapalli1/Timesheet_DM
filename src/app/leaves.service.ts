
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILeave } from './leave';

@Injectable({
  providedIn: 'root'
})
export class LeavesService {
  private leaves: BehaviorSubject<ILeave[]> = new BehaviorSubject<ILeave[]>([]);

  getLeaves(): Observable<ILeave[]> {
    return this.leaves.asObservable();
  }

  requestLeave(newLeave: ILeave) {
    const currentLeaves = this.leaves.value;
    currentLeaves.push(newLeave);
    this.leaves.next(currentLeaves);
  }

  // Optional: Implement cancelLeave method
}
