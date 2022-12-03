let ax = 0.01
let vx = 0
let x = 0
let w = 400
let h = 400
let d = 50
let r = d/2

function setup(){
    CreateCanvas(w,h)
    background("#fff")
    fill(255)

    circle(x,h/2,d)
    vx= ax + vx

    x = x + vx

    if(x>=425){
        x=-25
    }

    if(x<=-25){
         x= 425
    }
}