import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  vdot_results: any;
	vdot_training: any;

  constructor(private http:Http) {
  	// load VDOT data from JSON files
    this.http.get('../assets/vdot_results.json').subscribe(res => this.vdot_results = res.json());
    this.http.get('../assets/vdot_training.json').subscribe(res => this.vdot_training = res.json());
  }
}
