
const BASE_URL = "http://localhost:5000"

function encodeURL(url, params) {
    let esc = encodeURIComponent;
    return query = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
}

export function uploadStatus(lat, long, dest_lat, dest_long, penn_id) {
    fetch(BASE_URL+"/upload-status", {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            lat,
            long,
            dest_lat,
            dest_long,
            penn_id
        }),
    });
}

export function getFriend(penn_id) {
    return fetch(encodeURL(BASE_URL+"/get-friend", {penn_id})).then(response => {
        response.json()
    })
}