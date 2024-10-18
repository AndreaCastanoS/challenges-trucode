import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IConversation, IMessage } from '@/types/index'



export const useConversation = defineStore('selected', {
    state: () => ({
        selected: ref<IConversation | null>(null),
        conversations: ref<IConversation[]>([])
    }),
    actions: {
        updateSelectedConversation(conversation: IConversation) {
            this.selected = conversation
        },
        updateMessages(newMessage: IMessage) {
            if (this.selected) {
                this.selected.messages.push(newMessage)
            }
        }
    }
}) 