import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  currentLang!:string

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en')
    this.currentLang=localStorage.getItem("currentLang") || 'en';
    this.translate.use(this.currentLang);
   
}
  changeLanguage(language:string){
    this.translate.use(language);
localStorage.setItem("currentLang",language)
  }
  ngOnInit(): void {
  }

}
