require('require-all') ({
            dirname : __dirname + '/Src',
            filter  : /^(index)\.js$/
});



let spawnPoints = require('./spawn_points.json').SpawnPoints;

mp.events.add('playerDeath', (player) => {
    player.spawn(spawnPoints[Math.floor(Math.random() * spawnPoints.length)]);
    player.health = 100;
});