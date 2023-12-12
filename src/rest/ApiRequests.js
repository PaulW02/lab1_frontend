
export const apiRequests = {
    getRequest,
    postRequest,
    deleteRequest,
    putRequest,
    sendRequest
}

// Help functions
function getRequest() {
    let myHeaders = new Headers();

    return {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
}

function putRequest(json) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    return {
        method: 'PUT',
        headers: myHeaders,
        body: json,
        redirect: 'follow'
    };
}

function postRequest(json) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    return {
        method: 'POST',
        headers: myHeaders,
        body: json,
        redirect: 'follow'
    };
}

function deleteRequest(json) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    if (json === null) {
        return {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };
    }

    return {
        method: 'DELETE',
        headers: myHeaders,
        body: json,
        redirect: 'follow'
    };
}

async function sendRequest(url, requestOptions) {

    let response = await fetch(url, requestOptions)

    if (response.status === 200 || response.status === 201) {
        let resultJson = await response.json();
        return {ok: true, status: response.status, response: resultJson}
    } else if (response.status === 204) {
        return {ok: true, status: response.status}
    } else if (response.status === 401) {
        return {ok: false, status: response.status}
    } else {
        return {ok: false, status: response.status, response: "ERROR"}
    }
}