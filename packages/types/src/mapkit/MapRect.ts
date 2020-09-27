import { CoordinateRegion } from "./CoordinateRegion";
import { MapPoint } from "./MapPoint";
import { MapSize } from "./MapSize";

/**
 * A rectangular region, in map units, of a two-dimensional map projection.
 *
 * Use a mapkit.MapRect to represent a rectangular region within a map
 * projection. Map units are a value from 0 to 1 that represent an
 * interpolated location within the height or width of the full map projection.
 */
export declare class MapRect {
  /**
   * Creates an object that represents a rectangular region of the map projection.
   *
   * ### Parameters
   * - x: The origin point along the east-west axis of the map projection.
   * - y: The origin point along the north-south axis of the map projection.
   * - width: The distance in map units along the east-west axis of the map projection.
   * - height: The distance in map units along the north-south axis of the map projection.
   *
   * ### Discussion
   * The following example demonstrates how to create a mapkit.MapRect instance from
   * map units and inspect the object’s origin and size properties:
   *
   * ```
   * // Defining a MapRect (x, y, width, height)
   * var mapRect = new mapkit.MapRect(0.1, 0.2, 0.3, 0.4);
   *
   * // mapRect.origin is a MapPoint:
   * var x = mapRect.origin.x; // 0.1
   * var y = mapRect.origin.x; // 0.2
   *
   * // mapRect.size is a MapSize:
   * var width = mapRect.size.width; // 0.3
   * var height = mapRect.size.height; // 0.4
   * ```
   */
  constructor(x: number, y: number, width: number, height: number);

  /**
   * The origin point of a rectangle.
   */
  origin: MapPoint;

  /**
   * The width and height of a rectangle, starting from the origin point.
   */
  size: MapSize;

  /**
   * Returns the maximum x-axis value of a rectangle.
   */
  readonly maxX: () => number;

  /**
   * Returns the maximum y-axis value of a rectangle.
   */
  readonly maxY: () => number;

  /**
   * Returns the midpoint along the x-axis of a rectangle.
   */
  readonly midX: () => number;

  /**
   * Returns the midpoint along the y-axis of a rectangle.
   */
  readonly midY: () => number;

  /**
   * Returns the minimum x-axis value of a rectangle.
   */
  readonly minX: () => number;

  /**
   * Returns the minimum y-axis value of a rectangle.
   */
  readonly minY: () => number;

  /**
   * Returns a scaled map rectangle for a map location.
   *
   * ### Parameters
   * - scaleFactor: The scale factor.
   * - scaleCenter: The center map point for scaling.
   *
   * ### Discussion
   * The following example demonstrates scaling a mapkit.MapRect instance
   * first with a common center, and then with a common origin:
   *
   * ```
   * var mapRect = new mapkit.MapRect(0.1, 0.2, 0.3, 0.4);
   *
   * // Scale a MapRect to be 2x the width and 2x the height of mapRect
   * // and have the same center.
   * var scaledRect = mapRect.scale(2);
   *
   * // Same scale but this time mapRect and scaledRectAroundOrigin
   * // have the same origin rather than the same center.
   * var scaledRectAroundOrigin = mapRect.scale(2, new mapkit.MapPoint(mapRect.minX(), mapRect.maxX()));
   * ```
   */
  readonly scale: (scaleFactor: number, scaleCenter: MapPoint) => MapRect;

  /**
   * Returns the region that corresponds to a map rectangle.
   *
   * ### Return Value
   * A mapkit.CoordinateRegion object that corresponds to a map rectangle.
   *
   * ### Discussion
   * It is often easier to work with a map rectangle than a mapkit.CoordinateRegion.
   *
   * The following example demonstrates how to convert a mapkit.MapRect instance to a
   * mapkit.CoordinateRegion and back again:
   *
   * ```
   * var mapRect = new mapkit.MapRect(0.1, 0.2, 0.3, 0.4);
   *
   * // Return a coordinate region with center (33.841220320476786, -90), and span (106.57400641480324, 108)
   * var coordinateRegion = mapRect.toCoordinateRegion();
   *
   * // Return the same map rect as mapRect, modulo floating point inaccuracies
   * var newMapRect = coordinateRegion.toMapRect();
   * ```
   */
  readonly toCoordinateRegion: () => CoordinateRegion;

  /**
   * Returns a copy of a map rectangle
   */
  readonly copy: () => MapRect;

  /**
   * Compares whether two map rectangles are equal.
   *
   * ### Parameters
   * - anotherRect: The map rectangle to use for comparison.
   *
   * ### Return Value
   * Returns true if a rectangle exactly matches anotherRect.
   * Returns false if the origin point or size values are different.
   */
  readonly equals: (anotherRect: MapRect) => Boolean;
}
