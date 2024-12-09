import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { provideHttpClient, withFetch } from '@angular/common/http';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));


bootstrapApplication(AppModule, {
  providers: [provideHttpClient(withFetch())],
}).catch(err => console.error(err));

