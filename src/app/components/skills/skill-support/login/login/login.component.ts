import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  private linkedinCreds: object;

  constructor(private http: HttpClient) {
  }

  login() {
    // get linkedinCreds
    this.http.get(
      "https://cors-anywhere.herokuapp.com/http://cv.wendyvandermeulen.com/angular-redirect/linkedinCreds.json",
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          'mode': 'no-cors'
        }
      }
    ).subscribe(
      data => {
        this.linkedinCreds = data;
        window.location.href = `https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=${
          this.linkedinCreds["clientId"]
        }&redirect_uri=${
          this.linkedinCreds["redirectUrl"]
        }&state=987654321&scope=r_liteprofile%20r_emailaddress`;
      });
  }
}
