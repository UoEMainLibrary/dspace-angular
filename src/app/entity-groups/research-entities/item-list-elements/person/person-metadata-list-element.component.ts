import { Component } from '@angular/core';
import { rendersItemType } from '../../../../shared/items/item-type-decorator';
import { MetadataRepresentationType } from '../../../../core/shared/metadata-representation/metadata-representation.model';
import { TypedItemSearchResultListElementComponent } from '../../../../shared/object-list/item-list-element/item-types/typed-item-search-result-list-element.component';
import { ViewMode } from '../../../../core/shared/view-mode.model';

@rendersItemType('Person', ViewMode.ListElement, MetadataRepresentationType.Item)
@Component({
  selector: 'ds-person-metadata-list-element',
  templateUrl: './person-metadata-list-element.component.html'
})
/**
 * The component for displaying a list element for an item of the type Person
 */
export class PersonMetadataListElementComponent extends TypedItemSearchResultListElementComponent {
}
