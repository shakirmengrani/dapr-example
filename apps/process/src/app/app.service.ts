import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService
  ){}
  async getData() {
    await this.httpService.get("http://localhost:3500/api", {
        headers: {
          "dapr-app-id": "api"
        }
      }).subscribe((value) => console.log(value.data))
      return {message: ""}
  }
}
