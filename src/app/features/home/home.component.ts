import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { NavComponent } from "../../shared/nav/nav.component";
import {  Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NavComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  words = ['Bitcrack', 'Confort', 'Security', 'Escalability', 'Confidence'];
  currentWord = '';
  currentWordIndex = 0;
  currentCharIndex = 0;
  isDeleting = false;
  typingSpeed = 150;
  deletingSpeed = 100;
  pauseTime = 2000;
  private timeoutId: any;

  constructor(
    private router : Router
  ){}

  ngOnInit() {
    this.startTyping();
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  startTyping() {
    const word = this.words[this.currentWordIndex];
    
    if (this.isDeleting) {
      this.currentWord = word.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
    } else {
      this.currentWord = word.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
    }

    let timeout = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting && this.currentCharIndex === word.length) {
      timeout = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
    }

    this.timeoutId = setTimeout(() => this.startTyping(), timeout);
  }

  openServices() {
    this.router.navigate(['/services']);
  }
}
