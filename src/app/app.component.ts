import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafioTokio';
  users = [];
  data = [];


  constructor(
    private httpClient: HttpClient
    ) { }

  ngOnInit() {
      this.getUsers();
  }

  getUsers(){
    //this.httpClient.get('https://jsonplaceholder.typicode.com/users')
       //.subscribe(data => console.log(data));

      //this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((data: any[])=>{
      //    this.users = data;
      //    console.log('Users: ',this.users)
      //}) 

      this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((data: any[])=>{
        this.data = data;
        console.log('Users: ', this.data);
      })
  }
}
