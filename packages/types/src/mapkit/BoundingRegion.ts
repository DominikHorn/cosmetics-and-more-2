import { CoordinateRegion } from "./CoordinateRegion";
import { MapRect } from "./MapRect";

/**
 * A rectangular area on a map, defined by coordinates
 * of the rectangle's northeast and southwest corners.
 *
 * ### Overview
 * Similar to a mapkit.CoordinateRegion, mapkit.BoundingRegion
 * represents a rectangular area on the 2D-projected surface.
 * However, instead of being defined by a center coordinate and
 * a span, a bounding region is defined by the coordinates of the
 * rectangle's northeast and southwest corners.
 */
export declare class BoundingRegion {
  /**
   * Creates a rectangular bounding region defined by the latitude
   * and longitude coordinates of the rectangle's northeast and
   * southwest corners.
   *
   * ### Parameters
   * - northLatitude: The north latitude of the bounding region.
   * - eastLongitude: The east longitude of the bounding region.
   * - southLatitude: The south latitude of the bounding region.
   * - westLongitude: The west longitude of the bounding region.
   */
  constructor(
    northLatitude: number,
    eastLongitude: number,
    southLatitude: number,
    westLongitude: number
  );

  /**
   * The north latitude of the bounding region.
   */
  northLatitude: number;

  /**
   * The east longitude of the bounding region.
   */
  eastLongitude: number;

  /**
   * The south latitude of the bounding region.
   */
  southLatitude: number;

  /**
   * The east longitude of the bounding region.
   */
  westLongitude: number;

  /**
   * Returns a copy of the calling bounding region.
   */
  readonly copy: () => BoundingRegion;

  /**
   * Returns the coordinate region that corresponds to the calling bounding region.
   */
  readonly toCoordinateRegion: () => CoordinateRegion;

  /**
   * Returns the map rectangle that corresponds to the calling coordinate region.
   */
  readonly toMapRect: () => MapRect;
}
