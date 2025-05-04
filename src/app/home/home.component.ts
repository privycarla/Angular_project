import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
  <div class="w-full min-h-screen bg-stone-200 relative overflow-hidden">
  <!-- Top Header -->
  <div class="w-full h-65 bg-amber-300 relative flex flex-col items-start justify-center px-5 pt-10">
    <p class="text-sm font-semibold text-black font-poppins mb-2">You're in, Nami! Let’s glam things up.</p>
   <div class="w-full flex items-center bg-zinc-300 rounded-full h-12 px-4 mt-2">
  <!-- Search Icon -->
  <svg xmlns="http://www.w3.org/2000/svg" 
       class="w-6 h-6 text-neutral-500 mr-3" 
       fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M21 21l-4.35-4.35m1.6-5.4a7 7 0 11-14 0 7 7 0 0114 0z"/>
  </svg>
  
  <!-- Explore Text -->
  <span class="text-neutral-500 text-base font-semibold">Explore</span>
</div>

     <div class="mt-6 px-4 overflow-x-auto flex gap-4">
    <div class="flex-shrink-0 text-center">
      <img class="w-20 h-20 rounded-full" src="assets/brows.png" />
      <p class="text-xs font-bold text-white mt-1">Brows and Lashes</p>
    </div>
    <div class="flex-shrink-0 text-center">
      <img class="w-20 h-20 rounded-full" src="assets/pedicure.png" />
      <p class="text-xs font-bold text-white mt-1">Pedicure</p>
    </div>
    <div class="flex-shrink-0 text-center">
      <img class="w-20 h-20 rounded-full" src="assets/manicure.png" />
      <p class="text-xs font-bold text-white mt-1">Manicure</p>
    </div>
    <div class="flex-shrink-0 text-center">
      <img class="w-20 h-20 rounded-full" src="assets/spa.png" />
      <p class="text-xs font-bold text-white mt-1">Spa</p>
    </div>
    <div class="flex-shrink-0 text-center">
      <img class="w-20 h-20 rounded-full" src="assets/haircut.png" />
      <p class="text-xs font-bold text-white mt-1">Haircut</p>
    </div>
    <div class="flex-shrink-0 text-center">
      <img class="w-20 h-20 rounded-full" src="assets/facial.png" />
      <p class="text-xs font-bold text-white mt-1">Facial</p>
    </div>
  </div>
  </div>

  <!-- Service Categories (scrollable horizontally) -->
 

  <!-- Special Offers -->
  <div class="mt-5 px-5">
    <h2 class="text-xl font-semibold text-black font-poppins mb-3">Special Offers</h2>
    <div class="flex overflow-x-auto gap-4 pb-4">
      <!-- Offer Card -->
      <div class="min-w-[280px] bg-white rounded-2xl p-3 shadow-md">
        <img class="w-full h-32 object-cover rounded-xl mb-2" src="assets/2.jpeg" />
        <h3 class="text-sm font-semibold text-black">Glow Facial</h3>
        <p class="text-[10px] text-zinc-500">Rejuvenate your skin with our signature Glow Facial. Limited-time offer!</p>
        <div class="text-[10px] text-lime-600 font-semibold mt-1">20% Off</div>
      </div>
      <!-- More cards... -->
    </div>
  </div>

  <!-- Recommended Section -->
  <div class="mt-5 px-5 pb-20">
  <h2 class="text-xl font-semibold text-black font-poppins mb-3">Recommended</h2>
  <div class="flex overflow-x-auto gap-4 pb-4">
    <div class="min-w-[280px] bg-white rounded-2xl p-3 shadow-md">
      <img class="w-full h-32 object-cover rounded-xl mb-2" src="assets/1.jpg" />
      <h3 class="text-sm font-semibold text-black">Brightening Facial</h3>
      <p class="text-[10px] text-zinc-500">Lighten dark spots and get that radiant, even-toned glow.</p>
      <div class="text-[10px] font-bold text-black mt-1">200.2K reviews</div>
    </div>
    <!-- More recommended cards... -->
  </div>
</div>

  <!-- Bottom Navigation -->
<!-- Bottom Navigation -->
<div class="fixed bottom-0 w-full h-16 bg-amber-300 flex justify-around items-center rounded-t-2xl">
  <!-- Home -->
  <button>
    <svg xmlns="http://www.w3.org/2000/svg"
         class="w-6 h-6 text-lime-800 fill-current"
         viewBox="0 0 20 20">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  </button>

  <!-- Search -->
  <button>
    <svg xmlns="http://www.w3.org/2000/svg"
         class="w-6 h-6 text-lime-800"
         fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-4.35-4.35m1.6-5.4a7 7 0 11-14 0 7 7 0 0114 0z"/>
    </svg>
  </button>

  <!-- Booking/Calendar -->
  <button>
    <svg xmlns="http://www.w3.org/2000/svg"
         class="w-6 h-6 text-lime-800"
         fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M8 7V3m8 4V3m-9 8h10m-10 4h6m4-10H5a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2z"/>
    </svg>
  </button>

  <!-- Profile -->
  <button>
    <svg xmlns="http://www.w3.org/2000/svg"
         class="w-6 h-6 text-lime-800"
         fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M16 21v-2a4 4 0 00-8 0v2m4-10a4 4 0 100-8 4 4 0 000 8z"/>
    </svg>
  </button>
</div>


</div>
`,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
