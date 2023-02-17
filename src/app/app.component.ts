import { Component } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  
  //ngIf
  ngif_cond=true;
 
  ngif_and_cond1=true;
  ngif_and_cond2=true;
 
  ngif_or_cond1=true;
  ngif_or_cond2=false;
 
  ngif_else_cond=true;

  ngif_then_else_cond=false;

  //ngFor
  contacts=[
    {
      "firstName":"sai",
      "lastName":"kumar",
      "contactId":"1234"
    },
    {
      "firstName":"harish",
      "lastName":"shankar",
      "contactId":"1235"
    },
    {
      "firstName":"ram",
      "lastName":"sai",
      "contactId":"1236"
    }
  ]

  courseList=[
    "Java","Python","Dot net","C#"
  ]

  //ngSwitch
  dayNumber="61";

  //ngStyle
  ngStyle_prop="yellow";
  textColor="blue";

  //ngClass
  ngClass_name='ngClass_c';
  ngClass_cond='multiC1';
  ngClassMethod()
  {
    return 'c1';
  }

  //interpolation
  page_header="Welcome user"; //String
  num=10+20;  //number
  
  user_object={"message":"Welcome","firstName":"sai","lastName":"kumar"}; //Object
  isUserLoggedIn=true;

  //property binding
  imgUrl="test.png";
  imgAlt="This is missing image text"

  //attribute binding
  colspanValue=2;

  //event binding
  message()
  {
    console.log("Welcome user");
  }
  highlightBGcolor()
  {
    console.log("Hi Iam being highlighted")
  }
  inputBox()
  {
    console.log("This is input box")
  }

  //Two way data binding
  username="Good morning";
}
