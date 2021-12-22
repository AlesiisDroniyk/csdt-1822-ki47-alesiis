
function getTopCors(ballCord, boardCord) {
    if (ballCord <= boardCord) {
        return 1
    }
}

function getBottomCors(ballCord, boardCord) {
    if (ballCord >= boardCord) {
        return  0;
    }
}

function isPaddle1MissBall(ballCoords, paddle1Coords) {
    return (ballCoords.left <= paddle1Coords.right &&
        ballCoords.top >= paddle1Coords.top &&
        ballCoords.bottom <= paddle1Coords.bottom)
}

function isPaddle2MissBall(ballCoords, paddle1Coords) {
    return (ballCoords.right >= paddle1Coords.left &&
        ballCoords.top >= paddle1Coords.top &&
        ballCoords.bottom <= paddle1Coords.bottom)
}

function isLoseGame(ballCoords, boardCords) {
    return (ballCoords.left <= boardCords.left ||
        ballCoords.right >= boardCords.right)
}


module.exports = {
    getTopCors,
    getBottomCors,
    isPaddle1MissBall,
    isPaddle2MissBall,
    isLoseGame
}
