export declare class httpSender {
    private options?;
    constructor(options?: Options);
    get(url: string, auth?: string, ctype?: ContentTypes, usragent?: string): Promise<Response>;
    post(url: string, body?: BodyInit, auth?: string, ctype?: ContentTypes, usragent?: string): Promise<Response>;
    patch(url: string, body?: BodyInit, auth?: string, ctype?: ContentTypes, usragent?: string): Promise<Response>;
    put(url: string, body?: BodyInit, auth?: string, ctype?: ContentTypes, usragent?: string): Promise<Response>;
    delete(url: string, body?: BodyInit, auth?: string, ctype?: ContentTypes, usragent?: string): Promise<Response>;
}
export declare function toJSON(res: Response): Promise<any>;
export declare function toText(res: Response): Promise<string>;
interface Options {
    ["Authorization"]?: string;
    ["Content-Type"]?: ContentTypes;
    ["User-Agent"]?: string | 'httpSender';
}
type ContentTypes = 'application/json' | 'application/xml' | 'application/javascript' | 'application/pdf' | 'application/x-www-form-urlencoded' | 'application/zip' | 'audio/mpeg' | 'audio/x-wav' | 'image/gif' | 'image/jpeg' | 'image/png' | 'image/x-icon' | 'image/svg+xml' | 'text/css' | 'text/html' | 'text/plain' | 'text/markdown' | 'text/xml' | 'video/mpeg' | 'video/mp4' | 'video/webm' | 'video/quicktime';
export {};
