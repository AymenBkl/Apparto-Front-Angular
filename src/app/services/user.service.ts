import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }


  getUsers() {
    return new Promise(async (resolve,reject) => {
      this.httpClient.get(environment.baseUrl + 'users/users')
        .subscribe(result => {
          resolve(result);
        },err => {
          reject(err);
        })
    })
  }

  getFriends() {
    return new Promise(async (resolve,reject) => {
      this.httpClient.get(environment.baseUrl + 'users/friends')
        .subscribe(result => {
          resolve(result);
        },err => {
          reject(err);
        })
    })
  }


  addUser(userId:string) {
    return new Promise(async (resolve,reject) => {
      this.httpClient.put(environment.baseUrl + 'users/addfriend',{userId:userId})
        .subscribe(result => {
          resolve(result);
        },err => {
          reject(err);
        })
    })
  }

  removeUser(userId:string) {
    return new Promise(async (resolve,reject) => {
      this.httpClient.put(environment.baseUrl + 'users/removefriend',{userId:userId})
        .subscribe(result => {
          resolve(result);
        },err => {
          reject(err);
        })
    })
  }
}
