<script setup lang="ts">
import type { IMessage } from '../types/index'
import {ref} from 'vue'
import { useConversation } from '../stores/conversation';

const emit = defineEmits(['updatedMessages']) 
const selectedConversation = useConversation()

const BotMessages = [
  'Hello, Friend!',
  'How are you?',
  'What are you up to?',
  'Cool! I am working on a new app.',
  'Nice! Sorry for the hurry but I need to leave.',
  'Thanks for the conversation! See you later.'
]

const userMessage = ref('')

function sendMessage() {
  if (!userMessage.value ||  !selectedConversation.selected) return

  const userMessageObject: IMessage = {
    id: Date.now().toString(),
    author: 'Me',
    content: userMessage.value
  }
  emit('updatedMessages', userMessageObject)

  const bot = selectedConversation.selected
  if (bot.botIndex < BotMessages.length) {
    const botMessageObject: IMessage = {
      id: Date.now().toString(),
      author: bot.name,
      content: BotMessages[bot.botIndex]
    }
    bot.messages.push(botMessageObject)
    bot.botIndex++
  }

  userMessage.value = ''
}

function handleKeyPress(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    event.preventDefault()
    sendMessage()
  }
}

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
    <div class="flex gap-1 mt-2">
      <textarea 
        class="w-full resize-none rounded-lg h-16 bg-cyan-100 border border-orange-400" 
        v-model="userMessage" 
        @keypress="handleKeyPress" 
        placeholder="Type your message here..."
        ></textarea>
      <button 
        class="bg-orange-300 hover:bg-cyan-200 text-black w-20 font-bold  border-none p-1 rounded-lg" 
        @click="sendMessage"
      >
        Send
      </button>
    </div>
  </div>
  
  <div v-else class="flex justify-center items-center bg-orange-50 h-full">
   <h1 class="font-bold text-5xl font-serif"> Start a new conversation </h1>
  </div>
</template>
