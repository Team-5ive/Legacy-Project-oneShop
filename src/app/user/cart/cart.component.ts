import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../http.service"
import { VariablesService } from '../../variables.service'
import * as $ from 'jquery';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private _http: HttpService, private variable: VariablesService) { }

  men = {}

  ngOnInit() {


    console.log(this.variable.getItems())
    var toShow = this.variable.getItems()

    for (var i = 0; i < toShow.length; i++) {


      $("tbody").append(`<tr>
      <th scope="row">
          <img style="width:50%;height:50%;" src="${toShow[i]["image"]}" alt=""
              class="img-fluid z-depth-0">
      </th>
      <td>
          <h5 class="mt-3">
              <strong>${toShow[i]["title"]}</strong>
          </h5>
          <p class="text-muted"></p>
      </td>
      <td>${toShow[i]["color"]}</td>
      <td></td>
      <td>${toShow[i]["price"]}</td>
      <td>
          <input type="number" value="2" aria-label="Search" class="form-control"
              style="width: 100px">
      </td>
      <td class="font-weight-bold">
          <strong>${toShow[i]["price"]}</strong>
      </td>
      <td>
          <button type="button" class="btn btn-sm btn-primary" data-toggle="tooltip"
              data-placement="top" title="Remove item">X
          </button>
      </td>
  </tr>`)

    }

  }

  template(image) {
    return `<th scope="row"> <img src="${image}" alt=""  class="img-fluid z-depth-0"></th>`
  }




}

