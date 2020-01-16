import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {HttpService} from './../http.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  token: string;
  constructor(private router:Router, private _http: HttpService) { 
  }
  logout() {
    localStorage.clear()
    this.token = ''
  }
  getIt(t:string){
    this.token = t
    console.log(this.token)
  }
  ngOnInit() {
  }


}
