<script setup lang="ts">
import ConversationSpace from '../ConversationSpace.vue'
import ButtonStart from '../ButtonStart.vue'
import type { IConversation, IMessage  } from '../../types/index'
import { useConversation } from '../../stores/conversation';

const selectedConversation = useConversation()

</script>

<template>
  <main class="flex h-full bg-orange-50">
     <ButtonStart 
       class="top-0 left-0 m-4" 
       @updateSelectedConversation="selectedConversation.updateSelectedConversation"
     />
     <section class="flex-grow border border-solid border-gray-300 flex h-full">
       <ConversationSpace 
         :selectedConversation="selectedConversation.selected" 
         @updatedMessages="selectedConversation.updateMessages"
         class="flex-grow h-full"
       />
     </section>
  </main>
</template>
