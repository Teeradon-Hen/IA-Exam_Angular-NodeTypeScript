import { Component, OnInit } from '@angular/core';
import { FetchAPIService } from '../../service/fetch-api.service'

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  height: number = 0
  base: number = 0
  area?: number

  constructor(private service: FetchAPIService) { }

  ngOnInit(): void { }

  compute(): void {
    this.service.getArea(this.base, this.height).subscribe(res => {
      var data: any = res
      this.area = data['area']

    })
  }
}