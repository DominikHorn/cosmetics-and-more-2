import { MapPoint } from "./MapPoint";

/**
 * An object representing the latitude and longitude
 * for a point on the Earth's surface.
 */
export declare class Coordinate {
  /**
   * Creates a coordinate object with the specified latitude and longitude.
   *
   * ### Parameters
   * - latitude: The latitude in degrees.
   * - longitude: The longitude in degrees.
   *
   * ### Discussion
   * Create a new mapkit.Coordinate like this:
   *
   * ```
   * var coordinate = new mapkit.Coordinate(37.415, -122.048333);	// latitude, longitude
   * coordinate.equals(otherCoordinate) // Returns true if otherCoordinate is at the same position (within a small margin of error).
   * ```
   */
  constructor(latitude: number, longitude: number);

  /**
   * The latitude in degrees.
   *
   * ### Discussion
   * Positive values indicate latitudes north of the equator.
   * Negative values indicate latitudes south of the equator.
   */
  latitude: number;

  /**
   * The longitude in degrees.
   *
   * ### Discussion
   * Measurements are relative to the zero meridian, with positive
   * values extending east of the meridian and negative values
   * extending west of the meridian.
   */
  longitude: number;

  /**
   * Returns a copy of the coordinate.
   */
  readonly copy: () => Coordinate;

  /**
   * Returns a Boolean value indicating whether two coordinates are equal.
   *
   * ### Parameters
   * - anotherCoordinate: The coordinate to compare.
   *
   * ### Return Value
   * true if the coordinate specified by anotherCoordinate equals this
   * coordinate; otherwise, false.
   */
  readonly equals: (anotherCoordinate: Coordinate) => Boolean;

  /**
   * Returns the map point that corresponds to the coordinate.
   *
   * ### Return Value
   * The map point value that corresponds to the coordinate on a two-dimensional map projection.
   */
  readonly toMapPoint: MapPoint;

  /**
   * Returns the unwrapped map point that corresponds to the coordinate.
   *
   * ### Return Value
   * The unwrapped map point value that corresponds to the coordinate on a
   * two-dimensional map projection.
   */
  readonly toUnwrappedMapPoint: MapPoint;
}
