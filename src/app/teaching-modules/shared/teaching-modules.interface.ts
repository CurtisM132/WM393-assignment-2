import { TEACHING_MODULE_FUNCTIONS } from '../../teaching-module-functions/shared/teaching-module-functions.enums';

export interface TeachingModule {
    id: string
    name: string
    functions: TEACHING_MODULE_FUNCTIONS[]
};

export interface UserTeachingModulesMapping {
    userId: string
    modules: string[]
};
