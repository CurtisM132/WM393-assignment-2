export interface Resource {
    id?: string
    name: string
    uploadDate: Date
    fileFormat: string // TODO: Enum
    filePath: string
    comment?: string
}