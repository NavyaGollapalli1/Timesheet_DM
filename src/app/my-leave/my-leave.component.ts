
import { Component, OnInit } from '@angular/core';
import { LeavesService } from '../leaves.service';
import { ILeave } from '../leave';

@Component({
  selector: 'dm-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.css']
})
export class MyLeaveComponent implements OnInit {


  leaves: ILeave[]=[];

  constructor(private leavesService: LeavesService) {}

  ngOnInit() {
    this.leavesService.getLeaves().subscribe(leaves => {
      this.leaves = leaves;
    });
  }

  onSubmit(formValue: { type: any; startDate: any; endDate: any; reason: any; }) {
    const newLeave: ILeave = {
      leaveType: formValue.type,
      startDate: formValue.startDate,
      endDate: formValue.endDate,
      reason: formValue.reason
    };
    this.leavesService.requestLeave(newLeave);
  }
}
