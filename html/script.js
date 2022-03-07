const Hide = 'hidden'
const Show = 'visible'
let Status = false
$('.hudbox').css('visibility', Show)


const ShowInterface = () => {
    Status = !Status
    Status ? $('.hudbox').css('visibility', Show) : $('.hudbox').css('visibility', Hide)
}

window.addEventListener('message',(event) => {
    var data = event.data
    console.log(data.hunger)
    $('.health').css('width', `${data.health}%`)
    $('.hunger').css('width', `${data.hunger}%`)
    $('.thirst').css('width', `${data.thirst}%`)
    if (data.type == 'hud')  ShowInterface()
})
