import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import * as dapr from 'dapr-client'
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
    new dapr.DaprClient("localhost", "3500", dapr.CommunicationProtocolEnum.HTTP).state.save("statestore", [
      {
        key: "orderid",
        value: Math.round(Math.random() * 1000000000).toString().padStart(10, "0")
      }
    ])
    return { message: 'Welcome to api!' };
  }
}
