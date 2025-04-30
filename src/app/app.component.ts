import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  template: `
  <div class="max-w-xs min-h-screen mx-auto bg-orange-50 relative overflow-hidden shadow-lg rounded-lg p-4">
  <img 
    class="w-full rounded-full mt-10 mb-6 animate-pulse" 
    src="/assets/ai.png" 
    alt="Appointment Visual"
  />

  <div class="absolute bottom-10 w-full px-4">
    <button class="w-full bg-yellow-600 hover:bg-yellow-700 text-white text-lg font-semibold py-3 rounded-full transition duration-300 shadow-md hover:shadow-lg">
      BOOK AN APPOINTMENT
    </button>
  </div>
</div>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aima';
}
