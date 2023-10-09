---
title: The Prison
difficulty: brainfucker
lang: en
slug: prison
image: ../../../assets/img/prison.svg
hints:
  [
    "The prisoners' salvation lies in the fact that they are given time to agree on a strategy before the game begins.",
    'The inmates elect a representative who will have a different task than all the others.',
  ]
solution: "The inmates elect a representative during their initial discussion. Only the representative is allowed to change the lightbulb status from off to on. When an inmate (who isn't the representative) enters the room and finds the lightbulb off, he turns it on if he has never turned it on before. If he finds the lightbulb on, he leaves it on. Every time the representative enters the room and finds the lightbulb on, he turns it off and counts +1. When the representative has counted 99, he knows that every inmate has been in the room at least once, and at that point answers the warden's question, freeing all the prisoners. By adopting this strategy, the inmates can ensure they win the game, even though it might take many draws for this to happen, since the representative must be drawn many times and every inmate must be drawn at least once. However, by strictly following this tactic, eventually, all the prisoners will surely gain their freedom."
---

## Prologue

A hundred prisoners of the worst kind are locked up, serving their sentences in a dark and maze-like prison. One day, the warden offers the prisoners a mysterious game: if they manage to win, they will gain their freedom; if they fail, they will remain locked in their cells forever. The warden allows the prisoners to agree on a strategy before the game starts, then separates them and starts the challenge.

## Description

The names of the prisoners are placed in a bowl. At the start of the game, a name is drawn, and the jailer takes that person from his cell to a room with only a lightbulb and a switch. The prisoner can choose to turn the lightbulb on, off, or leave its status unchanged. Upon leaving the room, the inmate is asked if every other inmate has been in the room at least once. He can choose not to answer or to say yes. If he says yes and is right, they all gain freedom. If he's wrong, they all lose. If he doesn't answer, the game continues: his name will be put back into the bowl and another name will be drawn.

## The Question

What strategy can the prisoners adopt to have mathematical certainty of winning the challenge posed by the warden, ensuring that all inmates have been in the room at least once, before one of them responds?

## FAQ

- For simplicity, at the beginning of the game, the lightbulb is off. It's possible to solve this riddle even without this information, but it's much harder.
- Prisoners cannot communicate with each other during the game.
- There's no way to exchange information between prisoners except through the status of the lightbulb (on or off).
- Prisoners can only see the current state of the lightbulb when they enter the room.
- There's no limit to the number of times a prisoner can be called into the room.
- The lightbulb doesn't burn out or heat up.
