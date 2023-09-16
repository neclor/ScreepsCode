// Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE,MOVE], "Name", {memory: {role: 'harvester'}});

var creep_harvester = require('creep_harvester');
var creep_upgrader = require('creep_upgrader');
var creep_builder = require('creep_builder');

// Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE,MOVE], "Name", {memory: {role: 'harvester'}});


var creep_harvester = require('creep_harvester');

module.exports.loop = function () {

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        creep_harvester.run(creep);
    }

}