---
title: La scala dell'oracolo
difficulty: intense
lang: it
slug: scala
image: ../../../assets/img/stairs.svg
hints:
  [
    "Il primo, parlando, fornisce un'informazione complessiva su tutti i cappelli che vede devanti a se.",
    "Il primo, parlando, fornisce un'informazione di parità.",
  ]
solution: 'La strategia comune che i pellegrini adottano è la seguente: il primo pellegrino (quello più in alto sulla scalinata e che non può vedere alcun altro cappello) conta il numero totale di cappelli bianchi che vede davanti a sé. Se il numero è dispari, dirà che il suo cappello è bianco; se il numero è pari, dirà che il suo cappello è nero. Da quel momento in poi, ogni pellegrino terrà traccia del numero di cappelli bianchi visti e dell''informazione fornita dal primo pellegrino. Questo gli permetterà di determinare il colore del proprio cappello con certezza. Supponiamo che il primo pellegrino veda, per esempio, 48 cappelli bianchi. Quindi, dice "nero" perché il numero è pari. Il secondo pellegrino conta il numero di cappelli bianchi che vede. Se vede 48 cappelli bianchi, sa che il suo cappello deve essere nero per mantenere il numero pari. Se vede 47, sa che il suo deve essere bianco per mantenere il numero pari. Il terzo pellegrino fa lo stesso, ma ora con le informazioni del primo e del secondo pellegrino. E così via per tutti i pellegrini. Seguendo questa strategia, il primo pellegrino avrà una probabilità del 50% di indovinare il colore del proprio cappello, perché sta essenzialmente indovinando. Tuttavia, tutti gli altri pellegrini saranno in grado di determinare il colore del proprio cappello con certezza, basandosi sulle informazioni del primo pellegrino e su ciò che vedono davanti a loro. In questo modo, 99 pellegrini saranno salvati con certezza, mentre il primo avrà una probabilità del 50% di sopravvivere.'
---

## Prologo

In una remota isola dove il tempo sembra essersi fermato, si trova la "Scala dell'Oracolo", una lunga e affascinante scalinata che conduce alla camera dell'Oracolo stesso, un essere che detiene il segreto della vita e della morte. È detto che chi riesce a soddisfare l'Oracolo con la sua saggezza può ottenere risposte alle domande più profonde dell'umanità.

## Descrizione

Cento pellegrini affrontano il percorso per raggiungere la Camera dell'Oracolo. Una volta arrivati, si trovano disposti in fila sulla scalinata, tutti rivolti verso il fondo della scalinata stessa. L'Oracolo, con un gesto magico, piazza un cappello su ciascuna delle loro teste. I cappelli possono essere di due colori: bianco o nero.

Ogni pellegrino può vedere tutti i cappelli delle persone che sono davanti a lui sulla scalinata, ma non può vedere il proprio o quelli di chi sta dietro di lui. L'Oracolo quindi inizia a fare la sua domanda a ciascun pellegrino, partendo da quello in cima alla scalinata: "Di che colore è il tuo cappello?"

Se il pellegrino indovina, viene salvato e accede alla saggezza dell'Oracolo. Se sbaglia, viene inghiottito dalla scalinata e perde la vita. Quando viene posta la domanda, tutti i pellegrini possono ascoltarne la risposta e sapere se chi risponde ha indovinato o ha perso la vita. Prima di iniziare questo rituale, l'Oracolo concede un'ora ai pellegrini per discutere tra di loro e trovare una strategia comune per sopravvivere a questa prova.

## La domanda

Qual è la strategia che i pellegrini adottano per assicurare che 99 di loro sopravvivano con certezza matematica, mentre l'ultimo ha una probabilità del 50% di sopravvivere?

## FAQ

- Non si sa a priori quanti cappelli bianchi e quanti cappelli neri ci sono. Per estremizzare, è possibile anche che tutti i cappelli siano di un solo colore.
- I pellegrini possono comunicare solo durante l'ora concessa prima del rituale, ma non durante la prova stessa.
- Non c'è modo di inviare segnali o messaggi tra i pellegrini una volta iniziato il rituale.
- I pellegrini non possono dire nient'altro che "bianco" o "nero".
- I pellegrini non possono aspettare del tempo o utilizzare qualsiasi altro trucco per passare informazioni diverse da una mera informazione binaria.
- Ogni pellegrino può vedere solo i cappelli delle persone davanti a lui sulla scalinata.
