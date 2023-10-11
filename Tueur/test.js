class Survivant {
    constructor(prenoms, personnages, pourcentages) {
        this.prenoms = prenoms
        this.personnages = personnages
        this.pourcentages = pourcentages
    }
}

let tueur = {
    name : 'Jason',
    hp : 100
}

let liste = []


// let personnages = ['Le nerd', 'Le sportif', 'Le pompier', 'Le policier', 'Le pêcheur']
// let prenoms = ['Noah', 'Antoine', 'Yani', 'Léo', 'Dimitri']
let pourcentages = ["mort: 0.4", "esquive: 0.3", "degats: 0.3"]

// let mort = 0.4
// let esquive = 0.3
// let degats = 0.3

// let randomPerso = new Survivant(prenoms, personnages, pourcentages)

// for (let i = 0; i < 5; i ++) {
//     let indexAleatoire = Math.floor(Math.random() * 5)
//     let aleatoireIndex = Math.floor(Math.random() * 3)
//     let nomAleatoire = this.prenoms[indexAleatoire]
//     let surnomAleatoire = this.personnages[indexAleatoire]
//     let pourcentAleatoire = this.pourcentages[aleatoireIndex]
//     // liste.push(nomAleatoire, surnomAleatoire, pourcentAleatoire)
//     liste.push(new Survivant(nomAleatoire, surnomAleatoire, pourcentAleatoire))
//     console.log(liste)
// }

for (let i = 0; i < 1; i ++) {
    let nomAleatoire = Math.floor(Math.random() * 5)
    let pourcentAleatoire = Math.floor(Math.random() * 3)
    // liste.push(nomAleatoire, surnomAleatoire, pourcentAleatoire)
    liste.push(new Survivant(nomAleatoire, this.personnages, pourcentAleatoire))
    console.log(liste)
}

const Noah = new Survivant('Noah', 'Le nerd', pourcentAleatoire)

// while (tueur.hp > 0 || liste.length > 0) {
//     console.log(liste)
//     let indexMort = -1

//     for (let i = 0; i < liste.length; i ++) {
//         if (liste[i].pourcentage === "mort: 0.4") {
//             indexMort = i
//             break
//         }
//     }

//     if (indexMort !== -1) {
//         console.log('Jason a tué ' + liste[indexMort].nom + '.')
//         liste.splice(indexMort, 1)
//     }
// }