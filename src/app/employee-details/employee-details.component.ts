import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../user';

@Component({
  selector: 'dm-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }

  // showPage1(page: string) {
  //   this.router.navigate(['/employees-list'], { relativeTo: this.route });
   
  // }
  showPage2(page: string) {
    this.router.navigate(['/create-employee'], { relativeTo: this.route });

  }

}


