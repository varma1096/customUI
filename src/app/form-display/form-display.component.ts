import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

interface Framework {
  name: string,
  code: string
}

interface Btool {
  name: string,
  code: string
}
interface Database {
  name: string,
  code: string
}

interface Common{
  name:string,
  code:string
}

@Component({
  selector: 'app-form-display',
  templateUrl: './form-display.component.html',
  styleUrls: ['./form-display.component.css']
})
export class FormDisplayComponent implements OnInit {

  
  frameworks: Framework[];

  btools:Btool[];

  databases : Database[];
  logs: Common[];
  docs: Common[];


    selectedFramework: Framework;

    selectedTool:Btool;

    selectedDB: Database;

    selectedLog: Common;

    selectedDoc:Common;


    item: string;
    

  constructor() { }

  ngOnInit() {


    this.frameworks = [
      {name: 'SpringBoot', code: 'sb'},
      {name: 'SpringMVC', code: 'Mvc'},
      {name: 'Struts', code: 'st'},
      {name: 'J2EE', code: 'j2ee'},
      
  ];

  this.btools =[


    {name: 'Maven', code: 'mv'},
    {name: 'Ant', code: 'ant'},
    {name: 'gradle', code: 'gradle'}
  ];
  this.databases =[


    {name: 'MYSQL', code: 'mysql'},
    {name: 'Oracle', code: 'oracle'},
    {name: 'SQL Server', code: 'sqlserver'},
    {name: 'Mongo DB', code: 'mongodb'}
  ];

  this.logs =[


    {name: 'Log4j', code: 'log4j'},
    {name: 'SI4j', code: 'si4j'}
 
  ];
    
  this.docs =[


    {name: 'swagger', code: 'swagger'},
    {name: 'apigee', code: 'apigee'}
 
  ];

  }

}
