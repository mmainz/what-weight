# what weight!?

This is a small React app that let's you estimate your [1RM](https://en.wikipedia.org/wiki/One-repetition_maximum) by using the [RPE](https://en.wikipedia.org/wiki/Rating_of_perceived_exertion) of a previous set.
It also lets you calculate a target weight given your 1RM, target number of reps, and target RPE.
It uses Mike Tuchscherers RPE table for estimating these values.

## Technology

Since the app is mostly intended to be used on a phone, it uses a [service worker](https://web.dev/learn/pwa/service-workers/).
This makes it work even when offline and also makes it installable on phones that support it.

## Development

After cloning the repository, run `npm install`.
Then `npm start` to start the dev server.
You can run the tests with `npm t`.
