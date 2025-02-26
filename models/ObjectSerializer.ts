export * from '../models/AuthInputDto';
export * from '../models/AuthOutputDto';
export * from '../models/AutoJobConfigDto';
export * from '../models/AutoJobGetDto';
export * from '../models/AutoJobPutDto';
export * from '../models/BasePointIdentifyDto';
export * from '../models/CPUItemDto';
export * from '../models/DataPointBrowseGetDto';
export * from '../models/DataPointDto';
export * from '../models/DataPointShareDto';
export * from '../models/DynamicConfigDto';
export * from '../models/FileDto';
export * from '../models/FileOutputDto';
export * from '../models/FilePutDto';
export * from '../models/GlobalConfigPutDto';
export * from '../models/JobBackupDto';
export * from '../models/JobErrorDto';
export * from '../models/JobRestoreDto';
export * from '../models/LogItemDto';
export * from '../models/MessageItemDto';
export * from '../models/MessagePostDto';
export * from '../models/MessageReadItem';
export * from '../models/RepoDataJobDto';
export * from '../models/RepoDataJobStatusDto';
export * from '../models/RepoDataJobSummaryDto';
export * from '../models/RepoPointDto';
export * from '../models/RepoPointShareDto';
export * from '../models/SnapshotDto';
export * from '../models/SnapshotResultDto';
export * from '../models/SystemStatusDto';
export * from '../models/UserCreateDto';
export * from '../models/UserPermission';
export * from '../models/UserPermissionDto';
export * from '../models/UserPutDto';
export * from '../models/UserSummaryDto';
export * from '../models/WSConfigItemDto';
export * from '../models/WSConfigPutDto';
export * from '../models/WSNotificationDto';

import { AuthInputDto } from '../models/AuthInputDto';
import { AuthOutputDto } from '../models/AuthOutputDto';
import { AutoJobConfigDto } from '../models/AutoJobConfigDto';
import { AutoJobGetDto } from '../models/AutoJobGetDto';
import { AutoJobPutDto } from '../models/AutoJobPutDto';
import { BasePointIdentifyDto } from '../models/BasePointIdentifyDto';
import { CPUItemDto } from '../models/CPUItemDto';
import { DataPointBrowseGetDto } from '../models/DataPointBrowseGetDto';
import { DataPointDto } from '../models/DataPointDto';
import { DataPointShareDto } from '../models/DataPointShareDto';
import { DynamicConfigDto } from '../models/DynamicConfigDto';
import { FileDto } from '../models/FileDto';
import { FileOutputDto } from '../models/FileOutputDto';
import { FilePutDto } from '../models/FilePutDto';
import { GlobalConfigPutDto } from '../models/GlobalConfigPutDto';
import { JobBackupDto } from '../models/JobBackupDto';
import { JobErrorDto } from '../models/JobErrorDto';
import { JobRestoreDto } from '../models/JobRestoreDto';
import { LogItemDto } from '../models/LogItemDto';
import { MessageItemDto } from '../models/MessageItemDto';
import { MessagePostDto } from '../models/MessagePostDto';
import { MessageReadItem } from '../models/MessageReadItem';
import { RepoDataJobDto } from '../models/RepoDataJobDto';
import { RepoDataJobStatusDto } from '../models/RepoDataJobStatusDto';
import { RepoDataJobSummaryDto } from '../models/RepoDataJobSummaryDto';
import { RepoPointDto } from '../models/RepoPointDto';
import { RepoPointShareDto } from '../models/RepoPointShareDto';
import { SnapshotDto } from '../models/SnapshotDto';
import { SnapshotResultDto } from '../models/SnapshotResultDto';
import { SystemStatusDto } from '../models/SystemStatusDto';
import { UserCreateDto } from '../models/UserCreateDto';
import { UserPermission } from '../models/UserPermission';
import { UserPermissionDto } from '../models/UserPermissionDto';
import { UserPutDto } from '../models/UserPutDto';
import { UserSummaryDto } from '../models/UserSummaryDto';
import { WSConfigItemDto } from '../models/WSConfigItemDto';
import { WSConfigPutDto } from '../models/WSConfigPutDto';
import { WSNotificationDto } from '../models/WSNotificationDto';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
]);

let typeMap: {[index: string]: any} = {
    "AuthInputDto": AuthInputDto,
    "AuthOutputDto": AuthOutputDto,
    "AutoJobConfigDto": AutoJobConfigDto,
    "AutoJobGetDto": AutoJobGetDto,
    "AutoJobPutDto": AutoJobPutDto,
    "BasePointIdentifyDto": BasePointIdentifyDto,
    "CPUItemDto": CPUItemDto,
    "DataPointBrowseGetDto": DataPointBrowseGetDto,
    "DataPointDto": DataPointDto,
    "DataPointShareDto": DataPointShareDto,
    "DynamicConfigDto": DynamicConfigDto,
    "FileDto": FileDto,
    "FileOutputDto": FileOutputDto,
    "FilePutDto": FilePutDto,
    "GlobalConfigPutDto": GlobalConfigPutDto,
    "JobBackupDto": JobBackupDto,
    "JobErrorDto": JobErrorDto,
    "JobRestoreDto": JobRestoreDto,
    "LogItemDto": LogItemDto,
    "MessageItemDto": MessageItemDto,
    "MessagePostDto": MessagePostDto,
    "MessageReadItem": MessageReadItem,
    "RepoDataJobDto": RepoDataJobDto,
    "RepoDataJobStatusDto": RepoDataJobStatusDto,
    "RepoDataJobSummaryDto": RepoDataJobSummaryDto,
    "RepoPointDto": RepoPointDto,
    "RepoPointShareDto": RepoPointShareDto,
    "SnapshotDto": SnapshotDto,
    "SnapshotResultDto": SnapshotResultDto,
    "SystemStatusDto": SystemStatusDto,
    "UserCreateDto": UserCreateDto,
    "UserPermission": UserPermission,
    "UserPermissionDto": UserPermissionDto,
    "UserPutDto": UserPutDto,
    "UserSummaryDto": UserSummaryDto,
    "WSConfigItemDto": WSConfigItemDto,
    "WSConfigPutDto": WSConfigPutDto,
    "WSNotificationDto": WSNotificationDto,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type = '', subtype = ''] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    let mapping = typeMap[expectedType].mapping;
                    if (mapping != undefined && mapping[discriminatorType]) {
                        return mapping[discriminatorType]; // use the type given in the discriminator
                    } else if(typeMap[discriminatorType]) {
                        return discriminatorType;
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return (mediaType.split(";")[0] ?? '').trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(ObjectSerializer.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
