import { KeycloakService } from 'keycloak-angular';
import { Platform } from '@ionic/angular';

export function initializer(keycloak: KeycloakService, platform: Platform): () => Promise<void> {
  return () => new Promise(async (resolve) => {
    await platform.ready();
    try {
      await keycloak.init({
        config: {
          url: 'YOUR_KEYCLOAK_URL',
          realm: 'realm',
          clientId: 'clientid'
        },
        initOptions: {
          onLoad: 'check-sso',
          checkLoginIframe: false
        },
      });
      resolve();
    } catch (error) {}
  });
}
