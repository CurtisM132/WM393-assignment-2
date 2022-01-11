export interface Resource {
    id?: string
    name: string
    uploadDate: Date
    fileFormat: string // TODO: Enum
    comment?: string
}