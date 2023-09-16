var functions = require('creep_functions');

module.exports =
{
    run: function (creep)
    {
        if (!functions.store_energy(creep))
        {
            if (!functions.upgrade(creep))
            {
                functions.harvest_energy(creep);
            }
        }
    }
}