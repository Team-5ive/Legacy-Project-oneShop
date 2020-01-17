import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpService } from './../http.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  token: string;
  constructor(private router: Router, private _http: HttpService) {
  }
  logout() {
    localStorage.clear()
    this.token = ''
    this._http.Token = ''
  }


  ngOnInit() {
    var that  = this
    
    var inter = setInterval(function () {
      // console.log(that, this)
      that.token = that._http.Token
      // console.log(that.token)
      if (that.token.length > 0) {
        clearInterval(inter)
        that.ngOnInit()
      }
    }, 3000);
    localStorage.clear()
  }

}
