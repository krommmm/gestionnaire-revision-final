import { HOST } from "../host.js";

export async function getLessons() {
    try {
        const preRes = await fetch(`${HOST}/api/lessons`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
        });
        const res = await preRes.json();
        return {
            status: preRes.status,
            ok: preRes.ok,
            data: res
        };
    } catch (err) {
        console.log(err);
    }
}


export async function getOneLesson(id) {
    try {
        const preRes = await fetch(`${HOST}/api/lessons/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
        });
        const res = await preRes.json();
        return {
            status: preRes.status,
            ok: preRes.ok,
            data: res
        };
    } catch (err) {
        console.log(err);
    }
}

export async function createLesson(data) {
    try {
        const preRes = await fetch(`${HOST}/api/lessons`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(data),
        });
        const res = await preRes.json();
        return {
            status: preRes.status,
            ok: preRes.ok,
            data: res
        };
    } catch (err) {
        console.log(err);
    }
}

export async function updateLesson(id, data) {
    try {
        const preRes = await fetch(`${HOST}/api/lessons/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(data),
        });
        const res = await preRes.json();
        return {
            status: preRes.status,
            ok: preRes.ok,
            data: res
        };
    } catch (err) {
        console.log(err);
    }
}

export async function deleteLesson(id) {
    try {
        const preRes = await fetch(`${HOST}/api/lessons/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
        });
        const res = await preRes.json();
        return {
            status: preRes.status,
            ok: preRes.ok,
            data: res
        };
    } catch (err) {
        console.log(err);
    }
}