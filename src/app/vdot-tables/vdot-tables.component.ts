import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vdot-tables',
  templateUrl: './vdot-tables.component.html',
  styleUrls: ['./vdot-tables.component.css']
})
export class VdotTablesComponent implements OnInit {
	@Input() vdot_results: any;
	@Input() vdot_training: any;

  constructor() {
  }

  ngOnInit() {
  }

  // convert time in seconds to time in hh:mm:ss format
  convertToHMS(totalSec) {
  	if (totalSec === 0) return '-';
  	let h:any = Math.floor(totalSec/3600);
  	let m:any = Math.floor((totalSec%3600)/60);
  	let s:any = totalSec%60;
  	if (h === 0) h = '';
  	if (h > 0 && m < 10) m = '0' + m;
  	if (h === 0 && m === 0) m = '';
  	if (s < 10) s = '0' + s;
  	return ((h > 0) ? (h + ':') : '') + ((m > 0 || h > 0) ? (m + ':') : '') + s;
  }
}