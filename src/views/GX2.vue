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
      <div
        class="rounded-[30px] p-2.5 flex flex-row gap-2.5 items-start justify-start flex-1 relative overflow-hidden"
      >
        <div
          class="text-[#ffffff] text-center font-['Inter-Regular',_sans-serif] text-2xl font-normal relative flex-1"
        >
        <!-- firm ground button -->
          Firm Ground
        </div>
      </div>
      <div
        class="rounded-[30px] p-2.5 flex flex-col gap-2.5 items-center justify-start flex-1 relative overflow-hidden"
      >
        <div
          class="text-[#ffffff] text-center font-['Inter-Regular',_sans-serif] text-2xl font-normal relative"
        >
        <!-- Artificial tuff buttom -->
          Artificial Tuff
        </div>
      </div>
      <div
        class="rounded-[30px] p-2.5 flex flex-row gap-2.5 items-start justify-center flex-1 relative overflow-hidden"
      >
        <div
          class="text-[#ffffff] text-center font-['Inter-Regular',_sans-serif] text-2xl font-normal relative"
        >
         <!-- about button -->
          About
        </div>
      </div>
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
        src="@/assets/black-and-whitegx2.jpeg"
      />
      <img
        class="flex flex-row gap-2.5 items-start justify-start shrink-0 w-[437px] h-[301px] relative overflow-hidden"
        style="object-fit: cover"
        src="@/assets/gx2grey.jpeg"
      />
      <img
        class="shrink-0 w-[437px] h-[277px] relative overflow-hidden"
        style="object-fit: cover"
        src="@/assets/gx2peach.jpeg"
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
          The Nike GX2 is a high-performance soccer cleat designed for elite
          players who demand precision and control on the pitch. An evolution of
          the Nike GX series, the GX2 features advanced touch-enhancing
          textures, a lightweight design, and responsive traction for quick
          movements. It’s favored by midfielders and playmakers, such as Kevin
          De Bruyne and Alexia Putellas, who rely on exceptional ball feel and
          passing accuracy. Created by Nike to blend innovation with player
          feedback, the GX2 incorporates a hybrid outsole and grippy upper to
          excel in both natural and artificial turf conditions, making it a top
          choice for modern footballers.
        </div>
      </div>
      <div
        class="bg-[#03628e] rounded-[30px] p-2.5 flex flex-row gap-2.5 items-start justify-center shrink-0 w-[295px] relative overflow-hidden"
      >
        <div
          class="text-[#ffffff] text-center font-['Inter-Regular',_sans-serif] text-[32px] font-normal relative"
        >
          Next
        </div>
      </div>
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

</style>
