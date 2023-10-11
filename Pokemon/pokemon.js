class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }
    


    getisLucky() {
        let random = Math.random()
        if(random < this.luck) {
            return true
        } else {
            return false
        }
    }

    getattackPokemon(poke1, poke2) {
        let degats = poke1.attack - poke2.defense
        console.log(this.name + ' a infligé ' + degats + ' de dégats')
        poke2.hp = poke2.hp - degats
        if (poke2.hp < 0) {
            console.log(poke2.name + ' a ' + '0 HP.' + ' Il est mort.')
        } else {
            console.log(poke2.name + ' a ' + poke2.hp + ' de HP')
        }
    }

}

let noah = new Pokemon("Noah", 36, 12, 1300, 0.6)
let antoine = new Pokemon("Antoine", 30, 10, 1159, 0.5)


while (noah.hp > 0 && antoine.hp > 0) {
    if(noah.getisLucky(true)) {
        console.log("Noah attaque")
        noah.getattackPokemon(noah, antoine)
    } else {
        console.log("Noah est faible, noah n'attaque pas")
    }
    if (noah.hp < 0) {
        console.log("Noah est mort")
        break
    }
    if(antoine.getisLucky(true)) {
        console.log("Antoine attaque. Antoine est le boss, Noah est une merde.")
        antoine.getattackPokemon(antoine, noah)
    } else {
    }
    if (antoine.hp < 0) {
        break
    }
}
