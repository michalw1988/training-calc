import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-training-calc',
  templateUrl: './training-calc.component.html',
  styleUrls: ['./training-calc.component.css']
})
export class TrainingCalcComponent implements OnInit {
	@Input() vdot_results: any;
	@Input() vdot_training: any;
	distance = '0';
	h = 0;
	m = 0;
	s = 0;
	validData = false;
	buttonClicked = false;
	vdot: number;
	trainingPaces: any;

  constructor() {
  }

  ngOnInit() {
  }

  // find VDOT and display training paces based on entered data
  calculateTraining() {
  	this.buttonClicked = true;
  	if ( // validate inputs
  		this.distance !== '0' &&
  		!isNaN(this.h) &&
  		this.h >= 0 &&
  		!isNaN(this.m) &&
  		this.m >= 0 &&
  		!isNaN(this.s) &&
  		this.s >= 0 &&
  		(this.h > 0 || this.m > 0 || this.s > 0)
  	) {
  		this.validData = true;
  		let totalSec = Number(this.h*3600) + Number(this.m*60) + Number(this.s);
  		this.vdot = this.findVdot(this.distance, totalSec); // find VDOT
  		this.trainingPaces = this.getTrainingPaces(this.vdot); // get training paces based on found VDOT
  	} else {
  		this.validData = false;
  	}
  }

  // find VDOT in JSON file's data
  findVdot(distance: string, totalSec: number) {
  	let lastVdot = 30; // default lowest value
  	for(let result of this.vdot_results) {
  		if (totalSec > result[distance]) {
  			return lastVdot;
  		} else {
  			lastVdot = result['vdot'];
  		}
  	}
  	return 70; // highest returned value (if are results too good to be found in the VDOT tables)
  }

  // find training paces in JSON file's data
  getTrainingPaces(vdot: number) {
  	return this.vdot_training[vdot-30];
  }

  // convert time in seconds to time in mm:ss format
  convertToPace(totalSec) {
  	if (totalSec === 0) return 'nie powinieneś jeszcze wykonywać tego treningu'; // return if training is not recommended for found VDOT
  	let m:any = Math.floor(totalSec/60);
  	let s:any = totalSec%60;
  	if (s < 10) s = '0' + s;
  	return `${m}:${s} min/km`;
  }
}