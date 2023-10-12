let tueur = {
    nom: 'Jason',
    hp: 100
}

let liste = []
let listeMort = []
let personnages = ['Le nerd', 'Le sportif', 'Le pompier', 'Le policier', 'Le pêcheur']
let prenoms = ['Noah', 'Antoine', 'Yani', 'Léo', 'Dimitri']
let pourcentages = ["mort: 0.4", "esquive: 0.3", "degats: 0.3"]

class Survivant {
    constructor(nom, pourcentage) {
        this.nom = prenoms[nom]
        this.surnom = personnages[nom]
        this.pourcentage = pourcentages[pourcentage]
        this.estMort = false
    }
}

class Murderer {
    constructor(nom, health) {
        this.nom = nom
        this.health = health
    }
}

for (let i = 0; i < 5; i++) {
    let pourcentAleatoire = Math.floor(Math.random() * 3)
    liste.push(new Survivant(i, pourcentAleatoire))
}

while (tueur.hp > 0 && liste.length > 0) {
    let survivantsNonMorts = liste.filter(survivant => !survivant.estMort)

    if (survivantsNonMorts.length === 0) {
        break //Si tous les survivants sont morts, la boucle s'arrête
    }

    let i = Math.floor(Math.random() * survivantsNonMorts.length) //Sélectionne un survivant vivant aléatoirement

    let pourcentageMort = survivantsNonMorts[i].pourcentage.split(":")[1] //divise la string pour ne prendre que le chiffre
    pourcentageMort = parseFloat(pourcentageMort) //transforme le pourcentage en chiffre

    let randomValue = Math.random()

    if (randomValue <= pourcentageMort) {
        // Le survivant est mort
        survivantsNonMorts[i].estMort = true
        listeMort.push(survivantsNonMorts[i])
        console.log('Jason a tué ' + survivantsNonMorts[i].nom + ' (' + survivantsNonMorts[i].surnom + ').')
    } else if (randomValue > pourcentageMort && randomValue <= pourcentageMort + 0.3) {
        // Le survivant esquive
        console.log(survivantsNonMorts[i].nom + ' (' + survivantsNonMorts[i].surnom + ') a esquivé Jason. Il lui a infligé 10 de dégâts.')
        tueur.hp -= 10
        console.log('Il reste ' + tueur.hp + ' points de vie à Jason')
    } else {
        // Le survivant inflige des dégâts à Jason
        console.log(survivantsNonMorts[i].nom + ' (' + survivantsNonMorts[i].surnom + ') a infligé 15 de dégâts à Jason.')
        tueur.hp -= 15
        console.log('Il reste ' + tueur.hp + ' points de vie à Jason')
    }
}

if (liste.length === 0) {
    console.log('Jason a gagné, tous les survivants sont morts!')
} else if (tueur.hp <= 0) {
    console.log('Jason est mort, les survivants ont gagné!')
} else {
    console.log('Survivants vivants : ', liste.filter(survivant => !survivant.estMort))
    console.log('Survivants morts : ', listeMort)

    if (listeMort.length > 0) {
        console.log('Personnages morts :')
        for (let mort of listeMort) {
            console.log(mort.nom + ' (' + mort.surnom + ')')
        }
    }
}

console.log('Survivants vivants : ', liste.filter(survivant => !survivant.estMort))
console.log('Survivants morts : ', listeMort)