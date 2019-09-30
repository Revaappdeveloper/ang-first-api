import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login-api',
  templateUrl: './login-api.component.html',
  styleUrls: ['./login-api.component.css']
})
export class LoginApiComponent implements OnInit {

  loginCredentials= {
    username: "Tulips",
    password: "Ar26",
    loginDate: Date()
  }
  url =  "https://api.jsonbin.io/";
  midPoint = "b/";
  orgEndPoint = "5d359b01322cab220cec17e4";
  endPoint1 = "5d359ff5f93f26310c8c98b0";
  endPoint2 = "5d35a074820de330bab34ec8";
  endPoint3 = "5d35a42cfc42a630f011194e";
headers = new HttpHeaders({'Content-Type': "application/json", 'secret-key': "$2a$10$MhenZ/mVISY1mAPk7.doo.Ue/FcGXA9fKwAW/gPYmkTnyUedDrFhq"});


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  getData(){
    console.log("I'm to fetch");
    let httpRequest= this.httpClient.get(this.url+ this.midPoint + this.orgEndPoint, {headers: this.headers});
    console.log(this);
    httpRequest.subscribe((res)=>{
      console.log(res);
    }, (err:any)=>{
      console.error(err);
    });

  }

  putData(){
    console.log("I'm to update");
    let httpRequest1 = this.httpClient.put(this.url+ this.midPoint+ this.orgEndPoint, this.loginCredentials, {headers:this.headers});
    console.log(this);
    httpRequest1.subscribe((res)=>{
      console.log(res);
    },(err:any)=>{
      console.error(err);
    });


  }

  postData(){
    console.log("I'm to create new");
    let httpRequest2 = this.httpClient.post(this.url+ this.midPoint, this.loginCredentials, {headers:this.headers});
    console.log(this);
    httpRequest2.subscribe((res)=>{
      console.log(res);
   },(err:any)=>{
     console.error(err);
   });
   
  }

  deleteData(){
    console.log("I'm to delete");
    let httpRequest3 = this.httpClient.delete(this.url + this.midPoint +this.endPoint1, {headers:this.headers});
    console.log(this);
    httpRequest3.subscribe((res)=>{
      console.log(res);
    },(err:any)=>{
      console.error(err);
    })

  }

newData(){

  console.log("I'm to see the newly posted data");
    let httpRequest4 = this.httpClient.get(this.url+ this.midPoint + this.endPoint2, {headers:this.headers});
    let httpRequest5 = this.httpClient.get(this.url+ this.midPoint + this.endPoint3, {headers:this.headers});
    console.log(this);
    httpRequest4.subscribe((res)=>{
      console.log(res);
   },(err:any)=>{
     console.error(err);
   });
   httpRequest5.subscribe((res)=>{
    console.log(res);
 },(err:any)=>{
   console.error(err);
 });
}

}
