class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
        this.turn = 1;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

   

    

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }
    
    getScore()
    {
        var player1scoreRef = database.ref('players/player1/score');
        player1scoreRef.on("value", (data) => {
            player1score = data.val();
        })
        var player2scoreRef = database.ref('players/player2/score');
        player2scoreRef.on("value", (data) => {
            player2score = data.val();
        })        
    }

    getTurn()
    {
        var TurnCountRef = database.ref('Turn');
        TurnCountRef.on("value", (data) => {
            turning = data.val();
        })
    }

    updateTurn()
    {
        database.ref('/').update({
            Turn: this.turn
        });
    }
    
}
