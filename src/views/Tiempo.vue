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
      
      <!-- About Button -->
      <button class="rounded-[30px] p-2.5 flex flex-row gap-2.5 items-center justify-center flex-1 relative overflow-hidden bg-transparent hover:bg-[#03496e] transition-colors">
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
      <img
        class="flex flex-row gap-2.5 items-start justify-start shrink-0 w-[437px] h-[277px] relative overflow-hidden"
        style="object-fit: cover"
        src="@/assets/NikeTiempo_Legend9.png"
      />
      <img
        class="flex flex-row gap-2.5 items-start justify-start shrink-0 w-[437px] h-[301px] relative overflow-hidden"
        style="object-fit: cover"
        src="@/assets/niketiempo2.webp"
      />
      <img
        class="shrink-0 w-[437px] h-[277px] relative overflow-hidden"
        style="object-fit: cover"
        src="@/assets/tiempo1.jpeg"
      />
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
          The Nike Tiempo is a classic football boot blending premium leather with modern tech for superior touch and control. Loved by playmakers like Luka Modrić, it features a hybrid stud pattern for agility, Quadfit mesh for a snug fit, and cushioned padding for comfort. Designed using biomechanics research, it supports quick turns and precise passing, making it ideal for midfielders and defenders who value elegance and reliability on the pitch.
          <br />
        </div>
      </div>
      <!-- next button -->
      <button>
        <router-link
          to="/GX2"
          class="bg-[#03628e] rounded-[30px] p-2.5 flex flex-row gap-2.5 items-start justify-center shrink-0 w-[295px] relative overflow-hidden hover:bg-blue-400 focus:ring-white-600"
        >
          <div
            class="text-[#ffffff] text-center font-['Inter-Regular',_sans-serif] text-[32px] font-normal relative"
          >
            Next
          </div>
        </router-link>
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Tiempo',
  data() {
    return {
      message: 'Welcome to the Home Page!'
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
</style>