export interface ResourceBoards {
    id: string // module id
    boards: ResourceBoardSummary[]
}

export interface ResourceBoardSummary {
    id: string // board id
    name: string
}