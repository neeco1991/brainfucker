---
title: The Oracle's Staircase
difficulty: intense
lang: en
slug: staircase
image: ../../../assets/img/stairs.svg
hints:
  [
    'The first person, by speaking, provides overall information on all the hats he sees in front of him.',
    'The first person provides information about parity.',
  ]
solution: "The common strategy the pilgrims adopt is as follows: the first pilgrim (the one highest on the staircase who can't see any other hat) counts the total number of white hats he sees in front of him. If the number is odd, he will say that his hat is white; if the number is even, he will say his hat is black. From that point on, each pilgrim will keep track of the number of white hats seen and the information provided by the first pilgrim. This will allow him to determine the color of his own hat with certainty. Suppose the first pilgrim sees, for example, 48 white hats. Thus, he says 'black' because the number is even. The second pilgrim counts the number of white hats he sees. If he sees 48 white hats, he knows that his hat must be black to keep the number even. If he sees 47, he knows his must be white to keep the number even. The third pilgrim does the same, but now with the information from the first and second pilgrim. And so on for all pilgrims. Following this strategy, the first pilgrim will have a 50% chance of guessing the color of his hat, as he's essentially guessing. However, all other pilgrims will be able to determine the color of their hat with certainty, based on the information from the first pilgrim and what they see in front of them. This way, 99 pilgrims will be saved with certainty, while the first has a 50% chance of surviving."
---

## Prologue

On a remote island where time seems to have stopped, lies the "Oracle's Staircase", a long and mesmerizing stairway leading to the chamber of the Oracle itself, a being that holds the secret of life and death. It's said that whoever manages to please the Oracle with their wisdom can obtain answers to humanity's deepest questions.

## Description

One hundred pilgrims face the journey to reach the Oracle's Chamber. Once there, they find themselves arranged in a line on the staircase, all facing towards the bottom of the staircase itself. The Oracle, with a magical gesture, places a hat on each of their heads. The hats can be of two colors: white or black.

Each pilgrim can see all the hats of the people in front of him on the staircase, but cannot see his own or those behind him. The Oracle then begins to ask each pilgrim, starting from the one at the top of the staircase: "What color is your hat?"

If the pilgrim guesses correctly, he is saved and gains access to the Oracle's wisdom. If he's wrong, he's swallowed by the staircase and loses his life. When the question is posed, all pilgrims can listen to the answer and know if the responder guessed correctly or lost their life. Before beginning this ritual, the Oracle grants the pilgrims an hour to discuss among themselves and find a common strategy to survive this test.

## The Question

What is the strategy the pilgrims adopt to ensure that 99 of them survive with mathematical certainty, while the last one has a 50% chance of survival?

## FAQ

- It's unknown beforehand how many white hats and how many black hats there are. To extremes, all hats could be of just one color.
- Pilgrims can communicate only during the hour granted before the ritual, but not during the test itself.
- There's no way to send signals or messages among the pilgrims once the ritual begins.
- Pilgrims can say nothing other than "white" or "black".
- Pilgrims cannot wait for time or use any other trick to pass different information other than a mere binary piece of information.
- Each pilgrim can only see the hats of people in front of him on the staircase.
