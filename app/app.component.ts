import { Component } from "@angular/core";
import { SelectionRange } from "@progress/kendo-angular-dateinputs";

@Component({
  selector: "my-app",
  template: `
    <div class="example-config">Selected range: {{ range | json }}</div>
    <kendo-daterange>
      <label>
        <span class="label">Start</span>
        <kendo-dateinput
          kendoDateRangeStartInput
          [(value)]="range.start"
        ></kendo-dateinput>
      </label>
      <label>
        <span class="label">End</span>
        <kendo-dateinput
          #endDateInput
          kendoDateRangeEndInput
          [(value)]="range.end"
        ></kendo-dateinput>
      </label>
      <kendo-daterange-popup (close)="$event.preventDefault()">
        <ng-template kendoDateRangePopupTemplate>
          <div stlye="display: table">
            <h4 style="float:left; margin-left: 145px">Start</h4>
            <h4 style="float:right; margin-right: 165px">End</h4>
          </div>
          <kendo-multiviewcalendar kendoDateRangeSelection>
          </kendo-multiviewcalendar>
        </ng-template>
      </kendo-daterange-popup>
    </kendo-daterange>
  `,
  styles: [
    `
      .label {
        display: block;
        font-weight: bold;
        text-indent: 8px;
        color: #656565;
      }
    `
  ]
})
export class AppComponent {
  public range: SelectionRange = { start: null, end: null };
}
