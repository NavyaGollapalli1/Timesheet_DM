import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../user';

@Component({
  selector: 'dm-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
pageTitle: string = 'Employee Detail';
user: IUser | undefined;
constructor(private route:ActivatedRoute) {
}



ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.pageTitle += `: ${id}`;
}
}
