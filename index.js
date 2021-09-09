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

