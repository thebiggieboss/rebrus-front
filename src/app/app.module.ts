import { NgModule } from '@angular/core';
import { AppComponent } from '@app/app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';

const INTERCEPTOR = (type: any) => ({
  provide: HTTP_INTERCEPTORS,
  useClass: type,
  multi: true,
});
@NgModule({
  declarations: [AppComponent],
  imports: [RouterLink, RouterOutlet],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
