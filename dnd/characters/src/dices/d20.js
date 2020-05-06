export default {
    roll (numberOfDice, bonus) {
        numberOfDice = numberOfDice || 1
        bonus = bonus || 0
        return numberOfDice * Math.floor(Math.random() * 20) + bonus
    }
}