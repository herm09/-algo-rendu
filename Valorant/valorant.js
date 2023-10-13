let attaquants = ["Omen", "Phoenix", "Jett", "Fade", "Chamber"] //joueurs de l'équipe 1
let defenseurs = ["Omen", "Phoenix", "Jett", "Fade", "Chamber"] //joueurs de l'équipe 2
let winAttack = 0 //nombre de manches gagnés équipe 1
let winDefense = 0 //nombre de manches gagnés équipe 2
let spike = false //spike originellement désamorcé
let duel = [] //liste vide
let mortAttack = [] //liste des joueurs mort attaquants
let mortDefense = []
let defenseAleatoire = defenseurs[Math.floor(Math.random() * defenseurs.length)] //sélectionne aléatoirement un défenseur
let attackAleatoire = attaquants[Math.floor(Math.random() * attaquants.length)]


//Tant que les manches gagnés sont infèrieures à 13
while (winAttack != 13 || winDefense != 13) {

    for (let i = 0; i < 1; i++) {
        duel.push(attackAleatoire, defenseAleatoire)
        console.log(duel)
        console.log(attackAleatoire + " et " + defenseAleatoire + " se combattent en duel.")
    }
    //Tant que la liste des attaquants ou des défenseurs est supérieure à 0
    while (attaquants.length > 0 || defenseurs.length > 0) {

        //Duel 1
        let persoMort = duel[Math.floor(Math.random() * duel.length)] //sélectionne un des deux combattants
    
        if (persoMort == duel.attackAleatoire) {
            mortAttack.push(persoMort) //Ajoute l'attaquant mort à mortAttack
            attaquants = attaquants.splice(attackAleatoire) //Retire l'attaquant mort de la liste des attaquants
            console.log(mortAttack + ' a été tué.')
        } else { //si c'est un défenseur
            mortDefense.push(persoMort); //Ajoute le défenseur mort à mortDefense
            defenseurs = defenseurs.splice(defenseAleatoire) //Retire le défenseur mort de la liste des défenseurs
            console.log(mortDefense + ' a été tué.')
        }

        console.log("Les attaquants restants sont : " + attaquants)
        console.log("Les défenseurs restants sont : " + defenseurs)

        
        if (duel[1].name === defenseAleatoire && Math.random() <= 0.6) {
            spike = true
            console.log("Le spike a été amorcé.")
        } else {
            spike = false
            console.log("Le spike n'a pas été amorcé.")
        }

        for (let i = 0; i < 1; i++) {
            duel.push(attackAleatoire, defenseAleatoire)
            console.log(duel)
            console.log(attackAleatoire + " et " + defenseAleatoire + " se combattent en duel.")
        }

        if (spike && Math.random() <= 0.7) { //si le spike est amorcé
            mortDefense.push(persoMort.name); // Ajoute le défenseur mort à mortDefense
            defenseurs = defenseurs.filter(def => def !== persoMort.name) //Retire le défenseur mort de la liste des défenseurs
            console.log(mortDefense + ' a été tué.')
        } else {
            mortAttack.push(persoMort.nom) //Ajoute l'attaquant mort à mortAttack
            attaquants = attaquants.filter(att => att !== persoMort.nom) //Retire l'attaquant mort de la liste des attaquants
            console.log(mortAttack + ' a été tué.')
        }

        if (spike === false && Math.random() <= 0.5) {
            mortDefense.push(persoMort.name); //Ajoute le défenseur mort à mortDefense
            defenseurs = defenseurs.filter(def => def !== persoMort.name) //Retire le défenseur mort de la liste des défenseurs
            console.log(mortDefense + ' a été tué.')
        } else {
            mortAttack.push(persoMort.nom) //Ajoute l'attaquant mort à mortAttack
            attaquants = attaquants.filter(att => att !== persoMort.nom) //Retire l'attaquant mort de la liste des attaquants
            console.log(mortAttack + ' a été tué.')
        }

        break
    }
    break
}