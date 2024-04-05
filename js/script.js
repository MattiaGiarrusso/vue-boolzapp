// Milestone 1
// - Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// - Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

// Milestone 2
// - Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// - Click sul contatto mostra la conversazione del contatto cliccato

// Milestone 3
// - Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// - Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

// Milestone 4
// - Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                  }
                ],
              },
              {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
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
                    status: 'received'
                  }
                ],
              },
              {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                  },
                  {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                  },
                  {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                  }
                ],
              },
              {
                name: 'Luisa',
                avatar: '_6',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                  }
                ],
              },
              {
                name: 'Francesca',
                avatar: '_io',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Prendo i biglietti per Padova?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma solo quando ci sono le promo',
                    status: 'received'
                  }
                ],
              },
              {
                name: 'Vincenzo',
                avatar: '_8',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Non dimenticarti di chiederle il numero di telefono',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    message: 'Sarà forse la prima cosa che chiedo',
                    status: 'received'
                  }
                ],
              },
              {
                name: 'Luciano',
                avatar: '_7',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'Ci vediamo stasera?',
                    status: 'received'
                  },
                  {
                    date: '28/03/2020 10:20:10',
                    message: 'Okay, ma dopo cena',
                    status: 'sent'
                  },
                  {
                    date: '28/03/2020 16:15:22',
                    message: 'Va bene, ci vediamo al solito posto',
                    status: 'received'
                  }
                ],
              },
            ],
            activeContact: 0,
            messageText: '',
            search: '',  
        };
    },
    methods: {
    // MS1 -  Funzione che attiva il contatto con la relativa chat
      ActiveIndexContact(index) {
        this.activeContact = index;
      },
    // MS3 - Funzione per inserire un messaggio scritto nel campo input in una chat
      AddNewMessage(index){

        const newSentMessage = {
          message: this.messageText,
          status: 'sent'          
        };
        
        if (this.messageText.length > 0 ) {
          this.contacts[index].messages.push(newSentMessage);
          this.messageText = '';
        }
        
        // Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo
        setTimeout(() => {
          
          this.contacts[index].messages.push({
            message: 'Ok!',
            status: 'received',
          });
        }, 1000);

      },
      // MS4 - Funzione per la ricerca utenti: scrivendo qualcosa nell’input di ricerca, filtra la lista dei contatti
      filteredContacts() {

        if (this.search !== '') {

          for (let i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].name.toLowerCase().includes(this.search.toLowerCase())) {
              this.contacts[i].visible = true;
            } else {
              this.contacts[i].visible = false;
            };
          };

        } else if (this.search === '') {
          for (let i = 0; i < this.contacts.length; i++) {
            this.contacts.visible = true;
          }
        }
      },
    },
}).mount('#app');
