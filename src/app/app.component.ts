import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dockerDemo';
  constructor(private httpClient: HttpClient) { }
  text = 'hello';
  name = '';
  age = '';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  updateUser() {
    const url = 'http://localhost:8080/addOrUpdateUser/' + this.name + '/' + this.age;
    this.httpClient.post(url, { responseType: 'json' })
      .subscribe(
        (data: any) => {
          alert('User details are saved successfully');
        }
      );
  }
}

