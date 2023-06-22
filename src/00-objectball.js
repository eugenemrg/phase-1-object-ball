const homeTeamPlayers = {
    ['Alan Anderson']: {
        Number: 0,
        Shoe: 16,
        Points: 22,
        Rebounds: 12,
        Assists: 12,
        Steals: 3,
        Blocks: 1,
        ['Slam Dunks']: 1,
    },
    ['Reggie Evans']: {
        Number: 30,
        Shoe: 14,
        Points: 12,
        Rebounds: 12,
        Assists: 12,
        Steals: 12,
        Blocks: 12,
        ['Slam Dunks']: 7,
    },
    ['Brook Lopez']: {
        Number: 11,
        Shoe: 17,
        Points: 17,
        Rebounds: 19,
        Assists: 10,
        Steals: 3,
        Blocks: 1,
        ['Slam Dunks']: 15,
    },
    ['Mason Plumlee']: {
        Number: 1,
        Shoe: 19,
        Points: 26,
        Rebounds: 12,
        Assists: 6,
        Steals: 3,
        Blocks: 8,
        ['Slam Dunks']: 5,
    },
    ['Jason Terry']: {
        Number: 31,
        Shoe: 15,
        Points: 19,
        Rebounds: 2,
        Assists: 2,
        Steals: 4,
        Blocks: 11,
        ['Slam Dunks']: 1,
    },
}

const awayTeamPlayers = {
    ['Jeff Adrien']: {
        Number: 4,
        Shoe: 18,
        Points: 10,
        Rebounds: 1,
        Assists: 1,
        Steals: 2,
        Blocks: 7,
        ['Slam Dunks']: 2,
    },
    ['Bismak Biyombo']: {
        Number: 0,
        Shoe: 16,
        Points: 12,
        Rebounds: 4,
        Assists: 7,
        Steals: 7,
        Blocks: 15,
        ['Slam Dunks']: 10,
    },
    ['DeSagna Diop']: {
        Number: 2,
        Shoe: 14,
        Points: 24,
        Rebounds: 12,
        Assists: 12,
        Steals: 4,
        Blocks: 5,
        ['Slam Dunks']: 5,
    },
    ['Ben Gordon']: {
        Number: 8,
        Shoe: 15,
        Points: 33,
        Rebounds: 3,
        Assists: 2,
        Steals: 1,
        Blocks: 1,
        ['Slam Dunks']: 0,
    },
    ['Brendan Haywood']: {
        Number: 33,
        Shoe: 15,
        Points: 6,
        Rebounds: 12,
        Assists: 12,
        Steals: 22,
        Blocks: 5,
        ['Slam Dunks']: 12,
    },
}

function gameObject() {
    game = {}

    game.home = {}
    game.away = {}

    game.home.teamName = 'Brooklyn Nets'
    game.home.colors = ['Black', 'White']
    game.home.players = { ...homeTeamPlayers }

    game.away.teamName = 'Charlotte Hornets'
    game.away.colors = ['Turquoise', 'Purple']
    game.away.players = { ...awayTeamPlayers }

    return game;
}

function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']
}

function numPointsScored(playerName) {
    let object = gameObject()
    if (Object.keys(object.home.players).includes(playerName)) {
        return object.home.players[playerName].Points
    } else if (Object.keys(object.away.players).includes(playerName)) {
        return object.away.players[playerName].Points
    }
}

function shoeSize(playerName) {
    let teams = gameObject()
    for (const team in teams) {
        let players = teams[team]['players']
        for (const player in players) {
            if (player === playerName) return players[player]['Shoe']
        }
    }
}

function teamColors(teamName) {
    let object = gameObject()
    for (const key in object) {
        return object[key].colors
    }
}

function teamNames() {
    let teams = gameObject()
    let names = []
    for (const team in teams) {
        names.push(teams[team]['teamName'])
    }
    return names
}

function playerNumbers(teamName) {
    let object = gameObject()
    for (const team in object) {
        if (object[team]['teamName'] === teamName) {
            let teamNumbers = []
            for (const player in object[team]['players']) {
                teamNumbers.push(object[team]['players'][player]['Number'])
            }
            return teamNumbers
        }
    }
}

function playerStats(playerName) {
    let object = gameObject()
    for (const key in object) {
        if (Object.keys(object[key]['players']).includes(playerName)) {
            return object[key]['players'][playerName]
        }
    }
}

function bigShoeRebounds() {
    let object = gameObject()
    let largestSize = 0
    let largestShoeOwnerRebounds = 'none'
    for (const key in object) {
        let players = Object.values(object[key]['players'])
        let playersSorted = players.sort((firstPlayer, secondPlayer) => firstPlayer.Shoe - secondPlayer.Shoe)
        if(playersSorted[playersSorted.length-1].Shoe > largestSize){
            largestSize = playersSorted[playersSorted.length-1].Shoe
            largestShoeOwnerRebounds = playersSorted[playersSorted.length-1].Rebounds
        }
    }
    return largestShoeOwnerRebounds
}

console.log(gameObject());
console.log(homeTeamName());
console.log(playerNumbers('Brooklyn Nets'));