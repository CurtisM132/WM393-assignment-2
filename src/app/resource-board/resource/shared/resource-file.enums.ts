export enum ACCEPTED_FILE_EXTENSIONS {
    PNG = 'png',
    JPEG = 'jpg',
    MP4 = 'mp4',
    DOC = 'doc',
    DOCX = 'docx',
    TXT = 'txt',
    MD = 'md',
}

export enum FILE_TYPE {
    UNKNOWN = 'UNKNOWN',
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    TEXT = 'TEXT',
    DOC = 'DOCUMENT',
}

export function fileExtensionToFileType(ext: ACCEPTED_FILE_EXTENSIONS) {
    switch (ext) {
        case ACCEPTED_FILE_EXTENSIONS.JPEG:
        case ACCEPTED_FILE_EXTENSIONS.PNG:
            return FILE_TYPE.IMAGE;
        case ACCEPTED_FILE_EXTENSIONS.MP4:
            return FILE_TYPE.VIDEO;
        case ACCEPTED_FILE_EXTENSIONS.TXT:
        case ACCEPTED_FILE_EXTENSIONS.MD:
            return FILE_TYPE.TEXT;
        case ACCEPTED_FILE_EXTENSIONS.DOC:
        case ACCEPTED_FILE_EXTENSIONS.DOCX:
            return FILE_TYPE.DOC;
        default:
            return FILE_TYPE.UNKNOWN;
    }
}