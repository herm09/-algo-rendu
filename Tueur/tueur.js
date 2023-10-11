let tueur = {
    name : 'Jason',
    hp : 100
}

let liste = []
let personnages = ['Le nerd', 'Le sportif', 'Le pompier', 'Le policier', 'Le pêcheur']
let prenoms = ['Noah', 'Antoine', 'Yani', 'Léo', 'Dimitri']
let pourcentages = ["mort: 0.4", "esquive: 0.3", "degats: 0.3"]

class Survivant {
    constructor(nom, surnom, pourcentage) {
        this.nom = prenoms[nom]
        this.surnom = personnages[nom]
        this.pourcentage = pourcentages[pourcentage]
    }
}

for (let i = 0; i < 5; i++) {
    let nomAleatoire = Math.floor(Math.random() * 5)
    let pourcentAleatoire = Math.floor(Math.random() * 3)
    liste.push(new Survivant(nomAleatoire, nomAleatoire, pourcentAleatoire))
}

console.log(liste)

while (tueur.hp <= 0 && liste.length <= 0) {
    console.log(liste)
    let indexMort = -1

    for (let i = 0; i < liste.length; i ++) {
        if (liste[i].pourcentage === "mort: 0.4") {
            indexMort = i
            liste.splice(indexMort, 1)
            console.log('Jason a tué ' + liste[indexMort].nom + '.')
            break
        } else if (liste[i].pourcentage === "esquive: 0.3") {
            console.log(liste[i].nom + ' a esquivé Jason. Il lui a infligé 10 de dégats.');
            tueur.hp -= 10
            console.log(tueur.hp)
        } else {
            indexMort = i
            liste.splice(i, 1);
            tueur.hp -= 15
            console.log(liste[indexMort].nom + ' a infligé 15 de dégats mais est mort.')
            break
        }
    }
}
