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

//-----------------------------------------------------
let tueur = {
    nom: 'Jason',
    hp: 100
}

let liste = [];
let listeMort = [];
let personnages = ['Le nerd', 'Le sportif', 'Le pompier', 'Le policier', 'Le pêcheur'];
let prenoms = ['Noah', 'Antoine', 'Yani', 'Léo', 'Dimitri'];

class Survivant {
    constructor(nom, surnom, pourcentage) {
        this.nom = prenoms[nom];
        this.surnom = personnages[surnom];
        this.pourcentage = pourcentages[pourcentage];
    }
}

class Murderer {
    constructor(nom, health) {
        this.nom = nom;
        this.health = health;
    }
}

for (let i = 0; i < 5; i++) {
    let nomAleatoire = Math.floor(Math.random() * 5);
    let surnomAleatoire = Math.floor(Math.random() * 5);
    let pourcentAleatoire = Math.floor(Math.random() * 3);
    liste.push(new Survivant(nomAleatoire, surnomAleatoire, pourcentAleatoire));
}

while (tueur.hp > 0 && liste.length > 0) {
    let i = Math.floor(Math.random() * liste.length); // Sélection aléatoire d'un survivant

    // Obtenez le pourcentage de chance de mort pour le survivant actuel
    let pourcentageMort = liste[i].pourcentage.split(":")[1];
    pourcentageMort = parseFloat(pourcentageMort);

    if (Math.random() <= pourcentageMort) {
        // Le survivant est mort
        listeMort.push(liste[i]);
        console.log('Jason a tué ' + liste[i].surnom + ' (' + liste[i].nom + ').');
        liste.splice(i, 1);
    } else {
        // Le survivant a survécu
        console.log(liste[i].surnom + ' (' + liste[i].nom + ') a survécu à Jason.');
        tueur.hp -= 10; // Par exemple, Jason inflige 10 points de dégâts
        console.log('Il reste ' + tueur.hp + ' points de vie à Jason');
    }
}

console.log('La partie est terminée. Jason ' + (tueur.hp <= 0 ? 'est mort.' : 'a gagné.'));
console.log('Survivants restants : ', liste);
console.log('Survivants morts : ', listeMort);
