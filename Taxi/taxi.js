let personnage = {
    name : 'Jonh',
    health : 10
}

let musiques = ['Another love - Tom Odell', 'See Tình - Hoàng Thuỳ Linh', 'Annisa - Wejdene', 'Gento - SB19', '(G)I-DLE - Nxde']

let changements = 0

let feux = 0

while (feux < 30) {
    feux ++
    console.log(feux + " feux")
    let radio = musiques[Math.floor((Math.random()*5))]
    console.log('La musique ' + radio + ' est en train de jouer.')
    if  (radio === 'Annisa - Wejdene') {
        console.log("Change de musique mec ou jte démarre.")
        personnage.health --
        console.log(personnage.health)
        changements ++
    } else {
        console.log("J'adore la musique.")
    }
}
if (feux == 30 || personnage.health > 0) {
    console.log(personnage.name + ' est bien arrivé. Il a fait ' + changements + ' changements.')
} else {
    console.log("Explosion")
}
