import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './components/my-component.component';
import { MeuComponente2Component } from './meu-componente2/meu-componente2.component';
import { AlunosService } from './services/alunos.service';

@NgModule({
  declarations: [AppComponent, MyComponent, MeuComponente2Component],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AlunosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
