import { Coordinate } from "../Coordinate";
import { StylesOverlayOptions } from "./StylesOverlayOptions";
import { Overlay } from "./Overlay";

/**
 * An overlay of connected line segments that do not form a closed shape.
 *
 * ### Overview
 * A polyline is a shape that consists of connected line segments that
 * you define with a set of points. The first and last points do not
 * connect to each other.
 *
 * The longitude of all points should be within a 360-degree range.
 * Depending on how you specify the longitude, a line between Tokyo
 * and Los Angeles that you create with a mapkit.PolylineOverlay may
 * take a different route. Specifying a longitude of -118º for Los
 * Angeles and 140º for Tokyo results in a very long line spanning 258º.
 * Specifying a longitude of 242º (that is, -118 + 360) for Los Angeles
 * and 140º for Tokyo results in a shorter line spanning 98º. MapKit JS
 * may not render the polyline correctly if the range of longitudes is
 * larger than 360º.
 *
 * All style properties apply to polyline overlays except fillColor,
 * fillOpacity, and fillRule. MapKit JS ignores properties that don't
 * apply. mapkit.PolylineOverlay doesn't implement methods of its own.
 * For more information, see the base object, mapkit.Overlay.
 *
 * The following example shows a polyline object for a map.
 *
 * ```
 * var points = [ [10, 1], [5, 6], [1, 1] ];
 * var coords = points.map(function(point) {
 *   return new mapkit.Coordinate(point[0], point[1]);
 * });
 *
 * var style = new mapkit.Style({
 *   lineWidth: 2,
 *   lineJoin: "round",
 *   lineDash: [8, 4],
 *   strokeColor: "#F0F"
 * });
 *
 * var polyline = new mapkit.PolylineOverlay(coords, { style: style });
 * map.addOverlay(polyline);
 * ```
 */
export declare class PolylineOverlay extends Overlay {
  /**
   * Creates a polyline overlay with coordinate points and style options.
   *
   * ### Parameters
   * - points: The required points in the polyline as an array of mapkit.Coordinate.
   * - options: An optional object literal of style options for initializing the polyline.
   *
   * ### Discussion
   * The following is an example of the options parameter for a polyline overlay.
   * ```
   * {
   *   style: new mapkit.Style({
   *     lineWidth: 2,
   *     strokeColor: "#F0F"
   *   })
   * }
   * ```
   */
  constructor(points: Coordinate[], options?: StylesOverlayOptions);

  /**
   * An array of coordinate points that define the polyline overlay's shape.
   *
   * ### Discussion
   * MapKit JS defines the points in the polyline as an array of mapkit.Coordinate points.
   * A copy of the overlay's array returns on read, so changing the array's elements has
   * no effect on the overlay. To change the overlay's points, assign a new array. MapKit JS
   * doesn’t draw a polyline with fewer than two points on the map.
   */
  points: Coordinate[];
}
