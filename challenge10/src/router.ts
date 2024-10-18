import HomeBot from './components/pages/HomeBot.vue'
import StartConversation from './components/pages/StartConversation.vue'
import HistoryChats from './components/pages/HistoryChats.vue'



export const routes = [{path: '/', component: HomeBot},
        {path: '/chat', component: StartConversation},
        {path: '/history', component: HistoryChats},
      
        
    ]

    
   