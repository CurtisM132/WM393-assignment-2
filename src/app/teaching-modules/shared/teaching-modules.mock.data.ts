import { TEACHING_MODULE_FUNCTIONS } from "../../teaching-module-functions/shared/teaching-module-functions.enums";
import { TeachingModule, UserTeachingModulesMapping } from "./teaching-modules.interface";


export const mockTeachingModules: TeachingModule[] = [
  {
    id: '1',
    name: 'SDLC',
    functions: [
      TEACHING_MODULE_FUNCTIONS.CALENDAR,
      TEACHING_MODULE_FUNCTIONS.FEEDBACK,
      TEACHING_MODULE_FUNCTIONS.NOTICE,
      TEACHING_MODULE_FUNCTIONS.QUIZ,
      TEACHING_MODULE_FUNCTIONS.Q_AND_A,
      TEACHING_MODULE_FUNCTIONS.RESOURCE
    ]
  },
  {
    id: '2',
    name: 'IoT',
    functions: [
      TEACHING_MODULE_FUNCTIONS.NOTICE,
      TEACHING_MODULE_FUNCTIONS.QUIZ,
      TEACHING_MODULE_FUNCTIONS.RESOURCE
    ]
  }
];

export const mockUserTeachingModulesMappings: UserTeachingModulesMapping[] = [
  {
    userId: "9cd67255-69f7-4690-822e-fab4bcb4d1a9", // student1
    modules: ["1", "2"],
  },
  {
    userId: "c922b40e-2e23-42fc-8924-da97f1681c49", // student2
    modules: ["1"],
  },
  {
    userId: "596595e5-b25a-4cb2-9347-499d2b3c05f6", // tutor1
    modules: ["1", "2"],
  }
];