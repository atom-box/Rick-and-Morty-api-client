# Installing a Javascript client someone else wrote in Node,js


## Purpose
To experiment with the data object that comes out of the Rick and Morty API.

* I will use the NPM Node.js package client for [Javascript](https://javascript.rickandmortyapi.com/)  There are [other clients](https://rickandmortyapi.com/documentation) for Ruby, Dart, Java, Elixir, et al
* My client will be requesting data objects from the [Rick and Morty API](https://rickandmortyapi.com/)  .


## How to install and use the API client

1. Make an NPM project and install just this npm [client module](https://javascript.rickandmortyapi.com/).
2. Sample code is then just something that looks a bit like this:
```
// index.js
const plumbus = require('rickmortyapi');

const test = async () => {
    const rick = await plumbus.getCharacter(1);
    const earth = await plumbus.getLocation(1);
    const episodeOne = await plumbus.getEpisode(1);
    console.log(typeof earth);
    console.log(typeof earth.data);
    console.log(Object.keys(earth.data));
    console.log(typeof earth.status);
    console.log(earth.status);
}

test()
.catch(e => {
    console.log('There has been a problem with your fetch operation: ' + e.message);
  });
```
3. And then, to run it, from any CLI terminal, `node index.js`. Sample response is similar to:
```
$ node index.js
object
object
[ 'id', 'name', 'type', 'dimension', 'residents', 'url', 'created' ]
number
200
$
```

## Similar projects by other folks

This is a common pedagogical exercise.

* Sergio9815 has a complete, deployed [front end](https://github.com/Sergio9815/RickAndMorty_API) GUI on Netlify & Digital Ocean
* There is a detailed tutorial by Colby Fayock at [Free Code Camp ](https://www.freecodecamp.org/news/how-to-create-a-dynamic-rick-and-morty-wiki-web-app-with-next-js/)

