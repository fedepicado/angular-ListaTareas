import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = "Lista de Tareas";
  showAddTask:boolean = true;
  subscription?: Subscription;
  
  constructor(
    private uiServise:UiService
  ) { 
    this.subscription = this.uiServise.onToggle().subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiServise.toggleAddTask();
  }
}
