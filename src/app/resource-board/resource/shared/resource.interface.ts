import { ACCEPTED_FILE_EXTENSIONS } from './resource-file.enums';

export interface Resource {
    id?: string
    name: string
    uploadDate: Date
    fileFormat: ACCEPTED_FILE_EXTENSIONS
    filePath: string
    comment?: string
};