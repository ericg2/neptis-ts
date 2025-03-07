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

import { SnapshotResultDto } from '../models/SnapshotResultDto';
import { HttpFile } from '../http/http';

export class SnapshotDto {
    'snapshotId'?: string | null;
    'summary'?: SnapshotResultDto;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "snapshotId",
            "baseName": "snapshotId",
            "type": "string",
            "format": ""
        },
        {
            "name": "summary",
            "baseName": "summary",
            "type": "SnapshotResultDto",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SnapshotDto.attributeTypeMap;
    }

    public constructor() {
    }
}
