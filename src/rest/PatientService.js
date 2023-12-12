import {apiRequests as apiRequest, apiRequests} from "./ApiRequests";


const serverUrl = "http://localhost:5003";
export const PatientService = {
    searchPatient,
    getPatientInfo,
    getAllPatients,
    addObservation,
    addCondition,
    getPatientDetails,
    getPatientInfoById,
    getEncounterDetails, // Lägg till den nya funktionen
    getObservationsByEncounter, // Lägg till den nya funktionen
    addEncounter
};

// Implementera de nya funktionerna
async function getEncounterDetails(encounterId) {


    const url = `${serverUrl}/encounter/${encounterId}/`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return { ok: true, status: response.status, response: await response.json() };
}

async function getObservationsByEncounter(encounterId) {
    const url = `${serverUrl}/encounter/${encounterId}/observations`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return { ok: true, status: response.status, response: await response.json() };
}

async function searchPatient (firstName, lastName) {

    const url = `${serverUrl}/patient/search?firstName=${firstName}&lastName=${lastName}`;

  //  let body = JSON.stringify({firstName: firstName, lastName : lastName});
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
        return { ok: true, status: response.status, response: await response.json() };
}
async function getPatientDetails(id)
{
    const url = `${serverUrl}/patient/${id}/details`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return { ok: true, status: response.status, response: await response.json() };
}

async function getPatientInfo(userId) {
    const url = `${serverUrl}/patient/profile?userId=${userId}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return { ok: true, status: response.status, response: await response.json() };
}

async function getAllPatients() {
    const url = `${serverUrl}/patient/`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return { ok: true, status: response.status, response: await response.json() };
}

async function addObservation(data) {
    let url = serverUrl + `/observation/`;
    let body = JSON.stringify(data);
    let response = await apiRequests.sendRequest(url, apiRequests.postRequest(body))
    if (response.ok) {
        return {ok: true, status: response.status, response: response.response}
    } else {
        return {ok: false, status: response.status, response: "Failed to add observation"}
    }
}

async function addEncounter(data) {
    let url = serverUrl + `/encounter`;
    let body = JSON.stringify(data);
    let response = await apiRequests.sendRequest(url, apiRequests.postRequest(body))
    if (response.ok) {
        return {ok: true, status: response.status, response: response.response}
    } else {
        return {ok: false, status: response.status, response: "Failed to add encounter"}
    }
}

async function addCondition(data) {
    let url = serverUrl + `/condition/`;
    let body = JSON.stringify(data);
    let response = await apiRequests.sendRequest(url, apiRequests.postRequest(body))
    if (response.ok) {
        return {ok: true, status: response.status, response: response.response}
    } else {
        return {ok: false, status: response.status, response: "Failed to add condition"}
    }
}
async function getPatientInfoById()
{
    const id = localStorage.getItem("userId");
    const url = `${serverUrl}/patient/user/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return { ok: true, status: response.status, response: await response.json() };
}
