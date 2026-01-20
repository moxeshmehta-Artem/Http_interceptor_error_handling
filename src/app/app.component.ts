import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Interceptor_ErrorHandling';
  private http = inject(HttpClient);

  triggerError() {
    console.log('Triggering 404 error...');
    this.http.get('https://jsonplaceholder.typicode.com/nonexistent-endpoint').subscribe();
  }
}
