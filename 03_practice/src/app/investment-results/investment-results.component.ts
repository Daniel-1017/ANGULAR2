import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentsService = inject(InvestmentService);

  // results = computed(() => this.investmentsService.resultData())
  results = this.investmentsService.resultData.asReadonly();
}
