import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-homelist',
  templateUrl: './homelist.component.html',
  styleUrls: ['./homelist.component.scss']
})
export class HomelistComponent implements OnInit {
 

  isbound:boolean=false;
  
// allusersArray:any[]=[];

//inject service into the constructor
constructor(private service:HttpService){}

public tableData: any[] = [];

  ngOnInit() {
  //  this.service.getAlluserdetails().subscribe((res:any)=>{
  //   console.log(res);
  //   this.allusersArray=res;
    
  //  },
  //  (error) => {
  //    console.error('Error fetching data:', error);
  //  })

  this.service.getAlluserdetails().subscribe((data) => {
    console.log(data);
    
    this.tableData = data;
  },(error) => {
    console.error('Error fetching data:', error);
  });

  }
  

  fetchData() {
    this.service.getAlluserdetails().subscribe((data) => {
      console.log(data);
      
      this.tableData = data;
    },(error) => {
      console.error('Error fetching data:', error);
    });

    this.isbound=!this.isbound;
  }


  searchUserId!: string;
  user: any;

 

  searchUser() {
    if (this.searchUserId) {
      this.service.getUserById(this.searchUserId).subscribe(
        (data) => {
          this.user = data;
        },
        (error) => {
          console.error('Error fetching user:', error);
        }
      );
    }
  }


}
