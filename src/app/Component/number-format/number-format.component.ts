import { Component, OnInit } from '@angular/core';

@Component({
     selector: 'app-number-format',
     templateUrl: './number-format.component.html',
     styleUrls: ['./number-format.component.css']
})
export class NumberFormatComponent implements OnInit {

     number: number = 0;
     data?: string
     text?: string[]
     constructor() { }

     ngOnInit(): void {
     }

     show(): void {
          this.data = ""
          for (var i = 1; i <= this.number; i++) {
               for (var j = 1; j <= this.number - i; j++) {
                    this.data += " "
               }
               this.data += String(i)

               this.data += "*".repeat(2 * (i - 1))

               this.data += String(i)
               for (j = 1; j <= this.number - i; j++) {
                    this.data += " "
               }
               this.data += ";"
          }
          if (this.number === 1)
               this.data += String(1).repeat(2)
          for (i = this.number - 1; i > 0; i--) {

               for (j = 1; j <= this.number - i; j++) {
                    this.data += " "
               }

               this.data += String(i)

               this.data += "*".repeat(2 * (i - 1))

               this.data += String(i)

               for (j = 1; j <= this.number - i; j++) {
                    this.data += " "
               }
               this.data += ";"
          }
          this.text = this.data.split(';')
          console.log(this.data.replace(/[';']/g, "\n"))
     }

}