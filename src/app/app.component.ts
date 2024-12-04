
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CalculatorComponent, FormsModule] // Import FormsModule here
})
export class AppComponent {}
