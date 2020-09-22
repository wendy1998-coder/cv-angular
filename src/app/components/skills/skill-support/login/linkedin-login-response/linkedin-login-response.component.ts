import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: "LinkedinLoginResponse",
  templateUrl: "./linkedin-login-response.component.html",
  styleUrls: ["./linkedin-login-response.component.css"]
})
export class LinkedinLoginResponseComponent implements OnInit {
  static linkedinCreds: object = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  getUserInfo(): void {
    if (LinkedinLoginResponseComponent.linkedinCreds === null) {
      this.getLinkedinCreds();
    } else {
      this.getAccessToken();
    }
  }
  getLinkedinCreds(): void {
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
      data =>  {
        LinkedinLoginResponseComponent.linkedinCreds = data;
        this.getAccessToken();
      }
    );
  }

  getAccessToken(): void {
    const creds = LinkedinLoginResponseComponent.linkedinCreds;
    this.http.post(
      "https://cors-anywhere.herokuapp.com/https://www.linkedin.com/oauth/v2/accessToken", {
      }, {
        responseType: "json",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          'mode': 'no-cors'
        },
        params: {
          grant_type: "authorization_code",
          code: this.route.snapshot.queryParams.code,
          redirect_uri: creds["redirectUrl"],
          client_id: creds["clientId"],
          client_secret: creds["clientSecret"]
        }
      }).subscribe(
      data => {
        this.getProfileData(data["access_token"]);
      }
    );
  }

  getProfileData(accessToken: string): void {
    this.http.get(
      "https://cors-anywhere.herokuapp.com/" +
      "https://api.linkedin.com/v2/me" +
      "?projection=(id,firstName,lastName,emailAddress," +
      "profilePicture(displayImage~:playableStreams))",
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          'mode': 'no-cors',
          'Connection': 'Keep-Alive',
          'Authorization': 'Bearer ' + accessToken
        }
      }
    ).subscribe(
      data =>  {
        console.log(data);
      }
    );
  }

  ngOnInit() {
    if (this.route.snapshot.queryParams.code != null) {
      this.getUserInfo();
    }
    else {
      console.log(this.route.snapshot.queryParams);
    }
  }

}
