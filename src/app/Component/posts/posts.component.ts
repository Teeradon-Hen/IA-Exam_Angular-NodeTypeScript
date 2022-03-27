import { Component, OnInit } from '@angular/core';
import { FetchAPIService } from '../../service/fetch-api.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private service: FetchAPIService) { }

  data : any

  ngOnInit(): void {

    this.service.getPosts().subscribe(res => {
      this.data = res
    })
  }
}