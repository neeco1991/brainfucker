---
title: La Prigione
difficulty: brainfucker
lang: it
slug: prigione
image: ../../../assets/img/prison.svg
hints:
  [
    'Tutto sta nel fatto che i prigionieri hanno del tempo per concordare una strategia prima che il gioco inizi.',
    'I detenuti eleggono un rappresentante che svolgerà dei compiti diversi da tutti gli altri',
  ]
solution: "I detenuti eleggono un rappresentante durante la loro discussione iniziale. Solo il rappresentante può cambiare lo stato della lampadina da spento ad acceso. Quando un detenuto (che non è il rappresentante) entra nella stanza e trova la lampadina spenta, la accende se non l'ha mai accesa. Se il detenuto trova la lampadina accesa la lascia accesa. Ogni volta che il rappresentante entra nella stanza e trova la lampadina accesa, la spegne e conta +1. Quando il rappresentante ha contato 99, sa che tutti i detenuti sono stati nella stanza almeno una volta, e a quel punto risponde alla domanda del direttore, liberando tutti i prigionieri. Adottando questa strategia, i detenuti possono assicurarsi di vincere il gioco, anche se potrebbero passare molte estrazioni prima che ciò avvenga, visto che il rappresentante deve essere estratto molte volte e ogni detenuto deve essere estratto almeno una volta. Tuttavia, seguendo con precisione questa tattica, alla fine, tutti i prigionieri otterranno la loro libertà con certezza matematica."
---

## Prologo

In un regno governato da un despota crudele, 100 prigionieri sono rinchiusi nelle profondità di un carcere oscuro e labirintico. Un giorno, il direttore del carcere propone ai detenuti un misterioso gioco: se riusciranno a vincere, otterranno la libertà; se falliranno, resteranno intrappolati nelle loro celle per sempre. Il direttore permette ai prigionieri di concordare una strategia prima di iniziare il gioco, dopodiché li separa e dà il via alla sfida.

## Descrizione

I nomi dei prigionieri vegono inseriti in un'urna. All'inizio del gioco viene estratto un nome e il carceriere porta quella persona dalla sua cella ad una stanza dove c'è solo una lampadina e un interruttore. Il prigioniero può decidere di accendere, spegnere o lasciare invariato lo stato della lampadina. Quando esce dalla stanza, al detenuto viene chiesto se tutti gli altri detenuti sono stati nella stanza almeno una volta. Può decidere di non rispondere o di dire di si. Se decide di dire di si ed ha ragione, tutti vincono la libertà. Se sbaglia, tutti perderanno. Se non risponde, il gioco continua: il suo nome verrà reinserito nell'urna e ne verrà estratto un altro.

## La domanda

Qual è la strategia che i prigionieri possono adottare peravere la certezza matematica di vincere la sfida proposta dal direttore del carcere, assicurandosi che tutti i detenuti siano stati nella stanza almeno una volta, prima che uno di loro risponda?

## FAQ

- Per semplicità, all'inizio del gioco, la lampadina è spenta. È possibile risolvere questo indovinello anche senza questa informazione ma è molto più difficile.
- I detenuti non possono comunicare tra di loro durante il gioco.
- Non c'è nessun modo di scambiare informazione tra i detenuti se non tramite lo stato della lampadina (accesa o spenta).
- I detenuti possono vedere solo lo stato attuale della lampadina quando entrano nella stanza.
- Non c'è limite al numero di volte che un detenuto può essere chiamato nella stanza.
- La lampadina non si fulmina nè si scalda.
