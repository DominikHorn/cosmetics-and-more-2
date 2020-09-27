import { Coordinate } from "../Coordinate";
import { StylesOverlayOptions } from "./StylesOverlayOptions";
import { Overlay } from "./Overlay";

/**
 * An overlay made up of one or more points that forms a closed shape.
 *
 * ### Overview
 * A polygon is a shape that consists of points connected end-to-end.
 * Unlike polylines, polygons are closed shapes with an inside and an
 * outside. The first and last points connect to each other to form a
 * closed shape.
 *
 * mapkit.PolygonOverlay does not limit you to whole polygons. You can
 * combine multiple polygons to form noncontiguous shapes or shapes with
 * regions cut out. For example, to show the boundaries of South Africa,
 * an overlay must carve out Lesotho, an enclave within South Africa.
 * To do this, use points to describe Lesotho as a polygon that MapKit
 * JS subtracts from the outer polygon.
 *
 * You can choose whether a point falls inside or outside the
 * mapkit.PolygonOverlay by setting style.fillRule to nonzero or evenodd.
 *
 * The longitude of all points in a polygon overlay should be within a
 * 360-degree range. Depending on how you specify the longitude of the
 * points, drawing a triangle between Tokyo, Los Angeles, and Sydney
 * using a polygon overlay may take a different route. Specifying a
 * longitude of -118º for Los Angeles, 140º for Tokyo, and 151º for
 * Sydney results in a very wide triangle spanning 258º. Specifying a
 * longitude of 242º (that is, -118 + 360) for Los Angeles, 140º for
 * Tokyo, and 151º for Sydney results in a narrower triangle spanning
 * 98º. MapKit JS may not render the polyline correctly if the range
 * of longitudes is larger than 360º.
 *
 * All style properties apply to polygon overlays except lineCap, which
 * MapKit JS ignores. mapkit.PolygonOverlay doesn't implement methods of
 * its own. For more information, see the base object, mapkit.Overlay.
 * The following example uses a rectangle overlay to show the boundary
 * lines for the state of Colorado.
 *
 * ```
 * var points = [ [41, -109.05], [41, -102.05], [37, -102.05], [37, -109.05] ];
 *
 * // Map the raw coordinates to Coordinates:
 * points = points.map(function(point) {
 *   return new mapkit.Coordinate(point[0], point[1]);
 * });
 * var style = new mapkit.Style({
 *   strokeColor: "#F00",
 *   strokeOpacity: .2,
 *   lineWidth: 2,
 *   lineJoin: "round",
 *   lineDash: [2, 2, 6, 2, 6, 2]
 * });
 *
 * var rectangle = new mapkit.PolygonOverlay(points, { style: style });
 * map.addOverlay(rectangle);
 * ```
 */
export declare class PolygonOverlay extends Overlay {
  /**
   * Creates a polygon overlay with an array of points and style options.
   *
   * ### Parameters
   * - points: The points in the polygon as an array of arrays of
   *   mapkit.Coordinate, or an array of mapkit.Coordinate. For the latter,
   *   MapKit JS autowraps the array with an enclosing array.
   * - options: An optional object literal of options for initializing the polygon.
   *
   * ### Discussion
   * The following example shows the options parameter for a polygon overlay.
   *
   * ```
   * {
   *   style: new mapkit.Style({
   *     lineWidth: 2,
   *     strokeColor: "#F00",
   *     fillColor: "#339"
   *   }),
   *   selected: true
   * }
   * ```
   */
  constructor(
    points: Coordinate[] | Coordinate[][],
    options?: StylesOverlayOptions
  );

  /**
   * One or more arrays of coordinates that define the polygon overlay shape.
   *
   * ### Discussion
   * The points in the polygon as an array of arrays of coordinates, or an
   * array of coordinates. (For the latter, MapKit JS autowraps the array
   * with an enclosing array.) When reading this property, an array of arrays
   * of coordinates always returns. This is an array of arrays because complex
   * polygons can form from multiple polygons, with each array containing the
   * points of a polygon. MapKit HS determines insideness of the aggregate
   * polygon by the fillRule property in this object's style property.
   *
   * A copy of the overlay's array returns on read, so changing the array's
   * elements has no effect on the overlay. To change the overlay's points,
   * assign a new array. MapKit JS doesn’t draw an array of points with fewer
   * than three elements on the map.
   *
   * The following example creates a rectangle overlay with two triangles cut
   * out of it.
   *
   * ```
   * // Creates an array of coordinates
   * function toCoordinates(array) {
   *   return array.map(function(element) {
   *     return new mapkit.Coordinate(element[0], element[1]);
   *   });
   * }
   *
   * var rectangle = [ [0, 0], [20, 0], [20, 10], [0, 10] ],
   *  triangle1 = [ [4, 4], [8, 4], [6, 6] ],
   *  triangle2 = [ [14, 4], [18, 4], [16, 6] ];
   *
   * var points = [
   *   toCoordinates(rectangle),
   *   toCoordinates(triangle1),
   *   toCoordinates(triangle2)
   * ];
   * var style = new mapkit.Style({
   *   strokeColor: "#777",
   *   fillRule: "evenodd"
   * });
   * var overlay = new mapkit.PolygonOverlay(points, { style: style });
   * ```
   */
  points: Coordinate[] | Coordinate[][];
}
