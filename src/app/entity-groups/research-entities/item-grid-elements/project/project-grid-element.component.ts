import { rendersItemType } from '../../../../shared/items/item-type-decorator';
import { Component } from '@angular/core';
import { focusShadow } from '../../../../shared/animations/focus';
import { TypedItemSearchResultGridElementComponent } from '../../../../shared/object-grid/item-grid-element/item-types/typed-item-search-result-grid-element.component';
import { ViewMode } from '../../../../core/shared/view-mode.model';

@rendersItemType('Project', ViewMode.GridElement)
@Component({
  selector: 'ds-project-grid-element',
  styleUrls: ['./project-grid-element.component.scss'],
  templateUrl: './project-grid-element.component.html',
  animations: [focusShadow]
})
/**
 * The component for displaying a grid element for an item of the type Project
 */
export class ProjectGridElementComponent extends TypedItemSearchResultGridElementComponent {
}
