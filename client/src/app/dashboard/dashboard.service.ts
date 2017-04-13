import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DashboardService {
  constructor(private http: Http) { }
  
  addEmployee(employee){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/employee', JSON.stringify(employee), {headers : headers})
                    .map(response => response.json())
  }

  getEmployees(){
    return this.http.get('api/employee')
               .map(response => response.json())
  }

  removeEmployee(id){
    return this.http.delete('api/employee/'+id)
               .map(response => response.json())
  }
}
