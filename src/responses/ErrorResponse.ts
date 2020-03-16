export class ErrorResponse {
    public status: boolean;
    public errorName: string;
    public errorCode: number;
    public message: string;
    public developerMessage: string;

    constructor(errorName: string, code: number, message: string, developerMessage?: string) {
        this.status = false;
        this.errorName = errorName;
        this.errorCode = code;
        this.message = message;
        this.developerMessage = developerMessage || undefined;
    }

}
