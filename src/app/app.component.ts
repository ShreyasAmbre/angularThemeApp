import { Component, OnInit } from '@angular/core';
import { ThemesService } from './service/themes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'theme-app';

  constructor(private theme: ThemesService){}

  ngOnInit(): void {
    this.changeTheme('red')
  }

  changeTheme(themeName: string){
    this.theme.loadTheme(themeName)
  }
}
