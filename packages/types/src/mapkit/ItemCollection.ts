import { Annotation } from "./Annotation";
import { Overlay } from "./Overlay";

/**
 * A tree structure containing annotations, overlays, and nested item collection objects.
 *
 * ### Overview
 * Item collections can't be instantiated directly; they are returned by the
 * importGeoJSON method.
 */
export interface ItemCollection {
  /**
   * The raw GeoJSON data.
   *
   * ### Discussion
   * Use the data object to view the original GeoJSON data.
   * To retrieve the data as MapKit JS items, use the items or
   * getFlattenedItemList objects.
   *
   * ### See Also
   * [Displaying Indoor Maps with MapKit JS](https://developer.apple.com/documentation/mapkitjs/mapkit/displaying_indoor_maps_with_mapkit_js)
   */
  readonly data: object;

  /**
   * A flattened array of items that include annotations or overlays.
   *
   * ### Discussion
   * The items in an ItemCollection may include nested item collections. Use
   * getFlattenedItemList when you need a flat array that contains individual
   * annotations and overlays.
   *
   * Access the original GeoJSON data in the data object. To retrieve the data
   * as MapKit JS items, use the items or getFlattenedItemList objects.
   */
  readonly getFlattenedItemList: () => (Annotation | Overlay)[];

  /**
   * A nested list of annotations, overlays, or other item collections.
   *
   * ### Discussion
   * Access the original GeoJSON data in the data object. To retrieve the
   * data as MapKit JS items, use the items or getFlattenedItemList objects.
   */
  readonly items: () => (Annotation | Overlay | ItemCollection)[];
}
