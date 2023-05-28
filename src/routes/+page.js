/** @type {import('../$types').PageLoad} */

const INFOJOBS_APIKEY = import.meta.env.INFOJOBS_APIKEY
export function load(){
    // const clientId = "2a40fd33f54a4d1aa92e6f87e8cf6d2e"
    // const clientScrt = "DBnuxBlMwBb0LCU1pRhmPnyWkI/8UacIeUTm8MZ9p0q7ss8JiT"
    fetch('https://api.infojobs.net/api/6/candidate', {headers: {'Authorization': 'Basic ' + INFOJOBS_APIKEY}}).then((res) => res.json()).then((data) => {
      console.log(data)
    })
}