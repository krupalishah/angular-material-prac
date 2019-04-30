import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());  constructor() { }
  minDateFrom = new Date();
  // dateTo = new Date();
  // minDateTo = (this.minDateTo.setDate(this.dateTo) + 1);
//   dateTo = this.minDateFrom.getDate() + 1;
// minDateTo = this.minDateTo.setDate(this.dateTo);
myDateToFilter = (d: Date):boolean => {
  const day = d.getDay();
  return day !== 0 && day !== 6;
}
   ngOnInit() {
  }
}
