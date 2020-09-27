import { Coordinate } from "../Coordinate";
import { StylesOverlayOptions } from "./StylesOverlayOptions";
import { Overlay } from "./Overlay";

/**
 * A circular overlay with a configurable radius that centers
 * on a specific geographic coordinate.
 *
 * ### Overview
 * The circle overlay provides a built-in object for creating circles.
 * MapKit JS defines mapkit.CircleOverlay by a coordinate and a radius (in meters).
 * All style properties apply to circle overlays except lineCap, lineJoin,
 * and fillRule. MapKit JS ignores properties that don't apply. mapkit.CircleOverlay
 * doesn't implement methods of its own. For more information, see the base object,
 * mapkit.Overlay.
 *
 * The following example uses circle overlays to show the relative population sizes
 * of three cities in the San Francisco Bay Area.
 *
 * ```
 * var stats = [
 *   { name: "San Francisco", coordinate: [37.783333, -122.416667], population: 852469 },
 *   { name: "Oakland", coordinate: [37.804444, -122.270833], population: 390724 },
 *   { name: "San Jose", coordinate: [37.333333, -121.9], population: 1000536 },
 * ];
 *
 * var style = new mapkit.Style({
 *   lineWidth: 2,         // 2 CSS pixels
 *   strokeColor: "#999",
 *   fillColor: "#FFF"
 * });
 *
 * var circles = stats.map(function(stat) {
 *   var coordinate = new mapkit.Coordinate(stat.coordinate[0], stat.coordinate[1]),
 *       radius = stat.population / 85, // radius is expressed in meters
 *       circle = new mapkit.CircleOverlay(coordinate, radius);
 *   circle.data = { population: stat.population };
 *   circle.style = style;
 *   return circle;
 * });
 *
 * map.addOverlays(circles);
 * ```
 */
export declare class CircleOverlay extends Overlay {
  /**
   * Creates a circle overlay with a center coordinate, radius, and style options.
   *
   * ### Parameters
   * - coordinate: The required coordinate of the circle's center.
   * - radius: The required circle's radius in meters.
   * - options: An optional object literal of overlay properties for initializing
   *   the circle.
   *
   * ### Discussion
   * An options parameter for a circle overlay resembles the following example:
   *
   * ```
   * {
   *   style: new mapkit.Style({
   *     lineWidth: 2,
   *     strokeColor: "#999",
   *     fillColor: "#FFF"
   *   }),
   *   data: {
   *     population: 30500
   *   },
   *   enabled: false
   * }
   */
  constructor(
    coordinate: Coordinate,
    radius: number,
    options?: StylesOverlayOptions
  );

  /**
   * The coordinate of the circle overlay's center.
   */
  coordinate: Coordinate;

  /**
   * The circle overlay's radius in meters.
   */
  radius: number;
}
