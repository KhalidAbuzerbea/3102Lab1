import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent, // Import the standalone component
    CalculatorComponent // Import the Calculator component as well if it's also standalone
  ],
  providers: [],
})
export class AppModule {}
