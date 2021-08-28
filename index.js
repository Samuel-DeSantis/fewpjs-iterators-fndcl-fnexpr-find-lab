function superbowlWin (record) {
    if (record.find ( game => game.result === 'W')) {
        return record.find ( game => game.result === 'W').year
    } else {
        return undefined
    }
}