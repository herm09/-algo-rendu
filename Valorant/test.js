let attaquants = ["Omen", "Phoenix", "Jett", "Fade", "Chamber"] //joueurs de l'équipe 1
let defenseurs = ["Omen", "Phoenix", "Jett", "Fade", "Chamber"] //joueurs de l'équipe 2
let winAttack = 0 //nombre de manches gagnés équipe 1
let winDefense = 0 //nombre de manches gagnés équipe 2
let spike = false //spike originellement désamorcé
let duel = [] //liste vide
let mortAttack = [] //liste des joueurs mort attaquants
let mortDefense = []

class Attaquant {
    constructor(nom) {
        this.nom = nom
    }
}

class Defense {
    constructor(name) {
        this.name = name
    }
}

for (let i = 0; i < 1; i++) {
    let attackAleatoire = attaquants[Math.floor(Math.random() * attaquants.length)] //sélectionne un attaquant aléatoirement
    let defenseAleatoire = defenseurs[Math.floor(Math.random() * defenseurs.length)] //sélectionne un defenseur aléatoirement
    duel.push(new Attaquant(attackAleatoire), new Defense(defenseAleatoire))
}

console.log(duel)

while (winAttack != 13 || winDefense != 13) {
    for (let i = 0; i < 1; i++) {
        let persoMort = duel[Math.floor(Math.random() * duel.length)]; //sélectionne un attaquant aléatoirement
        if (persoMort == attackAleatoire) {
            mortAttack.push(persoMort)
            console.log()
        } else {
            mortDefense.push(persoMort)
        }
    }
    console.log(duel)

    if (persoMort == attackAleatoire) {
        if (Math.random() <= 0.6) {
            spike = true
        }
    }
}

//---------------------------------------------------------
//Tant que les manches gagnés sont infèrieures à 13
while (winAttack != 13 || winDefense != 13) {
    //Tant que la liste des attaquants ou des défenseurs est supérieure à 0
    while (attaquants.length > 0 || defenseurs.length > 0) {

        for (let i = 0; i < 1; i++) {
            let persoMort = duel[Math.floor(Math.random() * duel.length)] //sélectionne un des deux combattants
        
            if (duel.indexOf(persoMort) % 2 === 0) {
                // Si l'index de persoMort dans duel est pair, cela signifie que c'est un attaquant
                mortAttack.push(persoMort.nom) // Ajoute l'attaquant mort à mortAttack
                attaquants = attaquants.filter(att => att !== persoMort.nom) // Retire l'attaquant mort de la liste des attaquants
                console.log(mortAttack + ' a été tué.')
            } else { //si c'est un défenseur
                mortDefense.push(persoMort.name); // Ajoute le défenseur mort à mortDefense
                defenseurs = defenseurs.filter(def => def !== persoMort.name) // Retire le défenseur mort de la liste des défenseurs
                console.log(mortDefense + ' a été tué.')
            }
        }

        console.log("Les attaquants restants sont : " + attaquants)
        console.log("Les défenseurs restants sont : " + defenseurs)
    
        if (duel[1].name === defenseAleatoire) {
            if (Math.random() <= 0.6) {
                spike = true
                console.log("Le spike a été amorcé.")
            } else {
                spike = false
                console.log("Le spike n'a pas été amorcé.")
            }
        }

        if (spike) {
            let resultatDuel = Math.random()
            if (resultatDuel <= 0.7) {
                console.log(`L'attaquant ${attackAleatoire} remporte le duel.`)
                attaquants = attaquants.filter(att => att !== attackAleatoire)
                mortAttack.push(attackAleatoire)
            } else {
                console.log(`Le défenseur ${defenseAleatoire} tue l'attaquant.`)
                attaquants = attaquants.filter(att => att !== attackAleatoire)
                mortAttack.push(attackAleatoire)
            }
            if (resultatDuel <= 0.5) {
                console.log(`L'attaquant ${attackAleatoire} remporte le duel.`)
            } else {
                console.log(`Le défenseur ${defenseAleatoire} remporte le duel.`)
            }
        }
    }
}