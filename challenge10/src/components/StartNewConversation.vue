<script setup lang="ts">
import type{ IConversation } from '../types/index'
import { useConversation } from '../stores/conversation';

const selectedConversation = useConversation()

function selectConversation(conversation: IConversation) {
  selectedConversation.selected = conversation
}
</script>

<template>
  <div class="bg-gray-50 h-full p-4 flex flex-col w-full justify-center items-center ">
    <ul class="w-full overflow-y-auto p-6">
      <li
        v-for="conv in  selectedConversation.conversations"
        :key="conv.id"
        @click="selectConversation(conv)"
        class="bg-orange-300 hover:bg-cyan-200  text-black p-5 rounded-2xl mt-0.5 mb-0.5 w-full break-words"
      >
        {{ conv.name }}
      </li>
    </ul>
  </div>
</template>


 