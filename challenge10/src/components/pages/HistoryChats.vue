<script setup lang="ts">
import StartNewConversation from '../StartNewConversation.vue';
import HistoryChat from '../HistoryChat.vue';
import { useConversation } from '../../stores/conversation';


  const selectedConversation = useConversation()

</script>

 <template>
     <main class="grid grid-cols-[1fr_2fr] h-screen">
      <section class="border border-solid border-gray-300, overflow-y-auto">
        <StartNewConversation @updateSelectedConversation="selectedConversation.updateSelectedConversation"></StartNewConversation>
         </section>
       <section v-if="selectedConversation.selected" class="border border-solid border-gray-300, overflow-y-auto">
     <HistoryChat></HistoryChat>
    </section>
    <section v-else class="border border-solid border-gray-300 overflow-y-auto flex justify-center items-center">
      <h1 class="font-bold text-5xl font-serif">History not available</h1>
    </section>
  </main>
</template> 