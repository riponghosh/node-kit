export class SuccessResponse {
    public status: boolean;
    public code: number;
    public message: string;
    public data: object;

    constructor(message: string,code:number, data?: object) {
        this.status = true;
        this.code = code;
        this.message = message;
        this.data = data || {};
    }
}
