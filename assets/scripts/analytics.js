
const intervalId = setInterval(() => {
    console.log('sending analytics...')
},2000)

document.getElementById('stop-analytics')
    .addEventListener('click',() => {
        clearTimeout(intervalId)
    })
