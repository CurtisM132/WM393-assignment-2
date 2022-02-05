import { SafeUrl } from '@angular/platform-browser';
import { ACCEPTED_FILE_EXTENSIONS, FILE_TYPE } from './resource-file.enums';

export interface Resource {
    id?: string
    name: string
    uploadDate: Date
    fileType: FILE_TYPE
    fileFormat: ACCEPTED_FILE_EXTENSIONS
    filePath: string
    comment?: string
};