import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pace-calc',
  templateUrl: './pace-calc.component.html',
  styleUrls: ['./pace-calc.component.css']
})
export class PaceCalcComponent implements OnInit {
	@Input() vdot_results: any;
	pace = '00:00';
	distance = 0;
	h = 0;
	m = 0;
	s = 0;
	validData = false;
	buttonClicked = false;
	showVdot = false;
	vdot = 0;

  constructor() {
  }

  ngOnInit() {
  }

  // calculate race pace based on entered distance and finish time
  calculatePace() {
  	this.buttonClicked = true;
  	if ( // validate inputs
  		this.distance > 0 &&
  		!isNaN(this.distance) &&
  		!isNaN(this.h) &&
  		!isNaN(this.m) &&
  		!isNaN(this.s)
  	) {
  		this.validData = true;
      // calulate pace
  		let totalMinutes = Number(this.h)*60 + Number(this.m) + Number(this.s/60);
	  	let paceMin = Math.floor(totalMinutes / this.distance);
	  	let paceSec = Math.floor(((totalMinutes / this.distance)%1)*60);
	  	this.pace = paceMin + ':' + (paceSec >= 10 ? paceSec : '0'+paceSec);
      // if selected distance was one of the popular ones also show VDOT needed to run that fast
	  	if (this.distance == 5 || this.distance == 10 || this.distance == 21.097 || this.distance == 42.195) {
	  		this.showVdot = true;
	  		let totalSec = Number(this.h*3600) + Number(this.m*60) + Number(this.s); 
	  		this.vdot = this.findVdot(this.distance, totalSec); // find VDOT
	  	} else {
	  		this.showVdot = false;
	  	}
  	} else {
  		this.validData = false;
  	}
  }

  // find VDOT
  findVdot(distance, totalSec) {
  	let distMapping = { // mapping from select values to JSON data keys
  		'5': '5k',
  		'10': '10k',
  		'21.097': 'hm',
  		'42.195': 'm'
  	};
  	let dist = distMapping[distance];
    // find VDOT in JSON file's data
  	let lastVdot = 30; // default lowest value
  	for (let result of this.vdot_results) {
  		if (totalSec > result[dist]) {
  			return lastVdot;
  		} else {
  			lastVdot = result['vdot'];
  		}
  	}
  	return 70; // highest returned value (if are results too good to be found in the VDOT tables)
  }
}