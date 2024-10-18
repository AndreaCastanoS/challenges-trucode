<template>
    <main>
      <h1 class="flex justify-center items-center pt-5 pb-10 mt-7 font-bold text-cyan-300 text-2xl">WELCOME TO KITTY BOT</h1>     
      <div class="flex justify-center items-center h-full p-5 space-x-4">
        <RouterLink to="/chat"> <button class="p-4 w-40 font-bold rounded-lg bg-orange-300 text-black hover:bg-cyan-200 ">Start Chat</button> </RouterLink>
        <img src="/src/img/bot.jpg" class="">
        <RouterLink to="/history"> <button class="p-4 w-40 font-bold rounded-lg bg-orange-300 text-black hover:bg-cyan-200">Chat History</button> </RouterLink>
      </div>
    </main>
  </template>
  