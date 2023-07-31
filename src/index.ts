// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class httpSender {
    private options?: Options;
    constructor(options?: Options) {
        this.options = options;
    }
    async get(url: string, auth?: string, ctype: ContentTypes = 'application/json', usragent: string = 'httpSender') {
        if (!this.options && (!auth || auth.trim() == '')) return await fetch(url, {
            headers: { 'Content-type': ctype, 'User-Agent': usragent }
        });
        else if (!this.options) return await fetch(url, {
            headers: { 'Authorization': auth!, 'Content-type': ctype, 'User-Agent': usragent }
        });
        else if ((!this.options.Authorization || this.options.Authorization.trim() == '') && (!auth || auth.trim() == '')) return await fetch(url, {
            headers: { 'Content-type': this.options["Content-Type"]! || ctype, 'User-Agent': this.options["User-Agent"]! || usragent }
        });
        return await fetch(url, {
            headers: { 'Authorization': auth! || this.options.Authorization!, 'Content-type': this.options["Content-Type"]! || ctype, 'User-Agent': this.options["User-Agent"]! || usragent }
        });
    }
    async post(url: string, body: BodyInit = '', auth?: string, ctype: ContentTypes = 'application/json', usragent: string = 'httpSender') {
        if (!this.options && (!auth || auth.trim() == '')) return await fetch(url, {
            method: 'POST',
            headers: { 'Content-type': ctype, 'User-Agent': usragent },
            body: JSON.stringify(body)
        });
        else if (!this.options) return await fetch(url, {
            method: 'POST',
            headers: { 'Authorization': auth!, 'Content-type': ctype, 'User-Agent': usragent },
            body: JSON.stringify(body)
        });
        else if ((!this.options.Authorization || this.options.Authorization.trim() == '') && (!auth || auth.trim() == '')) return await fetch(url, {
            method: 'POST',
            headers: { 'Content-type': this.options["Content-Type"]! || ctype, 'User-Agent': this.options["User-Agent"]! || usragent },
            body: JSON.stringify(body)
        });
        return await fetch(url, {
            method: 'POST',
            headers: { 'Authorization': auth! || this.options.Authorization!, 'Content-type': this.options["Content-Type"]! || ctype, 'User-Agent': this.options["User-Agent"]! || usragent },
            body: JSON.stringify(body)
        });
    }
    async patch(url: string, body: BodyInit = '', auth?: string, ctype: ContentTypes = 'application/json', usragent: string = 'httpSender') {
        if (!this.options && (!auth || auth.trim() == '')) return await fetch(url, {
            method: 'PATCH',
            headers: { 'Content-type': ctype, 'User-Agent': usragent },
            body: JSON.stringify(body)
        });
        else if (!this.options) return await fetch(url, {
            method: 'PATCH',
            headers: { 'Authorization': auth!, 'Content-type': ctype, 'User-Agent': usragent },
            body: JSON.stringify(body)
        });
        else if ((!this.options.Authorization || this.options.Authorization.trim() == '') && (!auth || auth.trim() == '')) return await fetch(url, {
            method: 'PATCH',
            headers: { 'Content-type': this.options["Content-Type"]! || ctype, 'User-Agent': this.options["User-Agent"]! || usragent },
            body: JSON.stringify(body)
        });
        return await fetch(url, {
            method: 'PATCH',
            headers: { 'Authorization': auth! || this.options.Authorization!, 'Content-type': this.options["Content-Type"]! || ctype, 'User-Agent': this.options["User-Agent"]! || usragent },
            body: JSON.stringify(body)
        });
    }
    async put(url: string, body: BodyInit = '', auth?: string, ctype: ContentTypes = 'application/json', usragent: string = 'httpSender') {
        if (!this.options && (!auth || auth.trim() == '')) return await fetch(url, {
            method: 'PUT',
            headers: { 'Content-type': ctype, 'User-Agent': usragent },
            body: JSON.stringify(body)
        });
        else if (!this.options) return await fetch(url, {
            method: 'PUT',
            headers: { 'Authorization': auth!, 'Content-type': ctype, 'User-Agent': usragent },
            body: JSON.stringify(body)
        });
        else if ((!this.options.Authorization || this.options.Authorization.trim() == '') && (!auth || auth.trim() == '')) return await fetch(url, {
            method: 'PUT',
            headers: { 'Content-type': this.options["Content-Type"]! || ctype, 'User-Agent': this.options["User-Agent"]! || usragent },
            body: JSON.stringify(body)
        });
        return await fetch(url, {
            method: 'PUT',
            headers: { 'Authorization': auth! || this.options.Authorization!, 'Content-type': this.options["Content-Type"]! || ctype, 'User-Agent': this.options["User-Agent"]! || usragent },
            body: JSON.stringify(body)
        });
    }
    async delete(url: string, body?: BodyInit, auth?: string, ctype: ContentTypes = 'application/json', usragent: string = 'httpSender') {
        if (!this.options && (!auth || auth.trim() == '')) return await fetch(url, {
            method: 'DELETE',
            headers: { 'Content-type': ctype, 'User-Agent': usragent },
            body: JSON.stringify(body)
        });
        else if (!this.options) return await fetch(url, {
            method: 'DELETE',
            headers: { 'Authorization': auth!, 'Content-type': ctype, 'User-Agent': usragent },
            body: JSON.stringify(body)
        });
        else if ((!this.options.Authorization || this.options.Authorization.trim() == '') && (!auth || auth.trim() == '')) return await fetch(url, {
            method: 'DELETE',
            headers: { 'Content-type': this.options["Content-Type"]! || ctype, 'User-Agent': this.options["User-Agent"]! || usragent },
            body: JSON.stringify(body)
        });
        return await fetch(url, {
            method: 'DELETE',
            headers: { 'Authorization': auth! || this.options.Authorization!, 'Content-type': this.options["Content-Type"]! || ctype, 'User-Agent': this.options["User-Agent"]! || usragent },
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
    ["Authorization"]?: string,
    ["Content-Type"]?: ContentTypes,
    ["User-Agent"]?: string | 'httpSender'
}
type ContentTypes = 'application/json' | 'application/xml' | 'application/javascript' | 'application/pdf' | 'application/x-www-form-urlencoded' | 'application/zip' | 'audio/mpeg' | 'audio/x-wav' | 'image/gif' | 'image/jpeg' | 'image/png' | 'image/x-icon' | 'image/svg+xml' | 'text/css' | 'text/html' | 'text/plain' | 'text/markdown' | 'text/xml' | 'video/mpeg' | 'video/mp4' | 'video/webm' | 'video/quicktime'