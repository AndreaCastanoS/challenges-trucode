<template>
  <main class="flex flex-col h-screen">
    <aside class="bg-cyan-200 w-full">
      <nav class="flex h-10 justify-around items-center">
        <slot name="menu"></slot>
      </nav>
    </aside>
    <section class="flex-grow overflow-hidden">
      <slot name="content"></slot>
    </section>
  </main>
</template>





<!-- <template>
     <main class="grid grid-cols-[1fr_2fr] h-screen">
      <section class="border border-solid border-gray-300, overflow-y-auto">
       <slot name="record"></slot>
         </section>
       <section class="border border-solid border-gray-300, overflow-y-auto">
      <slot name="conversation"></slot>
    </section>
  </main>
</template> -->

<!--   <style scoped>
  main {
    display: grid;
    grid-template-columns: 1fr 2fr;
    height: 100vh;
  }
  
  section {
    border: 1px solid #ccc;
    overflow-y: auto;
  }
  </style>
   -->
