import { TutorialService } from 'src/app/services/tutorial.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public fbservis:TutorialService,
    public router : Router
  ){}
  title = 'Firebase çalışmam';
  OturumKapat(){
this.fbservis.OturumKapat().then(d=>{
  localStorage.removeItem("user")
  this.router.navigate(['/login'])
})
  }
}
