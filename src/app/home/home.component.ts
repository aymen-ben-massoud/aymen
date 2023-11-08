import { Component } from '@angular/core';
import { AppearanceAnimation, ConfirmBoxEvokeService, ConfirmBoxInitializer, DialogLayoutDisplay, DisappearanceAnimation } from '@costlydeveloper/ngx-awesome-popup';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  textToType: string = "HEY, I'M AYMEN BEN MASSOUD";
  typedText: string = '';
constructor(private confirmBoxEvokeService: ConfirmBoxEvokeService){}
  ngOnInit() {
    this.startTyping(0);
  }

  startTyping(index: number) {
    if (index < this.textToType.length) {
      this.typedText += this.textToType.charAt(index);
      index++;
      setTimeout(() => this.startTyping(index), 100); // Adjust the delay as needed
    }
    
  }
  
  openConfirmBox() {
   
    const subscription = this.confirmBoxEvokeService
    .success('','aymen.ben.massoud.contact@gmail.com', 'ok')
    .subscribe((resp) => console.log('resp', resp));

  setTimeout(() => {
  
    subscription.unsubscribe();
  }, 2000);
}
 
}
