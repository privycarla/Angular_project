import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  template: `
  <div class="w-full h-screen bg-orange-50 mx-auto font-poppins relative overflow-hidden flex justify-center items-center">
    <div class="w-full max-w-[375px] bg-orange-50 rounded-xl shadow-lg overflow-hidden">
      <!-- Header -->
      <div class="flex flex-col items-center pt-6">
        <img src="/assets/ize.png" alt="Logo" class="w-72 h-40 object-contain mb-2" />
      </div>

      <!-- Yellow panel -->
      <div class="relative w-full bg-amber-400 rounded-t-[45px] px-6 pt-16">
        <!-- Toggle buttons -->
        <div class="flex justify-center mb-8">
          <div class="bg-white border-4 border-lime-700 rounded-full flex p-1 w-fit shadow">
            <button
              (click)="navigateToLogin()"
              class="px-6 py-1 font-semibold rounded-full transition text-gray-500 hover:text-black">
              Login
            </button>
            <button
              class="bg-orange-300 text-black px-6 py-1 font-semibold rounded-full transition">
              Register
            </button>
          </div>
        </div>

        <!-- Register Form -->
        <div class="bg-white rounded-[30px] px-6 py-8 shadow-md">
          <p class="text-center text-sm mb-6">
            Let’s get glowing – join the <span class="text-amber-300 italic font-semibold">AIMA Glow</span> fam!
          </p>

          <input [(ngModel)]="username" type="text" placeholder="Enter Username"
                 class="w-full mb-4 px-4 py-3 rounded-full border border-yellow-600 shadow text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition" />

          <input [(ngModel)]="password" type="password" placeholder="Enter Password"
                 class="w-full mb-4 px-4 py-3 rounded-full border border-yellow-600 shadow text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition" />

          <input [(ngModel)]="confirmPassword" type="password" placeholder="Confirm Password"
                 class="w-full mb-6 px-4 py-3 rounded-full border border-yellow-600 shadow text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition" />

          <button (click)="onRegister()"
                  class="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-extrabold py-3 rounded-full text-xl transition">
            REGISTER
          </button>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  onRegister() {
    if (!this.username || !this.password || !this.confirmPassword) {
      alert('Please fill out all fields.');
      return;
    }
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    alert(`Registered as: ${this.username}`);
  }
}
