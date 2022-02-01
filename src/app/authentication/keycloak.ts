import { KeycloakService } from "keycloak-angular";

export function InitialiseKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:9090/auth',
        realm: 'wmgtss',
        clientId: 'wmgtss'
      },
      initOptions: {
        onLoad: 'login-required'
      },
      bearerExcludedUrls: ['/assets'],
    });
}

export async function getLoggedInState(keycloak: KeycloakService): Promise<boolean> {
  return await keycloak.isLoggedIn();
}

export async function getUserProfile(keycloak: KeycloakService): Promise<Keycloak.KeycloakProfile | undefined> {
  const loggedInState = await getLoggedInState(keycloak);
  if (loggedInState) {
    return await keycloak.loadUserProfile();
  }

  return undefined;
}

export async function getUserId(keycloak: KeycloakService): Promise<string | undefined> {
  const loggedInState = await getLoggedInState(keycloak);
  if (loggedInState) {
    const userProfile = await keycloak.loadUserProfile();

    if (userProfile && userProfile.id) {
      return userProfile.id as string;
    }
  }

  return undefined;
}

export async function getUsername(keycloak: KeycloakService): Promise<string | undefined> {
  const loggedInState = await getLoggedInState(keycloak);
  if (loggedInState) {
    const userProfile = await keycloak.loadUserProfile();

    if (userProfile && userProfile.username) {
      return userProfile.username as string;
    }
  }

  return undefined;
}

export async function getUserRoles(keycloak: KeycloakService): Promise<string[] | undefined> {
  const loggedInState = await getLoggedInState(keycloak);
  if (loggedInState) {
    return await keycloak.getUserRoles(true);
  }

  return undefined;
}