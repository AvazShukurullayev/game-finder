// API key - c3a05e48bb5144feafe4c31d6c10eff0

const api_key = "c3a05e48bb5144feafe4c31d6c10eff0"

//Base URL
const base_url = "https://api.rawg.io/api/"

//Getting current dates
const getMonth = () => {
    const month = new Date().getMonth() + 1
    if (month < 10) return `0${month}`
    else return month
}

const getDay = () => {
    const day = new Date().getDay()
    if (day < 10) return `0${day}`
    else return day
}

const currentYear = new Date().getFullYear()
const currentMonth = getMonth()
const currentDay = getDay()
// Current Date
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
//Last year
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
// Next year
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

//Popular Games ->> otgan yildan hozirgacha topiladigan oyinlar
const popular_games = `games?key=${api_key}&dates=${lastYear},${currentYear}&ordering=-rating&page_size=10`

const popularGames = () => {
    return `${base_url}${popular_games}`
}
console.log(popularGames())
