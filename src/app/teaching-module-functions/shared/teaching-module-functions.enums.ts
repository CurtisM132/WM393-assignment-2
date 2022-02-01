export enum TEACHING_MODULE_FUNCTIONS {
    CALENDAR = 'Calendar',
    QUIZ = "Quiz",
    RESOURCE = "Resource",
    NOTICE = "Notice",
    Q_AND_A = "Q&A",
    FEEDBACK = "Feedback",
};

export function teachingModuleFunctionToMaterialIcon(module: TEACHING_MODULE_FUNCTIONS): string {
    switch (module) {
        case TEACHING_MODULE_FUNCTIONS.CALENDAR:
            return "calendar_today";
        case TEACHING_MODULE_FUNCTIONS.QUIZ:
            return "quiz";
        case TEACHING_MODULE_FUNCTIONS.RESOURCE:
            return "content_copy";
        case TEACHING_MODULE_FUNCTIONS.NOTICE:
            return "format_list_bulleted"
        case TEACHING_MODULE_FUNCTIONS.Q_AND_A:
            return "question_answer";
        case TEACHING_MODULE_FUNCTIONS.FEEDBACK:
            return "chat";
    }
}