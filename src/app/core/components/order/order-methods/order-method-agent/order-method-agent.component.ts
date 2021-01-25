import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'dis-order-method-agent',
  templateUrl: './order-method-agent.component.html',
  styleUrls: ['../order-method-shared.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderMethodAgentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
