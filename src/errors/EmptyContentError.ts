import {  HttpException } from "@nestjs/common";
import { ErrorResponse } from "../responses/ErrorResponse";


export class EmptyContentError extends HttpException{ 
    private errorResponse:Object;
    
    constructor() {
        super(new ErrorResponse('Empty Content Error', 404, 'No Data Found'),400);
      }
}

