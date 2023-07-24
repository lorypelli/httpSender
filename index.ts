// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class httpSender {
    authorization?: string;
    constructor(authorization?: string) {
        this.authorization = authorization;
    }
    async get(url: string, auth?: string) {
        if (!this.authorization && !auth) return console.log('Authorization header is missing') as unknown as Response;
        return await fetch(url, {
            headers: { 'Authorization': this.authorization! || auth! }
        });
    }
    async post(url: string, body: object, auth?: string) {
        if (!this.authorization && !auth) return console.log('Authorization header is missing') as unknown as Response;
        return await fetch(url, {
            method: 'POST',
            headers: { 'Authorization': this.authorization! || auth! },
            body: JSON.stringify({
                ...body
            })
        });
    }
}
export async function toJSON(res: Response) {
    return await res.json();
}