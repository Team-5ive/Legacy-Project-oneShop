import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) { }
  //example of how to do a get request

  getUsers() {
    return this.http.get("http://localhost:8080/api/users");
    //now go to the home component
  }
  //sending a post request you need to specifiy the url and the data taken from the form
  // and add the headers to get no cors error
  register(data) {
    console.log(data);
    this.http
      .post(`http://localhost:8080/api/user/register`, data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
      })
      .toPromise()
      .then(data => console.log(data)); // to console log the response
  }
}
