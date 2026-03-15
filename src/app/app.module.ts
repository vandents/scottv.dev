// Angular Modules
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { NgModule                         } from '@angular/core';
import { provideAnimations                } from '@angular/platform-browser/animations';
import { RouterModule                     } from '@angular/router';

import { provideHttpClient                } from '@angular/common/http';

// Root component
import { AppComponent                     } from './app.component';

// Shell Elements (used in app.component.html)
import { ToolbarComponent                 } from '@elements/toolbar/toolbar.component';
import { FooterComponent                  } from '@elements/footer/footer.component';
import { MenuAutoOpenComponent            } from '@elements/menu-auto-open/menu-auto-open.component';
import { ChatbotComponent                 } from '@elements/chatbot/chatbot.component';

// Shared Module
import { SharedModule                     } from '@app/shared.module';

// Services
import { BrowserService                   } from '@services/browser-service/browser.service';
import { FirebaseService                  } from '@services/firebase-service/firebase.service';
import { AlgorithmService                 } from '@services/algorithm-service/algorithm.service';
import { ThemeService                     } from '@services/theme-service/theme.service';

// Custom Modules
import { AppRoutingModule                 } from '@app/app-routing.module';

// Third Party Modules
import { DeviceDetectorService            } from 'ngx-device-detector';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore   } from '@angular/fire/firestore';

// Environment variables
import { environment                      } from '@environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    // Shell Elements
    ToolbarComponent,
    FooterComponent,
    MenuAutoOpenComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    RouterModule,
    ChatbotComponent
  ],
  providers: [
    provideAnimations(),
    provideClientHydration(),
    provideHttpClient(),
    ...(typeof window !== 'undefined' ? [
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()),
    ] : []),
    AlgorithmService,
    BrowserService,
    DeviceDetectorService,
    FirebaseService,
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
