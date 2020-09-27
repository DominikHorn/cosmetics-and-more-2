/**
 * A pair of values, in map units, that define the
 * width and height of a rectangular area of a map
 * projection.
 *
 * ### Overview
 * Use a map size to represent a subset of a map
 * projection. Map units are a value from 0 to 1
 * that represent an interpolated location within
 * the height or width of the full map projection.
 */
export declare class MapSize {
  /**
   * Creates an object containing the width and height of a
   * projected coordinate span.
   *
   * ### Parameters
   * - width: The distance in map units along the east-west axis
   *   of the map projection.
   * - height: The distance in map units along the north-south
   *   axis of the map projection.
   *
   * ### Discussion
   * The following example demonstrates how to create a mapkit.MapSize
   * instance from map units:
   *
   * ```
   * var mapSize = new mapkit.MapSize(0.3, 0.4);
   * var width = mapSize.width; // 0.3
   * var height = mapSize.height; // 0.4
   * ```
   */
  constructor(width: number, height: number);

  /**
   * The width of the map size in map units
   */
  width: number;

  /**
   * The height of the map size in map units.
   */
  height: number;

  /**
   * Returns a copy of the map size object
   */
  readonly copy: () => MapSize;

  /**
   * Compares the sizes of two maps and indicates whether
   * they are of equal value.
   *
   * ### Parameters
   * - anotherSize: The map size to use for comparison.
   *
   * ### Return Value
   * Returns true if the width and height values of a map
   * size exactly match the corresponding values of anotherSize.
   * Returns false if the values aren't an exact match.
   */
  readonly equals: (anotherSize: MapSize) => Boolean;
}
