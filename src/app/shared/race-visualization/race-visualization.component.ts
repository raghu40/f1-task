import { Component, Input } from '@angular/core';
import { graphData, seriesData } from '../race.model';

@Component({
  selector: 'app-race-visualization',
  templateUrl: './race-visualization.component.html',
  styleUrls: ['./race-visualization.component.scss'],
})
export class RaceVisualizationComponent {
  colorScheme = 'cool';
  @Input() displayData: graphData[] = [];
  @Input() xAxisLabelText: string = '';
  @Input() yAxisLabelText: string = '';
  selectedData!: seriesData;

  ngOnInit() {}

  // This method will be called when a data point or element in the chart is selected
  onChartSelect(event: any): void {
    this.selectedData = event;
  }
}
