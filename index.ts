// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class httpSender {
    options?: Options;
    constructor(options?: Options) {
        this.options = options;
    }
    async get(url: string, auth?: string, ctype: string = 'application/json') {
        if (!this.options && !auth) return await fetch(url, {
            headers: { 'Content-type': ctype }
        });
        else if (!this.options) return await fetch(url, {
            headers: { 'Authorization': auth!, 'Content-type': ctype }
        });
        else if (!this.options!.authorization && !auth) return await fetch(url, {
            headers: { 'Content-type': this.options!.content_type! || ctype }
        });
        return await fetch(url, {
            headers: { 'Authorization': auth! || this.options!.authorization!, 'Content-type': this.options!.content_type! || ctype }
        });
    }
    async post(url: string, body: BodyInit, auth?: string, ctype: string = 'application/json') {
        if (!this.options && !auth) return await fetch(url, {
            method: 'POST',
            headers: { 'Content-type': ctype },
            body: JSON.stringify(body)
        });
        else if (!this.options) return await fetch(url, {
            method: 'POST',
            headers: { 'Authorization': auth!, 'Content-type': ctype },
            body: JSON.stringify(body)
        });
        else if (!this.options!.authorization && !auth) return await fetch(url, {
            method: 'POST',
            headers: { 'Content-type': this.options!.content_type! || ctype },
            body: JSON.stringify(body)
        });
        return await fetch(url, {
            method: 'POST',
            headers: { 'Authorization': auth! || this.options!.authorization!, 'Content-type': this.options!.content_type! || ctype },
            body: JSON.stringify(body)
        });
    }
    async patch(url: string, body: BodyInit, auth?: string, ctype: string = 'application/json') {
        if (!this.options && !auth) return await fetch(url, {
            method: 'PATCH',
            headers: { 'Content-type': ctype },
            body: JSON.stringify(body)
        });
        else if (!this.options) return await fetch(url, {
            method: 'PATCH',
            headers: { 'Authorization': auth!, 'Content-type': ctype },
            body: JSON.stringify(body)
        });
        else if (!this.options!.authorization && !auth) return await fetch(url, {
            method: 'PATCH',
            headers: { 'Content-type': this.options!.content_type! || ctype },
            body: JSON.stringify(body)
        });
        return await fetch(url, {
            method: 'PATCH',
            headers: { 'Authorization': auth! || this.options!.authorization!, 'Content-type': this.options!.content_type! || ctype },
            body: JSON.stringify(body)
        });
    }
    async put(url: string, body: BodyInit, auth?: string, ctype: string = 'application/json') {
        if (!this.options && !auth) return await fetch(url, {
            method: 'PUT',
            headers: { 'Content-type': ctype },
            body: JSON.stringify(body)
        });
        else if (!this.options) return await fetch(url, {
            method: 'PUT',
            headers: { 'Authorization': auth!, 'Content-type': ctype },
            body: JSON.stringify(body)
        });
        else if (!this.options!.authorization && !auth) return await fetch(url, {
            method: 'PUT',
            headers: { 'Content-type': this.options!.content_type! || ctype },
            body: JSON.stringify(body)
        });
        return await fetch(url, {
            method: 'PUT',
            headers: { 'Authorization': auth! || this.options!.authorization!, 'Content-type': this.options!.content_type! || ctype },
            body: JSON.stringify(body)
        });
    }
    async delete(url: string, body?: BodyInit, auth?: string, ctype: string = 'application/json') {
        if (!this.options && !auth) return await fetch(url, {
            method: 'DELETE',
            headers: { 'Content-type': ctype },
            body: JSON.stringify(body)
        });
        else if (!this.options) return await fetch(url, {
            method: 'DELETE',
            headers: { 'Authorization': auth!, 'Content-type': ctype },
            body: JSON.stringify(body)
        });
        else if (!this.options!.authorization && !auth) return await fetch(url, {
            method: 'DELETE',
            headers: { 'Content-type': this.options!.content_type! || ctype },
            body: JSON.stringify(body)
        });
        return await fetch(url, {
            method: 'DELETE',
            headers: { 'Authorization': auth! || this.options!.authorization!, 'Content-type': this.options!.content_type! || ctype },
            body: JSON.stringify(body)
        });
    }
}
export async function toJSON(res: Response) {
    return await res.json();
}
export async function toText(res: Response) {
    return await res.text();
}
interface Options {
    authorization?: string,
    content_type?: string
}