<script setup lang="ts">
import type { IConversation } from '../types/index'
import { useConversation } from '../stores/conversation';

const selectedConversation = useConversation()

let assistantIndex = 0;

function startNewConversation() { 
    const assistantNames = ['Kitty1', 'Kitty2', 'Kitty3', 'Kitty4'] 
    const selectedAssistant = assistantNames[assistantIndex]
  assistantIndex = (assistantIndex + 1) % assistantNames.length

  const newConversation : IConversation = {
    id: Date.now().toString(),
    name: selectedAssistant,
    messages: [],
    botIndex : 0
  }

selectedConversation.conversations.unshift(newConversation)
selectedConversation.selected = newConversation
}
</script>

<template>
   <div class="bg-orange-50  p-1">
      <button @click="startNewConversation" class="bg-orange-300 hover:bg-cyan-200  text-black font-bold p-3 rounded-lg ">
        Start a conversation
      </button>
    </div>
  </template>