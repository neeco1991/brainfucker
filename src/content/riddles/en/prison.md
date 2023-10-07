---
title: The Prison
difficulty: brainfucker
lang: en
slug: prison
image: ../../../assets/img/prison.svg
hints:
  [
    'The key lies in the fact that prisoners have time to agree on a strategy before the game begins.',
    'The inmates elect a representative who will perform tasks different from everyone else',
  ]
solution: "The inmates elect a representative during their initial discussion. Only the representative can change the state of the bulb from off to on. When an inmate (who is not the representative) enters the room and finds the bulb off, he turns it on if he has never turned it on before. If the inmate finds the bulb on, he leaves it on. Every time the representative enters the room and finds the bulb on, he turns it off and counts +1. When the representative has counted 99, he knows that all inmates have been in the room at least once, and at that point answers the warden's question, freeing all prisoners. By adopting this strategy, the inmates can ensure they win the game, although many draws may pass before this happens, given that the representative must be drawn many times and each inmate must be drawn at least once. However, by accurately following this tactic, all prisoners will eventually obtain their freedom with mathematical certainty."
---

## Prologue

In a kingdom ruled by a cruel despot, 100 prisoners are locked in the depths of a dark and labyrinthine prison. One day, the prison warden proposes a mysterious game to the inmates: if they win, they will gain their freedom; if they fail, they will remain trapped in their cells forever. The warden allows the prisoners to agree on a strategy before starting the game, after which he separates them and starts the challenge.

## Description

The names of the prisoners are put in a draw. At the start of the game, a name is drawn and the jailer brings that person from his cell to a room where there is only a bulb and a switch. The prisoner can decide to turn on, turn off, or leave the state of the bulb unchanged. When he leaves the room, the inmate is asked if all the other inmates have been in the room at least once. He can decide not to answer or say yes. If he says yes and is right, everyone wins their freedom. If he is wrong, everyone loses. If he doesn't answer, the game continues: his name will be re-entered into the draw, and another will be drawn.

## The Question

What is the strategy that the prisoners can adopt to have mathematical certainty of winning the challenge proposed by the prison warden, ensuring that all inmates have been in the room at least once before one of them answers?

## FAQ

- For simplicity, at the start of the game, the bulb is off. It is possible to solve this riddle even without this information but it is much harder.
- The inmates cannot communicate with each other during the game.
- There is no way to exchange information between inmates other than the state of the bulb (on or off).
- Inmates can only see the current state of the bulb when they enter the room.
- There is no limit to the number of times an inmate can be called into the room.
- The bulb neither burns out nor heats up.
