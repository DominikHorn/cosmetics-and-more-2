import { Padding } from "../Padding";
import { AnnotationCalloutDelegate } from "./AnnotationCalloutDelegate";
import { DisplayPriority } from "./DisplayPriority";

/**
 * An object that contains options for initializing annotation features.
 */
export interface AnnotationConstructorOptions {
  /**
   * Data you define that is assigned to the annotation.
   *
   * ### Discussion
   * Custom data to associate with this annotation. The default value is {}.
   */
  data?: object;

  /**
   * The text to display in the annotation's callout.
   *
   * ### Discussion
   * The title to show in the callout. The default value is "" (empty string).
   */
  title?: string;

  /**
   * The text to display as a subtitle on the second line of an annotation's callout.
   *
   * ### Discussion
   * The default value is "" (empty string).
   */
  subtitle?: string;

  /**
   * The offset in CSS pixels of the element from the bottom center.
   *
   * ### Discussion
   * The default value is DOMPoint(0, 0).
   */
  anchorOffset?: DOMPoint;

  /**
   * A CSS animation that runs when the annotation appears on the map.
   *
   * ### Discussion
   * CSS animation running when the annotation appears.
   * The default value is "" (empty string).
   */
  appearanceAnimation?: string;

  /**
   * A hint the map uses to prioritze displaying the annotation.
   *
   * ### Discussion
   * A hint to the priority for displaying the annotation.
   * The default value is Annotation.DisplayPriority.Required.
   */
  displayPriority?: DisplayPriority;

  /**
   * Spacing added around the annotation when showing items.
   *
   * ### Discussion
   * Padding prevents any items from touching the edges of the map. Set padding
   * to a mapkit.Padding object (the default is no padding on all sides).
   */
  padding?: Padding;

  /**
   * The desired dimensions (width × height) of the annotation, in CSS pixels.
   */
  size?: { width: number; height: number };

  /**
   * A Boolean value that determines if the annotation is visible or hidden.
   *
   * ### Discussion
   * The default value is true.
   */
  visible?: boolean;

  /**
   * A Boolean value that determines if the annotation should be animated.
   *
   * ### Discussion
   * The default value is true.
   */
  animates?: boolean;

  /**
   * A Boolean value that determines whether the user can drag the annotation.
   *
   * ### Discussion
   * The default value is false.
   */
  draggable?: boolean;

  /**
   * A Boolean value that determines whether the annotation responds
   * to user interaction.
   *
   * ### Discussion
   * The default value is true.
   */
  enabled?: boolean;

  /**
   * A Boolean value that determines whether the annotation is selected.
   *
   * ### Discussion
   * The default value is false.
   */
  selected?: boolean;

  /**
   * A delegate that enables you to customize the annotation's callout
   *
   * ### Discussion
   * The default value is null. See
   * [AnnotationCalloutDelegate](https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate)
   * for details.
   */
  callout?: AnnotationCalloutDelegate | null;

  /**
   * A Boolean value that determines whether a callout should be shown.
   *
   * ### Discussion
   * The default value is true.
   */
  calloutEnabled?: boolean;

  /**
   * The offset in CSS pixels of a callout from the top center of the element.
   *
   * ### Discussion
   * The default value is DOMPoint(0, 1), placing the callout bubble is slightly
   * (1 pixel) above the top-center point of the annotation element.
   *
   * To choose a different placement, provide an offset point where positive x
   * values move the callout bubble to the left, and positive y values move the
   * callout bubble up. For example, to leave a 5px margin between the top of
   * the annotation and the bottom of the callout, use a callout offset of
   * DOMPoint(0, 5).
   */
  calloutOffset?: DOMPoint;

  /**
   * An identifer used for grouping annotations into the same cluster.
   *
   * ### Discussion
   * When zooming out on a map that contains many annotations, MapKit JS groups
   * the colliding annotations based on a clustering identifier value.
   *
   * The default value is null.
   *
   * For more information, see
   * [About Annotation Clustering](https://developer.apple.com/documentation/mapkitjs/mapkit/annotations/about_annotation_clustering).
   */
  clusteringIdentifier?: string;

  /**
   * A mode that determines the shape of the collision frame.
   *
   * ### Discussion
   * The collision mode indicates the shape of an annotation's collision frame:
   * - mapkit.Annotation.CollisionMode.Rectangle. Indicates the bounding box of the annotation.
   * - mapkit.Annotation.CollisionMode.Circle. Indicates a circle inscribed in the bounding box.
   *
   * The default value is Annotation.CollisionMode.Rectangle.
   */
  collisionMode?: string;

  /**
   * Accessibility text for the annotation.
   *
   * ### Discussion
   * The default value is null
   */
  accessibilityLabel?: string | null;
}
