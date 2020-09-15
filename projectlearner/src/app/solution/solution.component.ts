import { Component, OnInit } from '@angular/core';
import {ServiceComp} from '../shared/service.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {

  constructor(private res:ServiceComp,private router:Router) { }
  
  QA;

  ngOnInit(): void {
    if(!this.res.isloggedin()){
      this.router.navigate([''])
  }
  this.res.fetchSolution().subscribe(element=>{
    this.QA = element['message'];
    console.log(this.QA)
  })
}
}
