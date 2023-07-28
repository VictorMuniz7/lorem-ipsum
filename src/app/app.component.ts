import { Component } from '@angular/core';
import { LoremIpsum } from "lorem-ipsum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lorem-ipsum';

  lorem = new LoremIpsum();

  text: string = ''
  paragraphs = 0
  copyText = 'Copy Lorem Ipsum'

  generateLoremIpsum(){

    if(this.paragraphs > 30){
      this.paragraphs = 30
    }
    if(this.paragraphs <= 0){
      this.paragraphs = 0
    }

    this.text = this.lorem.generateParagraphs(this.paragraphs);
  }

  copyLorem(){
    this.copyText = 'Copied!'
    navigator.clipboard.writeText(this.text)

    setTimeout(() => {
      this.copyText = 'Copy Lorem Ipsum'
    }, 5000)
  }

}
