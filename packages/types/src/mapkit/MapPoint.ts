import { Coordinate } from "./Coordinate";

/**
 * A location, in map units, of a point on the Earth’s surface
 * projected on to a 2D map.
 *
 * ### Overview
 * Map units are a value from 0 to 1 that represent an interpolated
 * location within the height or width of the full map projection.
 * On a two-dimensional map, the upper-left corner of the map
 * projection has the coordinate (0, 0), and the lower-right corner
 * of the map projection has the coordinate (1, 1).
 *
 * As another point of reference, mapkit.MapPoint(0.5, 0.5)
 * corresponds to the center of the map, which MapKit JS also
 * represents as the coordinate mapkit.Coordinate(0, 0).
 */
export declare class MapPoint {
  /**
   * Creates a map location.
   *
   * ### Parameters
   * - x: The point along the east-west axis of the map projection.
   * - y: The point along the north-south axis of the map projection.
   *
   * ### Discussion
   * The x and y values of the point are unit values. MapKit JS
   * expects the value to be between 0 and 1, and represents an
   * interpolated location on the map projection in the x and y
   * coordinates, respectively.
   *
   * The following example creates a point that is one-tenth across
   * the map projection along the x-axis, and half way across the
   * y-axis:
   *
   * ```
   * var mapPoint = new mapkit.MapPoint(0.1, 0.5);
   * var x = mapPoint.x; // 0.1
   * var y = mapPoint.y; // 0.5
   * ```
   */
  constructor(x: number, y: number);

  /**
   * The location of the map point along the map’s x-axis.
   */
  x: number;

  /**
   * The location of the map point along the map’s y-axis.
   */
  y: number;

  /**
   * Returns a copy of the location.
   */
  readonly copy: () => MapPoint;

  /**
   * Indicates whether two map points are equal.
   *
   * ### Parameters
   * - anotherPoint: A map location to use for comparison.
   *
   * ### Return Value
   * Returns true if the x and y values of the map point exactly match
   * the corresponding values of anotherPoint. Returns false if the
   * values aren't an exact match.
   */
  readonly equals: (anotherPoint: MapPoint) => Boolean;

  /**
   * Converts a map point into a coordinate with latitude and longitude.
   *
   * ### Return Value
   * A coordinate that contains the latitude and longitude corresponding
   * to the location.
   */
  readonly toCoordinate: () => Coordinate;
}
