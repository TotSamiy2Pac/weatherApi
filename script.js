const address = document.querySelector('#address')
const dataS = document.querySelector('#date')
const oclock = document.querySelector('#oclock')
const weather = document.querySelector('#weather')
const deelsLike = document.querySelector('#feelsLike')
const humidity = document.querySelector('#humidity')
const wind = document.querySelector('#wind')
const input = document.querySelector('#input')

const date = new Date()
const options = {
    weekday: 'long',
    // era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

// input.value = 'london'
const weatherApi = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=4e27c5e0129d4df5a65181548233007&q=${input.value}`)
        .then(res => res.json())
        .then(data => {
            address.innerText = `${data.location.name}, ${data.location.country}`
            dataS.innerText = date.toLocaleString('en-US', options)
            oclock.innerText = `${data.location.localtime.slice(10)}`
            weather.innerHTML = `${data.current.temp_c} C°`
            deelsLike.innerHTML = `Feels Like: ${data.current.feelslike_c} °`
            humidity.innerHTML = `Humidity: ${data.current.humidity}`
            wind.innerHTML = `Wind: ${data.current.wind_kph} kph`
        })
}
// weatherApi()
input.addEventListener('keyup', event  => {
    if (event.code === 'Enter'){
        weatherApi()
    }
})

