import {apiRequests as apiRequest, apiRequests} from "./ApiRequests";


const serverUrl = "http://localhost:8080/search";
export const SearchService = {
    searchPatient,
    getAllPatients,
};

// Implementera de nya funktionerna

async function searchPatient(name, condition, encounterDate) {

    const url = `${serverUrl}/patients?name=${name}&condition=${condition}&encounterDate=${encounterDate}`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
        return { ok: true, status: response.status, response: await response.json() };
}

async function getAllPatients() {
    const url = `${serverUrl}/patients/`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return { ok: true, status: response.status, response: await response.json() };
}
