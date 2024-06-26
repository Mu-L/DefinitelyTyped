// package: google.protobuf
// file: field_mask.proto

import * as jspb from "../../index";

export class FieldMask extends jspb.Message {
    clearPathsList(): FieldMask;
    getPathsList(): string[];
    setPathsList(value: string[]): FieldMask;
    addPaths(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FieldMask.AsObject;
    static toObject(includeInstance: boolean, msg: FieldMask): FieldMask.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: FieldMask, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FieldMask;
    static deserializeBinaryFromReader(message: FieldMask, reader: jspb.BinaryReader): FieldMask;
}

export namespace FieldMask {
    export type AsObject = {
        pathsList: string[];
    };
}
