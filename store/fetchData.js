
const BASE_URL = "https://api.itbook.store/1.0/"

export async function getData (endpoint) {
    const res = await fetch(BASE_URL + endpoint);
    const data = res.json()
    return data
    // console.log(data);
    
}