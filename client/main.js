let ESX = null
emit('esx:getSharedObject', (obj) => (ESX = obj));


let firstSpawn = false
on('playerSpawned', () => {
    if (!firstSpawn) firstSpawn = true, SendNUIMessage({
        type: 'hud'
    })
})


setInterval(() => {
    let playerHealth = GetEntityHealth(PlayerPedId())
    emit('esx_status:getStatus', 'hunger', (hunger) => {
    emit('esx_status:getStatus', 'thirst', (thirst) => {
        console.log(hunger.getPercent())
    SendNUIMessage({
        health: playerHealth /2 - 20,
        hunger: hunger.getPercent() -20,
        thirst: thirst.getPercent() -20
        })
    })
})
},Config.refreshTime)