
const BASE_URL = "http://localhost:5000"

function encodeURL(params) {
    let esc = encodeURIComponent;
    return query = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
}

export function uploadStatus(lat, long, dest_lat, dest_long, penn_id) {
    return fetch(BASE_URL+"/upload-status/", {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeURL({
            lat,
            long,
            dest_lat,
            dest_long,
            penn_id
        }),
    }).then(result => {
        console.log(result)
    }).catch(console.log)
}

export function getFriend(penn_id) {
    return fetch(BASE_URL+"/get-friend/?"+encodeURL({penn_id}), {
        headers: {"Content-Type": "application/json"} }).then(response => {
        return response.json()
    }).catch(console.log)
}