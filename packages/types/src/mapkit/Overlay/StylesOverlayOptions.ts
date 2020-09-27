import { Style } from "../Style";

/**
 * An observable set of style attributes for an overlay.
 *
 * ### Overview
 * The style object is an observable dictionary of style properties.
 * To render an overlay, you must assign a style object to it. The
 * style object specifies attributes, including stroke and fill
 * colors, opacity, and line styles.
 *
 * Because style properties are observable, MapKit JS automatically
 * reflects changes to a style property on overlays that you associate
 * with that style object.
 */
export interface StylesOverlayOptions {
  /**
   * An object literal of style properties.
   */
  readonly style: Style;
}
