"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toText = exports.toJSON = exports.httpSender = void 0;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class httpSender {
    constructor(options) {
        this.options = options;
    }
    get(url, auth, ctype = 'application/json', usragent = 'httpSender') {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.options && (!auth || auth.trim() == ''))
                return yield fetch(url, {
                    headers: { 'Content-type': ctype, 'User-Agent': usragent }
                });
            else if (!this.options)
                return yield fetch(url, {
                    headers: { 'Authorization': auth, 'Content-type': ctype, 'User-Agent': usragent }
                });
            else if ((!this.options.Authorization || this.options.Authorization.trim() == '') && (!auth || auth.trim() == ''))
                return yield fetch(url, {
                    headers: { 'Content-type': this.options["Content-Type"] || ctype, 'User-Agent': this.options["User-Agent"] || usragent }
                });
            return yield fetch(url, {
                headers: { 'Authorization': auth || this.options.Authorization, 'Content-type': this.options["Content-Type"] || ctype, 'User-Agent': this.options["User-Agent"] || usragent }
            });
        });
    }
    post(url, body = '', auth, ctype = 'application/json', usragent = 'httpSender') {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.options && (!auth || auth.trim() == ''))
                return yield fetch(url, {
                    method: 'POST',
                    headers: { 'Content-type': ctype, 'User-Agent': usragent },
                    body: JSON.stringify(body)
                });
            else if (!this.options)
                return yield fetch(url, {
                    method: 'POST',
                    headers: { 'Authorization': auth, 'Content-type': ctype, 'User-Agent': usragent },
                    body: JSON.stringify(body)
                });
            else if ((!this.options.Authorization || this.options.Authorization.trim() == '') && (!auth || auth.trim() == ''))
                return yield fetch(url, {
                    method: 'POST',
                    headers: { 'Content-type': this.options["Content-Type"] || ctype, 'User-Agent': this.options["User-Agent"] || usragent },
                    body: JSON.stringify(body)
                });
            return yield fetch(url, {
                method: 'POST',
                headers: { 'Authorization': auth || this.options.Authorization, 'Content-type': this.options["Content-Type"] || ctype, 'User-Agent': this.options["User-Agent"] || usragent },
                body: JSON.stringify(body)
            });
        });
    }
    patch(url, body = '', auth, ctype = 'application/json', usragent = 'httpSender') {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.options && (!auth || auth.trim() == ''))
                return yield fetch(url, {
                    method: 'PATCH',
                    headers: { 'Content-type': ctype, 'User-Agent': usragent },
                    body: JSON.stringify(body)
                });
            else if (!this.options)
                return yield fetch(url, {
                    method: 'PATCH',
                    headers: { 'Authorization': auth, 'Content-type': ctype, 'User-Agent': usragent },
                    body: JSON.stringify(body)
                });
            else if ((!this.options.Authorization || this.options.Authorization.trim() == '') && (!auth || auth.trim() == ''))
                return yield fetch(url, {
                    method: 'PATCH',
                    headers: { 'Content-type': this.options["Content-Type"] || ctype, 'User-Agent': this.options["User-Agent"] || usragent },
                    body: JSON.stringify(body)
                });
            return yield fetch(url, {
                method: 'PATCH',
                headers: { 'Authorization': auth || this.options.Authorization, 'Content-type': this.options["Content-Type"] || ctype, 'User-Agent': this.options["User-Agent"] || usragent },
                body: JSON.stringify(body)
            });
        });
    }
    put(url, body = '', auth, ctype = 'application/json', usragent = 'httpSender') {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.options && (!auth || auth.trim() == ''))
                return yield fetch(url, {
                    method: 'PUT',
                    headers: { 'Content-type': ctype, 'User-Agent': usragent },
                    body: JSON.stringify(body)
                });
            else if (!this.options)
                return yield fetch(url, {
                    method: 'PUT',
                    headers: { 'Authorization': auth, 'Content-type': ctype, 'User-Agent': usragent },
                    body: JSON.stringify(body)
                });
            else if ((!this.options.Authorization || this.options.Authorization.trim() == '') && (!auth || auth.trim() == ''))
                return yield fetch(url, {
                    method: 'PUT',
                    headers: { 'Content-type': this.options["Content-Type"] || ctype, 'User-Agent': this.options["User-Agent"] || usragent },
                    body: JSON.stringify(body)
                });
            return yield fetch(url, {
                method: 'PUT',
                headers: { 'Authorization': auth || this.options.Authorization, 'Content-type': this.options["Content-Type"] || ctype, 'User-Agent': this.options["User-Agent"] || usragent },
                body: JSON.stringify(body)
            });
        });
    }
    delete(url, body, auth, ctype = 'application/json', usragent = 'httpSender') {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.options && (!auth || auth.trim() == ''))
                return yield fetch(url, {
                    method: 'DELETE',
                    headers: { 'Content-type': ctype, 'User-Agent': usragent },
                    body: JSON.stringify(body)
                });
            else if (!this.options)
                return yield fetch(url, {
                    method: 'DELETE',
                    headers: { 'Authorization': auth, 'Content-type': ctype, 'User-Agent': usragent },
                    body: JSON.stringify(body)
                });
            else if ((!this.options.Authorization || this.options.Authorization.trim() == '') && (!auth || auth.trim() == ''))
                return yield fetch(url, {
                    method: 'DELETE',
                    headers: { 'Content-type': this.options["Content-Type"] || ctype, 'User-Agent': this.options["User-Agent"] || usragent },
                    body: JSON.stringify(body)
                });
            return yield fetch(url, {
                method: 'DELETE',
                headers: { 'Authorization': auth || this.options.Authorization, 'Content-type': this.options["Content-Type"] || ctype, 'User-Agent': this.options["User-Agent"] || usragent },
                body: JSON.stringify(body)
            });
        });
    }
}
exports.httpSender = httpSender;
function toJSON(res) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield res.json();
    });
}
exports.toJSON = toJSON;
function toText(res) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield res.text();
    });
}
exports.toText = toText;
