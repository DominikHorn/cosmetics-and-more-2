/**
 * A line that displays with a gradient along the length of the line.
 *
 * ### Overview
 * Use mapkit.LineGradient with a mapkit.PolylineOverlay to show a
 * gradient along a route or path. You can also use it to provide
 * additional information about locations along the path, for
 * example, the running pace along a route.
 */
export declare class LineGradient {
  /**
   * Creates a style that renders a gradient along the length of a line.
   *
   * ### Parameters
   * - options: A JavaScript object with unit distance values as keys
   *   with matched CSS colors.
   *
   * ### Discussion
   * The unit distance keys must be a number between 0 and 1. A value
   * of 0 represents the beginning of the polyline and a value of 1
   * represents the end. The associated values are CSS colors.
   *
   * The following example creates a new gradient that progresses from
   * blue at the start of the line to red at the end:
   *
   * ```
   * overlay.style.lineGradient = new mapkit.LineGradient({
   *   0: "blue",
   *   1: "red"
   * });
   * ```
   *
   * If the start or end of the line don’t have a defined color, the gradient
   * uses the style’s strokeColor as a default.
   *
   * You can extend gradients programatically with addColorStop and addColorStopAtIndex.
   */
  constructor(options: { [unitDistance: number]: string });

  /**
   * Adds a color transition point to the gradient.
   *
   * ### Parameters
   * - offset: The unit distance at which to add the color
   * - color: The CSS color at the transition point
   *
   * ### Discussion
   * If offset is less than 0 or greater than 1, MapKit JS logs a warning
   * to the console, but doesn't change the object
   */
  readonly addColorStop: (offset: number, color: string) => void;

  /**
   * Adds a color transition at the index point in the list of points within a polyline.
   *
   * ### Parameters
   * - index: A valid index into a polyline’s points.
   * - color: The CSS color at the index point.
   *
   * ### Discussion
   * If the index is invalid, MapKit JS logs a warning to the console, but doesn’t
   * change the object.
   */
  readonly addColorStopAtIndex: (index: number, color: string) => void;
}
