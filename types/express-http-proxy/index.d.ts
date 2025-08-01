import { NextFunction, Request, RequestHandler, Response } from "express";
import { ClientRequest, IncomingHttpHeaders, IncomingMessage, OutgoingHttpHeaders, RequestOptions } from "http";

declare namespace proxy {
    interface ProxyOptions {
        /**
         * The byte limit of the body. This is the number of bytes or any string
         * format supported by `bytes`, for example `1000`, `'500kb'` or `'3mb'`.
         * See https://github.com/stream-utils/raw-body/blob/master/index.d.ts
         */
        limit?: number | string | undefined;
        proxyErrorHandler?:
            | ((
                err: any,
                res: Response,
                next: NextFunction,
            ) => any)
            | undefined;
        proxyReqPathResolver?: ((req: Request) => string | Promise<string>) | undefined;
        proxyReqOptDecorator?:
            | ((
                proxyReqOpts: Omit<RequestOptions, "headers"> & {
                    headers: OutgoingHttpHeaders;
                },
                srcReq: Request,
            ) => RequestOptions | Promise<RequestOptions>)
            | undefined;
        userResHeaderDecorator?:
            | ((
                headers: IncomingHttpHeaders,
                userReq: Request,
                userRes: Response,
                proxyReq: ClientRequest,
                proxyRes: IncomingMessage,
            ) => OutgoingHttpHeaders)
            | undefined;
        userResDecorator?:
            | ((
                proxyRes: IncomingMessage,
                proxyResData: any,
                userReq: Request,
                userRes: Response,
            ) => Buffer | string | Promise<Buffer | string>)
            | undefined;
        /**
         * The filter option can be used to limit what requests are proxied.
         * Return true to continue to execute proxy; return false-y to skip proxy for this request.
         */
        filter?: ((req: Request, res: Response) => boolean | Promise<boolean>) | undefined;
        skipToNextHandlerFilter?: ((proxyRes: IncomingMessage) => boolean) | undefined;
        proxyReqBodyDecorator?: ((bodyContent: any, srcReq: Request) => any) | undefined;
        preserveHostHdr?: boolean | undefined;
        parseReqBody?: boolean | undefined;
        memoizeHost?: boolean | undefined;
        https?: boolean | undefined;
        reqAsBuffer?: boolean | undefined;
        reqBodyEncoding?: string | null | undefined;
        timeout?: number | undefined;
    }
}

declare function proxy(
    host: string | ((req: Request) => string),
    options?: proxy.ProxyOptions,
): RequestHandler;

export = proxy;
