import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  obj = {
    name: "name",
    email: "email",
    password: "pasword",
    confirmedPassword: "confirmedPassword"
  };
  constructor(private http: HttpClient) {}

  //example of how to do a get request

  getUsers() {
    return this.http.get("http://localhost:8080/api/users");
    //now go to the home component
  }
  //sending a post request you need to specifiy the url and the data taken from the form
  // and add the headers to get no cors error
  register(data) {
    return this.http.post(
      `http://localhost:8080/api/user/register`,
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    // to console log the response
  }
  getProducts() {
    return this.http.get("http://localhost:8080/api/customer_products");
    //now go to the home component
  }
  getMenProduct(){
    return this.http.get("http://localhost:8080/api/customer_products/men")
  }
  getWomenProduct(){
    return this.http.get("http://localhost:8080/api/customer_products/women")
  }

}
