import {apiRequests} from "./ApiRequests";

const serverUrl = "http://localhost:5001";

export const userService = {
    registerUser,
    loginUser,
    getAllUsers,
    getAllDoctors,
    getAllEmployees,
    getAllPatients,
}

async function registerUser(data) {
    let url = serverUrl + `/user/`;
    let body = JSON.stringify(data);
    let response = await apiRequests.sendRequest(url, apiRequests.postRequest(body))
    if (response.ok) {
        return {ok: true, status: response.status, response: response.response}
    } else {
        return {ok: false, status: response.status, response: "Failed to register"}
    }
}

async function loginUser(data) {
    let url = serverUrl + `/user/login`;
    let body = JSON.stringify(data);
    let response = await apiRequests.sendRequest(url, apiRequests.postRequest(body))
    if (response.ok) {
        return {ok: true, status: response.status, response: response.response}
    } else {
        return {ok: false, status: response.status, response: "Failed to register"}
    }
}

async function getAllUsers() {
    let url = serverUrl + `/user/`;
    let response = await apiRequests.sendRequest(url, apiRequests.getRequest())
    if (response.ok) {
        return {ok: true, status: response.status, response: response.response}
    } else {
        return {ok: false, status: response.status, response: "Users not found"}
    }
}

async function getAllDoctors() {
    let url = serverUrl + `/user/doctors`;
    let response = await apiRequests.sendRequest(url, apiRequests.getRequest())
    if (response.ok) {
        return {ok: true, status: response.status, response: response.response}
    } else {
        return {ok: false, status: response.status, response: "Users not found"}
    }
}

async function getAllEmployees() {
    let url = serverUrl + `/user/employees`;
    let response = await apiRequests.sendRequest(url, apiRequests.getRequest())
    if (response.ok) {
        return {ok: true, status: response.status, response: response.response}
    } else {
        return {ok: false, status: response.status, response: "Users not found"}
    }
}

async function getAllPatients() {
    let url = serverUrl + `/user/patients`;
    let response = await apiRequests.sendRequest(url, apiRequests.getRequest())
    if (response.ok) {
        return {ok: true, status: response.status, response: response.response}
    } else {
        return {ok: false, status: response.status, response: "Users not found"}
    }
}
