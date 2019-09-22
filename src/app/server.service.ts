import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {


  constructor(public httpClient:HttpClient) { }

  createEmployeeData(createEmpData){
  	console.log(createEmpData);
  	return this.httpClient.post(environment.apiUrl+'employee',createEmpData);
  }
  getEmployeeDetails(){
  	return this.httpClient.get(environment.apiUrl+'employees');
  }
  deleteEmployeeData(id){
  	return this.httpClient.delete(environment.apiUrl+'employee/'+id);
  }
}
