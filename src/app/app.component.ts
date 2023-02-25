import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'drum-kit';
  public audio = new Audio()
  constructor(){

  }
ngOnInit(){
this.func()
}

func(){
  let numberOfButtons = document.querySelectorAll(".btn").length;
  for( let i = 0;i < numberOfButtons;i++){
   let btn = document.querySelectorAll(".btn")[i]
   btn.addEventListener(
      'click',()=>{
        let bttonInnerHtml = btn.innerHTML
        console.log(bttonInnerHtml)
      this.makeSound(bttonInnerHtml)
      }
    )
  }
  document.addEventListener('keypress',(e : any)=>{
    console.log(e.key)
    this.makeSound(e.key)
  })
}

makeSound(key : any){
  switch (key) {
    case "w":
      // this.audio.pause()
      this.audio = new Audio("assets/drum1.mp3")
      this.audio.play()
      break;

      case "a":
        // this.audio.pause()
      this.audio = new Audio("assets/drum8.mp3")
      this.audio.play()
      break;

      case "s":
        // this.audio.pause()
      this.audio = new Audio("assets/drum3.mp3")
      this.audio.play()
      break;

      case "d":
        // this.audio.pause()
      this.audio = new Audio("assets/drum4.mp3")
      this.audio.play()
      break;

      case "j":
        // this.audio.pause()
      this.audio = new Audio("assets/drum5.mp3")
      this.audio.play()
      break;

      case "k":
        // this.audio.pause()
      this.audio = new Audio("assets/drum6.mp3")
      this.audio.play()
      break;

      case "l":
        // this.audio.pause()
      this.audio = new Audio("assets/drum7.mp3")
      this.audio.play()
      break;
    default:
      break;
  }
}

}
