import { ResourceBoards } from "./resource-board.interface";


export const mockResourceBoards: ResourceBoards[] = [
    {
        id: '1',
        boards: [
            {
                id: '1',
                name: 'Example Resource Board #1',
            },
            {
                id: '2',
                name: 'Example Resource Board #2',
            },
            {
                id: '3',
                name: 'Example Resource Board #3',
            }
        ]
    },
    {
        id: '2',
        boards: [],
    },
];
