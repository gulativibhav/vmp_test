var axios = require('axios')
var fetch  = require('node-fetch')
var images = require('./urlList.json')
var slicedURLs

function getAxiosList(numberOfURLs, state) {
    if(state === 'random') {
        var randomUrls = (images.urls).sort( function() { return 0.5 - Math.random() } )
        slicedURLs = randomUrls.slice(0, numberOfURLs)
    }
    else {
        slicedURLs = (images.urls).slice(0,numberOfURLs)
    }
    var axiosArray =  (slicedURLs).map((val, index, arr) => {
        return axios.get(val)
    })
    return axiosArray
}

function hitOne() {
    axios.get('https://vmp-cms-preprod.telkomsel.com/sites/default/files/viu/banner_hdpi_12.-my-love-from-the-star.jpg')
  .then( (response)=> {
      console.log('RESPONSE: ' + response.status + '\nURL: ' + response.config.url + '\n\n\n')
  })
  .catch( (err) => {
      console.log(err)
  })
}

function hitMultiple(numberOfURLs, state) {
    axios.all(getAxiosList(numberOfURLs, state))
    .then( (response) => {
        response.forEach(element => {
            console.log('RESPONSE: ' + element.status + '\nURL: ' + element.config.url + '\n\n\n')
        })
    })
    .catch( (err) => {
        console.log(err)
        console.log('unable to fetch')
    })
}

const numberOfURLs = process.argv[2]
const state = process.argv[3]
hitMultiple(numberOfURLs, state)
// getAxiosList(numberOfURLs, state)


// ####### USING ASYNC #######


// const async = require('async')
// const request = require('request')

// function httpGet(url, callback) {
//     const options = {
//         url :  url,
//         json : true
//     }
//     request(options,
//     function(err, res, body) {
//         callback(err, body)
//     }
//   )
// }

// async.map(images.urls, httpGet, function (err, res){
//     if (err) return console.log(err)
//     console.log('success')
// })


// ####### USING PROMISES #######


// let requests = (images.urls).map(url => fetch(url))

// // Promise.all waits until all jobs are resolved
// Promise.all(requests)
//   .then(responses => {
//       console.log('success')
//   })
//   .catch( (err) => {
//       console.log(err)
//       console.log('unable to fetch')
//   })
