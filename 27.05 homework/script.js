function getAlert() {
    let colors = ["red", "blue", "black"];
    alert(colors[1]);
}

let actors = [
    {
        name: 'Brad',
        surname: 'Pitt',
        film: 'Fight Club',
        age: 60
    },
    {
        name: 'Kit',
        surname: 'Harington',
        film: 'Eternals',
        age: 37
    },
    {
        name: 'Liam',
        surname: 'Hemsworth',
        film: 'The Hunger Games',
        age: 34
    },
    {
        name: 'Nicole',
        surname: 'Kidman',
        film: 'The Others',
        age: 56
    },
    {
        name: 'Rose',
        surname: 'Leslie',
        film: 'The Last Witch Hunter',
        age: 37
    },
    {
        name: 'Johnny',
        surname: 'Depp',
        film: 'Pirates of the Caribbean: The Curse of the Black Pearl ',
        age: 60
    },

    {
        name: 'Saoirse',
        surname: 'Ronan',
        film: 'Little Women',
        age: 30
    },

    {
        name: 'Emilia',
        surname: 'Clarke',
        film: 'Terminator Genisys',
        age: 37
    },
    {
        name: 'Lucas',
        surname: 'Hedges',
        film: 'Boy Erased',
        age: 20
    },
    {
        name: 'Elle',
        surname: 'Fanning',
        film: 'Maleficent: Mistress of Evil',
        age: 26
    }
]

function getCheck() {
    for (let i = 0; i < actors.length; i++) {
        if (actors[i].age <= 35) {
            console.log(actors[i].name + " " + actors[i].surname);
        } else if (actors[i].age > 40) {
            console.log(actors[i].name + " " + actors[i].surname + " " + actors[i].age);
        }
    }
}