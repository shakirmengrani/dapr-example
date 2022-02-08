import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
@Injectable()
export class AppService {
  constructor(
    private http: HttpService
  ){}
  getData(): { message: string } {
    this.http.get("http://localhost:3500/api", {
      headers: {
        "dapr-app-id": "process"
      }
    }).subscribe(value => console.log(value.data))
    return { message: 'Welcome to api!' };
  }
}
