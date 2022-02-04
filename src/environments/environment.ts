// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AbstractAuthenticationService } from "src/app/authentication/authentication.abstract.service";
import { MockAuthenticationService } from "src/app/authentication/authentication.mock.service";
import { AbstractResourceBoardService } from "src/app/resource-board/board/shared/resource-board.abstract-service";
import { MockResourceBoardService } from "src/app/resource-board/board/shared/resource-board.mock.service";
import { AbstractResourceService } from "src/app/resource-board/resource/shared/resource.abstract.service";
import { MockResourceService } from "src/app/resource-board/resource/shared/resource.mock.service";
import { AbstractTeachingModulesService } from "src/app/teaching-modules/shared/teaching-modules.abstract.service";
import { MockTeachingModulesService } from "src/app/teaching-modules/shared/teaching-modules.mock.service";

export const environment = {
  production: false,
  providers: [
    { provide: AbstractResourceBoardService, useClass: MockResourceBoardService },
    { provide: AbstractResourceService, useClass: MockResourceService },
    { provide: AbstractTeachingModulesService, useClass: MockTeachingModulesService },
    { provide: AbstractAuthenticationService, useClass: MockAuthenticationService },
  ],
};