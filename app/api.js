
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

export function addUser(email, password) {
    return fetch("https://kusti8.auth0.com/api/v2/users", {
        method: "POST",
        headers: {'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFUWkRNelJET1RaRE56QkRRVGcxTWpNeE16WkdNek5CTWpNNU5ETTBOMEl5UlRoRU1VUXhOZyJ9.eyJpc3MiOiJodHRwczovL2t1c3RpOC5hdXRoMC5jb20vIiwic3ViIjoiZGg0dlZSbWI5STFPRWhPVTN2dkxWRjJKeGxxU2R5MWxAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8va3VzdGk4LmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNTM2NDA2NTk1LCJleHAiOjE1Mzg5OTg1OTUsImF6cCI6ImRoNHZWUm1iOUkxT0VoT1UzdnZMVkYySnhscVNkeTFsIiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgY3JlYXRlOmNsaWVudF9ncmFudHMgZGVsZXRlOmNsaWVudF9ncmFudHMgdXBkYXRlOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBjcmVhdGU6dXNlcl90aWNrZXRzIHJlYWQ6Y2xpZW50cyB1cGRhdGU6Y2xpZW50cyBkZWxldGU6Y2xpZW50cyBjcmVhdGU6Y2xpZW50cyByZWFkOmNsaWVudF9rZXlzIHVwZGF0ZTpjbGllbnRfa2V5cyBkZWxldGU6Y2xpZW50X2tleXMgY3JlYXRlOmNsaWVudF9rZXlzIHJlYWQ6Y29ubmVjdGlvbnMgdXBkYXRlOmNvbm5lY3Rpb25zIGRlbGV0ZTpjb25uZWN0aW9ucyBjcmVhdGU6Y29ubmVjdGlvbnMgcmVhZDpyZXNvdXJjZV9zZXJ2ZXJzIHVwZGF0ZTpyZXNvdXJjZV9zZXJ2ZXJzIGRlbGV0ZTpyZXNvdXJjZV9zZXJ2ZXJzIGNyZWF0ZTpyZXNvdXJjZV9zZXJ2ZXJzIHJlYWQ6ZGV2aWNlX2NyZWRlbnRpYWxzIHVwZGF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgZGVsZXRlOmRldmljZV9jcmVkZW50aWFscyBjcmVhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIHJlYWQ6cnVsZXMgdXBkYXRlOnJ1bGVzIGRlbGV0ZTpydWxlcyBjcmVhdGU6cnVsZXMgcmVhZDpydWxlc19jb25maWdzIHVwZGF0ZTpydWxlc19jb25maWdzIGRlbGV0ZTpydWxlc19jb25maWdzIHJlYWQ6ZW1haWxfcHJvdmlkZXIgdXBkYXRlOmVtYWlsX3Byb3ZpZGVyIGRlbGV0ZTplbWFpbF9wcm92aWRlciBjcmVhdGU6ZW1haWxfcHJvdmlkZXIgYmxhY2tsaXN0OnRva2VucyByZWFkOnN0YXRzIHJlYWQ6dGVuYW50X3NldHRpbmdzIHVwZGF0ZTp0ZW5hbnRfc2V0dGluZ3MgcmVhZDpsb2dzIHJlYWQ6c2hpZWxkcyBjcmVhdGU6c2hpZWxkcyBkZWxldGU6c2hpZWxkcyB1cGRhdGU6dHJpZ2dlcnMgcmVhZDp0cmlnZ2VycyByZWFkOmdyYW50cyBkZWxldGU6Z3JhbnRzIHJlYWQ6Z3VhcmRpYW5fZmFjdG9ycyB1cGRhdGU6Z3VhcmRpYW5fZmFjdG9ycyByZWFkOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGRlbGV0ZTpndWFyZGlhbl9lbnJvbGxtZW50cyBjcmVhdGU6Z3VhcmRpYW5fZW5yb2xsbWVudF90aWNrZXRzIHJlYWQ6dXNlcl9pZHBfdG9rZW5zIGNyZWF0ZTpwYXNzd29yZHNfY2hlY2tpbmdfam9iIGRlbGV0ZTpwYXNzd29yZHNfY2hlY2tpbmdfam9iIHJlYWQ6Y3VzdG9tX2RvbWFpbnMgZGVsZXRlOmN1c3RvbV9kb21haW5zIGNyZWF0ZTpjdXN0b21fZG9tYWlucyByZWFkOmVtYWlsX3RlbXBsYXRlcyBjcmVhdGU6ZW1haWxfdGVtcGxhdGVzIHVwZGF0ZTplbWFpbF90ZW1wbGF0ZXMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.nRPn0xkoMeie-pWZbNvBD5Sy95dGUxNSu4Bg8KGXP-HQVlSFJDm8DywXvioVsyDFV2QCrgWN3G2mhbSeAhcyZ1ybYA00L2sHaEQSEmxua4O6N9vUZVJKzW--c-oEk_8LLE2BrEX1EjPHGiAP6FSk0OhNfOqMPCKJtbA5qxpvyQNajVNa4jJfqptMY7K1iwfNL2YS7tCzsX8aU2QKJqoknxcubvidGmSyMOKRajtuBCNQUcCV_GyciLkj_F7MttcHT_CcU7yWG6-VrMKOXqzilkFqXXwY3UFG6nzjahFIAtSfc93heKxplwlxCgSv14oI93XiY63Jg3SX9Hnbwb11dQ'},
        body: JSON.stringify({
            connection: "Username-Password-Authentication",
            email,
            password,
            email_verified: false
        })
    }).then(console.log).catch(console.log)
}