import { Component, OnInit } from '@angular/core';
import { FetchAPIService } from '../../service/fetch-api.service'

@Component({
  selector: 'app-citizen-id',
  templateUrl: './citizen-id.component.html',
  styleUrls: ['./citizen-id.component.css']
})
export class CitizenIdComponent implements OnInit {

  citizenId: string = ''
  data:any
  constructor(private service: FetchAPIService) { }

  ngOnInit(): void {
  }
  
  compute(): void {
    this.service.checkCitizenId(this.citizenId).subscribe(res => {
      this.data = JSON.stringify(res)
    })  
  }
}
