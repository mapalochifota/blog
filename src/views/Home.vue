<template>
  <div class="bg-[#ffffff] flex flex-col gap-2.5 items-start justify-start relative overflow-hidden">
    <!-- Header -->
    <div
      class="bg-[#03628e] p-2.5 flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
      <div class="flex flex-row gap-2.5 items-center justify-start flex-1 relative">
        <img
          class="flex flex-col gap-2.5 items-start justify-start shrink-0 w-[100px] h-[100px] relative overflow-hidden"
          style="object-fit: cover" src="@/assets/nike-icon.png" />
      </div>
      <div class="flex flex-row gap-[30px] items-center justify-end self-stretch flex-1 relative">
        <!-- Firm Ground Button -->
        <router-link 
          to="/firmground"
          class="rounded-[20px] p-5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden hover:bg-[#03496e] transition-colors">
          <div
            class="text-[#ffffff] text-left font-['PlayfairDisplay-Bold',_sans-serif] text-xl font-bold relative self-stretch">
            FIRM GROUND
          </div>
        </router-link>
        
        <!-- Artificial Turf Button -->
        <router-link 
          to="/artificialturf"
          class="rounded-[20px] p-5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden hover:bg-[#03496e] transition-colors">
          <div
            class="text-[#ffffff] text-left font-['PlayfairDisplay-Bold',_sans-serif] text-xl font-bold relative self-stretch">
            ARTIFICIAL TURF
          </div>
        </router-link>
        
        <!-- About Button -->
        <router-link 
          to="/about"
          class="rounded-[20px] p-5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden hover:bg-[#03496e] transition-colors">
          <div
            class="text-[#ffffff] text-left font-['PlayfairDisplay-Bold',_sans-serif] text-xl font-bold relative self-stretch">
            ABOUT
          </div>
        </router-link>
      </div>
    </div>
    <!-- Main Content -->
    <div
      class="pt-2.5 pr-[90px] pb-2.5 pl-[90px] flex flex-row gap-2.5 items-start justify-start self-stretch flex-1 relative">
      <!-- left column with images -->
      <div class="p-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative overflow-hidden">
        <img class="flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative overflow-hidden"
          style="object-fit: cover" src="@/assets/gx2.jpg" />
        <img class="flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative overflow-hidden"
          style="object-fit: cover" src="@/assets/airzoom.jpg" />
      </div>
      <!-- right column with text and button -->
      <div
        class="pt-[5px] pb-[5px] flex flex-col gap-2.5 items-center justify-start self-stretch flex-1 relative overflow-hidden">
        <div class="flex flex-col gap-2.5 items-end justify-start self-stretch flex-1 relative">
          <div class="text-center font-['-',_sans-serif] text-2xl font-normal relative self-stretch flex-1">
            <span>
              <span
                class="nike-football-stands-out-as-a-top-choice-due-to-its-perfect-blend-of-innovation-performance-and-style-from-the-lightning-fast-mercurial-to-the-control-focused-phantom-and-classic-tiempo-nike-offers-a-shoe-tailored-for-every-player-its-cutting-edge-technology-including-flyknit-grippy-uppers-and-responsive-soles-gives-players-a-competitive-advantage-collaborations-with-stars-like-mbapp-and-de-bruyne-further-solidify-nike-s-elite-reputation-whether-it-s-pro-level-cleats-or-advanced-jerseys-nike-excels-across-all-levels-of-the-game-span">
                Nike
              </span>
              <span
                class="nike-football-stands-out-as-a-top-choice-due-to-its-perfect-blend-of-innovation-performance-and-style-from-the-lightning-fast-mercurial-to-the-control-focused-phantom-and-classic-tiempo-nike-offers-a-shoe-tailored-for-every-player-its-cutting-edge-technology-including-flyknit-grippy-uppers-and-responsive-soles-gives-players-a-competitive-advantage-collaborations-with-stars-like-mbapp-and-de-bruyne-further-solidify-nike-s-elite-reputation-whether-it-s-pro-level-cleats-or-advanced-jerseys-nike-excels-across-all-levels-of-the-game-span2">
                football stands out as a top
                <br />
                choice due to its perfect blend
                <br />
                of innovation, performance,
                <br />
                and style. From the lightning-fast
                <br />
                Mercurial to the control-focused
                <br />
                Phantom and classic Tiempo,
                <br />
                Nike offers a shoe tailored for
                <br />
                every player. Its cutting-edge
                <br />
                technology, including Flyknit, grippy
                <br />
                uppers, and responsive
                <br />
                soles, gives players a competitive
                <br />
                advantage. Collaborations
                <br />
                with stars like Mbappé and De
                <br />
                Bruyne further solidify Nike&#039;s
                <br />
                elite reputation. Whether it&#039;s pro-level
                <br />
                cleats or advanced
                <br />
                jerseys, Nike excels across
                <br />
                all levels of the game.
              </span>
            </span>
          </div>
        </div>
        <!-- learn more -->
        <button>
          <router-link 
          to="Tiempo"
          class="bg-[#03628e] rounded-[5px] pt-2.5 pr-[30px] pb-2.5 pl-[30px] flex flex-col gap-2.5 items-start justify-start 
          shrink-0 relative overflow-hidden
           bg-blue-500 hover:bg-blue-700 focus:ring-white-600">
          <span
            class="text-[#ffffff] text-center font-['PlayfairDisplay-Medium',_sans-serif] text-2xl font-medium relative">
            Learn More
          </span>
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
.router-link-active {
  background-color: #03496e;
}

.router-link-exact-active {
  background-color: #03496e;
}
</style>