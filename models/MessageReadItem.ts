/**
 * Neptis
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class MessageReadItem {
    'messageId'?: string;
    'readBy'?: string | null;
    'readDate'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "messageId",
            "baseName": "messageId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "readBy",
            "baseName": "readBy",
            "type": "string",
            "format": ""
        },
        {
            "name": "readDate",
            "baseName": "readDate",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return MessageReadItem.attributeTypeMap;
    }

    public constructor() {
    }
}
