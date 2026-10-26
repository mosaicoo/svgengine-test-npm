import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideSvgEngineEditorBuiltins } from '@mosaicoo/svg-engine/edit';
import { provideSvgeUiBuiltins } from '@mosaicoo/svg-engine/ui';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync(),
    // Tier editor headless (svg-engine/edit): tools + libraries + io/optimize/
    // effects + teclado + menus. Spread — retorna EnvironmentProviders[].
    ...provideSvgEngineEditorBuiltins(),
    // Tier controles Material (svg-engine/ui): tool-options + diálogos.
    // Chamado DEPOIS dos builtins headless (a ordem importa).
    ...provideSvgeUiBuiltins(),
  ],
};
