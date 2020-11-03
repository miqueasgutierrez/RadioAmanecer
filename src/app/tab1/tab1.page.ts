import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController } from '@ionic/angular';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

	url: string;
	stream: any;
	promise: any;

	constructor() {
		this.url = "http://68.235.35.243:9027/;stream.mp3";
		this.stream = new Audio(this.url);
	}

	play() {
		this.stream.play();
		this.promise = new Promise((resolve, reject) => {
			this.stream.addEventListener('playing', () => {
				resolve(true);
			});

			this.stream.addEventListener('error', () => {
				reject(false);
			});
		});
		return this.promise;
	};

	pause() {
		this.stream.pause();
	};



}
