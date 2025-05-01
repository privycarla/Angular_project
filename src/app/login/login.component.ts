import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router'; // Add Router
import { CommonModule } from '@angular/common'; // for *ngIf and more

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  template: `
    <div class="w-full max-w-[375px] h-screen bg-orange-50 mx-auto font-poppins relative overflow-hidden">
      <!-- Header -->
      <div class="flex flex-col items-center pt-6">
        <img src="/assets/ize.png" alt="Logo" class="w-72 h-40 object-contain mb-2" />
      </div>

      <!-- Yellow panel -->
      <div class="absolute top-[210px] left-0 w-full h-[calc(100%-210px)] bg-amber-400 rounded-t-[45px] px-6 pt-16">
        
        <!-- Toggle buttons -->
        <div class="flex justify-center mb-8">
          <div class="bg-white border-4 border-lime-700 rounded-full flex p-1 w-fit shadow">
            <button 
              (click)="activeTab = 'login'"
              [ngClass]="activeTab === 'login' ? 'bg-orange-300 text-black' : 'text-gray-500'"
              class="px-6 py-1 font-semibold rounded-full transition">
              Login
            </button>
            <button 
              (click)="navigateToRegister()"
              [ngClass]="activeTab === 'register' ? 'bg-orange-300 text-black' : 'text-gray-500'"
              class="px-6 py-1 font-semibold rounded-full transition">
              Register
            </button>
          </div>
        </div>

        <!-- Login Box -->
        <div *ngIf="activeTab === 'login'" class="bg-white rounded-[30px] px-6 py-8 shadow-md transition-all duration-300">
          <p class="text-center mb-6">
            <span class="font-semibold">Welcome back, </span>
            <span class="text-amber-300 font-semibold italic">Glow-Getter!</span>
          </p>

          <input [(ngModel)]="username" type="text" placeholder="Enter Username"
                 class="w-full mb-4 px-4 py-3 rounded-full border border-yellow-600 shadow text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition" />

          <input [(ngModel)]="password" type="password" placeholder="Enter Password"
                 class="w-full mb-6 px-4 py-3 rounded-full border border-yellow-600 shadow text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition" />

          <button (click)="onLogin()"
                  class="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-extrabold py-3 rounded-full text-xl transition">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  activeTab: 'login' | 'register' = 'login';

  constructor(private router: Router) {}

  onLogin() {
    console.log('Login attempted with:', this.username, this.password);
    // Replace with actual login logic
    alert(`Logging in as: ${this.username}`);
  }

  // Navigate to /signup page
  navigateToRegister() {
    this.router.navigate(['/signup']); // Ensure the /signup route exists
  }
}
