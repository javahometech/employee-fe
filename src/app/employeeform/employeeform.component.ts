import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {

	employeeFormData;

	employeeForm: FormGroup;

  constructor(private serverService: ServerService, private formBuilder: FormBuilder) { }

  ngOnInit() {
  	this.employeeForm = this.formBuilder.group({
  		id: [''],
  		name: ['']
  	});

  	this.serverService.getEmployeeDetails().subscribe((data) => {
  		console.log(data);
  		this.employeeFormData = data;
  	});
  }

  employeeFormSubmit(){
  	this.serverService.createEmployeeData((this.employeeForm.value)).subscribe((data) => {
  		this.serverService.getEmployeeDetails().subscribe((data) => {
  			this.employeeFormData = data;
  		})
  	});
  }

  deleteEmployee(employeeData){
  	console.log(employeeData.id);
  	this.serverService.deleteEmployeeData(employeeData.id).subscribe((data) => {
  		this.serverService.getEmployeeDetails().subscribe((data) => {
  			this.employeeFormData = data;
  		})
  		console.log('success');
  	});
  }

}
