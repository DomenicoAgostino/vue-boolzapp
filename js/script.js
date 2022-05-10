console.log('ciao');


/*
Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
Note:
non è importante per ora che tutti gli elementi grafici siano presenti, l’importante che la struttura sia come da specifiche
l’elenco degli utenti deve essere generato con un v-for e stampare almeno il nome e l’avatar (ultimo messaggio e data per ora possono essere fake)
provate sia con tanti e pochi messaggi con messaggi lunghi o corti. La pagina non si deve mai spaccare
*/


const app = new Vue({
    el:'#app',
    data: {
        contacts: [

            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:32:00',
                        message: 'Tutto fatto!',
                        status: 'received'
                    },
                
                ],
            },
      
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    },
                    
                ],
            },
      
            {
                name: 'Samuel',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'La Marianna va in campagna',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'icuro di non aver sbagliato chat?',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Si, ti chiedo scusa.',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Il solito sbadato',
                        status: 'received'
                    }
                ],
            },

            {
                name: 'Alessandro Barbiere',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Da oggi, è possibile prenotarsi direttamente dal nostro sito',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Perfetto, sarà più comodo adesso prenotare.',
                        status: 'received'
                    }
                ],
            },

            {
                name: 'Brother',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Sisi, chiamo subito',
                        status: 'received'
                    }
                ],
            },
      
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Ok.',
                        status: 'sent'
                    },
                    {
                      date: '10/01/2020 15:50:00',
                      message: 'Va bene',
                      status: 'received'
                  },
                ],
            },
      
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Pasquale da parte mia.',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Sarà fatto.',
                        status: 'received'
                    }
                ],
            },
      
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, stasera sushi',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Dajè',
                        status: 'sent'
                    },
                    
                ],
            }
          ],
      

        activeIndex: 0,
        newMessage: "",

        newResponse: "",
    
    
    },

    methods: {
        getImgUrl(index){
            return `img/avatar${this.contacts[index].avatar}.JPG`
        },
        activeMessage(index){
            this.activeIndex = index;
        },
    
        notificationAltert(){
            alert("Stai per attivare le notifiche desktop")
        },
    
        addNewMessage(){

            const newMessagePush = {
                date: this.getNow(),
                message: this.newMessage,
                status: "sent",
            }
    
           this.contacts[this.activeIndex].messages.push(newMessagePush);
    
           this.newMessage = "";
    
           this.addNewResponse()
    
        },
    
        addNewResponse(){
    
            const newResponse = {
                date:  this.getNow(),
                message: 'Va bene',
                status: 'received'
            }
    
            setTimeout(() => this.contacts[this.activeIndex].messages.push(newResponse), 3000);
    
        },
    
        getNow() {
            const today = new Date();
            const date = ('0' + today.getDate()).slice(-2) + '/' + ('0' + (today.getMonth()+1)).slice(-2) + '/' + today.getFullYear();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            const dateTime = date +' '+ time;
            return dateTime;
        },
    
    
    
    },
})







