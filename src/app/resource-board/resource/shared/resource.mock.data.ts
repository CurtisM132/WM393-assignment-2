import { BoardResources } from "./board.resources.interface";
import { FILE_TYPE, ACCEPTED_FILE_EXTENSIONS } from "./resource-file.enums";
import { Resource } from "./resource.interface";

// Exported for use in unit tests
export const mockResources: Resource[] = [
    {
        id: '1',
        name: '3D Cartography Example',
        uploadDate: new Date("2021-10-30"),
        fileType: FILE_TYPE.IMAGE,
        fileFormat: ACCEPTED_FILE_EXTENSIONS.JPEG,
        filePath: './assets/demo-resources/cartographic_example.png',
        comment: 'An example of the map I want you to produce for your project'
    },
    {
        id: '2',
        name: 'How to Setup ArcGIS',
        uploadDate: new Date("2022-01-13"),
        fileType: FILE_TYPE.VIDEO,
        fileFormat: ACCEPTED_FILE_EXTENSIONS.MP4,
        filePath: './assets/demo-resources/arcgis_setup.mp4',
    }
];

export const mockBoardResources: BoardResources[] = [
    {
        id: "1",
        resources: mockResources,
    },
    {
        id: "2",
        resources: [],
    },
    {
        id: "3",
        resources: [],
    }
]