import { Component } from '@angular/core';
import {
  Marquee,
  RotationPivot,
  SelectionOverlay,
  SnapGuides,
} from '@mosaicoo/svg-engine/edit';
import { SvgeEditor } from '@mosaicoo/svg-engine/ui';

@Component({
  selector: 'app-root',
  imports: [SvgeEditor, SelectionOverlay, RotationPivot, Marquee, SnapGuides],
  template: `
    <svge-editor title="svg-engine · teste NPM">
      <svg:g svgeSelectionOverlay></svg:g>
      <svg:g svgeRotationPivot></svg:g>
      <svg:g svgeMarquee></svg:g>
      <svg:g svgeSnapGuides></svg:g>
    </svge-editor>
  `,
  styleUrl: './app.css',
})
export class App {}
