import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { StartupService } from './chat/services/startup.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  agencyId: any;

  constructor(private startup: StartupService) { }

  ngOnInit() {
    this.startup.init();
  }
}
