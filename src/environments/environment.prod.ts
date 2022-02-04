import { APP_INITIALIZER } from "@angular/core";
import { KeycloakService } from "keycloak-angular";
import { AbstractAuthenticationService } from "src/app/authentication/authentication.abstract.service";
import { AuthenticationService } from "src/app/authentication/authentication.service";
import { InitialiseKeycloak } from "src/app/authentication/keycloak-utils";
import { AbstractResourceBoardService } from "src/app/resource-board/board/shared/resource-board.abstract-service";
import { MockResourceBoardService } from "src/app/resource-board/board/shared/resource-board.mock.service";
import { AbstractResourceService } from "src/app/resource-board/resource/shared/resource.abstract.service";
import { MockResourceService } from "src/app/resource-board/resource/shared/resource.mock.service";
import { AbstractTeachingModulesService } from "src/app/teaching-modules/shared/teaching-modules.abstract.service";
import { MockTeachingModulesService } from "src/app/teaching-modules/shared/teaching-modules.mock.service";

export const environment = {
  production: true,
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: InitialiseKeycloak,
      multi: true,
      deps: [KeycloakService]
    },
    { provide: AbstractResourceBoardService, useClass: MockResourceBoardService },
    { provide: AbstractResourceService, useClass: MockResourceService },
    { provide: AbstractTeachingModulesService, useClass: MockTeachingModulesService },
    { provide: AbstractAuthenticationService, useClass: AuthenticationService },
  ]
};
