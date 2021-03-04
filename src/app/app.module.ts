import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService} from './services/service.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { FormComponent } from './form/form.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UpperCasePipe } from './uppercase.pipe';
import { HighlightDirective } from './highlight.directive';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RepositoriesComponent,
    FormComponent,
    UserInfoComponent,
    UpperCasePipe,
    HighlightDirective,
 
  
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
