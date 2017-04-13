import { Component,OnInit } from "@angular/core";
import { DashboardService } from './dashboard.service';

@Component({
    selector : "dashboard",
    templateUrl : "./dashboard.component.html",
    styleUrls : ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{
    title : string =  "Employee Dashboard";
    employees : Array<Object> = [];
    employee : Object = {
        name : '',
        designation : '',
        department : ''
    };
    constructor(private dashboardService : DashboardService){
        //do something
    }
    showEmpForm = false;
    
    getEmployees(){
        this.dashboardService.getEmployees().subscribe(data => this.employees = data)
    }

    addEmployee(){
        this.showEmpForm = false;
        this.dashboardService.addEmployee(this.employee)
            .subscribe(data => this.employees.push(data))
        this.employee = {};
    }

    removeEmployee(id){
        console.log(id);
        this.dashboardService.removeEmployee(id);
  //          .subscribe(data => this.employees.filter((v,i) => v['_id'] != id));
        this.getEmployees();
    }

    ngOnInit(){
        this.getEmployees();
    }
}