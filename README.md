# simple-sse-example

This is an example of a simple implementation of [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events).

The server will send a random number between 1 and 100 every second to the client.

## How to run

1. Clone this repository
2. Run `yarn install`
3. Run `yarn start`
4. Open `index.html` in your browser (note: IE doesn't natively support server-sent events)
5. Open your browser's dev tools and inspect your console - you can also inspect the network requests to interrogate the server messages further
