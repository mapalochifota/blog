<template>
<div
  class="bg-[#ffffff] p-2.5 flex flex-col gap-2.5 items-start justify-start h-[1024px] relative overflow-hidden"
>
  <div
    class="bg-[#03628e] rounded-[30px] p-2.5 flex flex-row gap-2.5 items-start justify-center self-stretch shrink-0 h-[85px] relative overflow-hidden"
  >
    <img
      class="rounded-[30px] flex flex-row gap-2.5 items-start justify-center shrink-0 w-[126px] h-[69px] relative overflow-hidden"
      style="object-fit: cover"
      src="@/assets/nike-icon.png"
    />
    <div
      class="rounded-[30px] p-2.5 flex flex-row gap-2.5 items-start justify-center flex-1 relative overflow-hidden"
    >
      <!-- Firm Ground Button -->
      <button class="rounded-[30px] p-2.5 flex flex-row gap-2.5 items-center justify-center flex-1 relative overflow-hidden bg-transparent hover:bg-[#03496e] transition-colors">
        <router-link
          to="/firmground"
          class="w-full h-full flex items-center justify-center"
        >
          <div class="text-[#ffffff] text-center font-['Inter-Regular',_sans-serif] text-2xl font-normal relative">
            Firm Ground
          </div>
        </router-link>
      </button>
      
      <!-- Artificial Turf Button -->
      <button class="rounded-[30px] p-2.5 flex flex-row gap-2.5 items-center justify-center flex-1 relative overflow-hidden bg-transparent hover:bg-[#03496e] transition-colors">
        <router-link
          to="/artificialturf"
          class="w-full h-full flex items-center justify-center"
        >
          <div
            class="text-[#ffffff] text-center font-['Inter-Regular',_sans-serif] text-2xl font-normal relative"
          >
            Artificial Turf
          </div>
        </router-link>
      </button>
      
      <!-- About Button (Active) -->
      <button class="rounded-[30px] p-2.5 flex flex-row gap-2.5 items-center justify-center flex-1 relative overflow-hidden bg-[#03496e]">
        <router-link
          to="/about"
          class="w-full h-full flex items-center justify-center"
        >
          <div
            class="text-[#ffffff] text-center font-['Inter-Regular',_sans-serif] text-2xl font-normal relative"
          >
            About
          </div>
        </router-link>
      </button>
    </div>
  </div>
  <div
    class="p-2.5 flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 h-[905px] relative overflow-hidden"
  >
    <div
      class="p-2.5 flex flex-col gap-2.5 items-center justify-start flex-1 h-[895px] relative overflow-hidden"
    >
      <!-- Empty left column (images removed) -->
    </div>
    <div
      class="p-2.5 flex flex-col gap-2.5 items-center justify-start flex-1 h-[895px] relative overflow-hidden"
    >
      <div
        class="p-2.5 flex flex-row gap-2.5 items-start justify-center self-stretch shrink-0 h-[732px] relative overflow-hidden"
      >
        <div
          class="text-[#000000] text-center font-['Inter-Regular',_sans-serif] text-[32px] font-normal relative flex-1 h-[639px]"
        >
          Football boots have evolved significantly since their inception in the 19th century. Modern boots are engineered for specific playing styles and surfaces, with key features including:

          <br /><br />
          <span class="font-bold">1. Stud Configuration:</span> Firm ground boots feature molded or removable studs for natural grass, while artificial turf boots have numerous short studs for synthetic surfaces.
          
          <br /><br />
          <span class="font-bold">2. Upper Materials:</span> From traditional leather to modern Flyknit and synthetic materials, uppers are designed for touch, control, and durability.
          
          <br /><br />
          <span class="font-bold">3. Playing Positions:</span> Speed-focused boots like the Mercurial suit attackers, while control-oriented boots like the Phantom benefit midfielders, and sturdy boots like the Tiempo appeal to defenders.
          
          <br /><br />
          Nike's innovation in football boots combines biomechanical research with professional player feedback, resulting in boots that enhance performance while reducing injury risk. The company's collaborations with elite athletes ensure their boots meet the demands of modern football at all levels.
        </div>
      </div>
      <button>
        <router-link
          to="/home"
          class="bg-[#03628e] rounded-[30px] p-2.5 flex flex-row gap-2.5 items-start justify-center shrink-0 w-[295px] relative overflow-hidden hover:bg-blue-400 focus:ring-white-600"
        >
          <div
            class="text-[#ffffff] text-center font-['Inter-Regular',_sans-serif] text-[32px] font-normal relative"
          >
            Home
          </div>
        </router-link>
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      message: 'About Football Boots'
    };
  },
  mounted() {
    console.log(this.message);
  }
};
</script>

<style scoped>
/* Add hover animation for navigation buttons */
button:hover {
  transform: scale(1.02);
  transition: transform 0.2s ease;
}

.router-link-active {
  background-color: #03496e;
}

.router-link-exact-active {
  background-color: #03496e;
}

.font-bold {
  font-weight: bold;
}
</style>