<script setup lang="ts">
import { useConversation } from '../stores/conversation';

const selectedConversation = useConversation()
</script>

<template>
  <div v-if="selectedConversation.selected" class="bg-orange-50 flex flex-col w-full h-full p-5">
    <ul class="list-none p-0 flex-grow overflow-y-auto">
      <li
        v-for="message in selectedConversation.selected?.messages"
        :key="message.id"
        :class="[ 
          'p-2.5 rounded-xl h-20 my-1 max-w-[60%] break-words border border-cyan-300',
          message.author === 'Me' ? 'bg-gray-50 text-black self-end text-right' : 'bg-gray-50 text-black self-start'
        ]"
      >
        <strong>{{ message.author }}:</strong> {{ message.content }}
      </li>
    </ul>
  </div>
</template>
