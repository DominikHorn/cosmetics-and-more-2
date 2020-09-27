import { BoundingRegion } from "./BoundingRegion";
import { Coordinate } from "./Coordinate";
import { CoordinateSpan } from "./CoordinateSpan";
import { MapRect } from "./MapRect";

/**
 * A rectangular area on a map defined by a center coordinate
 * and a span, expressed in degrees of latitude and longitude.
 */
export declare class CoordinateRegion {
  /**
   * A rectangular geographic region centered around a latitude and
   * longitude coordinate.
   *
   * ### Parameters
   * - center: A mapkit.Coordinate that is center point of the region.
   * - span: A mapkit.CoordinateSpan that represents the amount of map to
   *   display. The span also defines the current zoom level used by the
   *   map object.
   *
   * ### Discussion
   * Create a coordinate region by passing a center coordinate and span
   * to the constructor:
   *
   * ```
   * var coordinate = new mapkit.Coordinate(37.415, -122.048333); // latitude, longitude
   * var span = new mapkit.CoordinateSpan(.016, .016); // latitude delta, longitude delta
   * var region = new mapkit.CoordinateRegion(coordinate, span);
   * ```
   */
  constructor(center: Coordinate, span: CoordinateSpan);

  /**
   * The center point of the region.
   *
   * ### Discussion
   * Create a mapkit.Coordinate with a latitude and longitude pair:
   *
   * ```
   * var center = new mapkit.Coordinate(37.415, -122.048333); // latitude, longitude
   * ```
   */
  center: Coordinate;

  /**
   * The horizontal and vertical span representing the amount of map
   * to display.
   *
   * ### Discusson
   * A mapkit.CoordinateSpan also defines the current zoom level used by
   * the map object.
   */
  span: CoordinateSpan;

  /**
   * The distance provided in meters or the longest distance
   * derived from the center point to the region’s bounding
   * box.
   *
   * ### Discussion
   * When fetching points of interest with a region, you may
   * compare this value with MaxRadius to determine if this
   * region is larger than the maximum available radius for a
   * points of interest search.
   */
  readonly radius: number;

  /**
   * Returns a copy of the calling coordinate region.
   */
  readonly copy: () => CoordinateRegion;

  /**
   * Returns a Boolean value indicating whether two regions are equal.
   *
   * ### Parameters
   * - anotherRegion: The region to compare.
   *
   * ### Return Value
   * true if the region specified by anotherRegion is equal to the
   * calling mapkit.CoordinateRegion; otherwise, false.
   *
   * ### Discussion
   * To determine whether a given region is equal to the region
   * that is currently shown on the map:
   *
   * ```
   * // Create a map.
   * var map = new mapkit.Map("my-map-element-id");
   *
   * // Create a region named myRegion.
   * var coordinate = new mapkit.Coordinate(37.415, -122.048333); // latitude, longitude
   * var span = new mapkit.CoordinateSpan(.016, .016); // latitude delta, longitude delta
   * var myRegion = new mapkit.CoordinateRegion(coordinate, span);
   *
   * // Test whether myRegion is equal to the current map region.
   * if (myRegion.equals(map.region))
   *   console.log("These two regions are equal.");
   * ```
   */
  readonly equals: (anotherRegion: CoordinateRegion) => Boolean;

  /**
   * Returns the bounding region that corresponds to the calling coordinate region.
   *
   * ###Return Value
   * A mapkit.BoundingRegion that corresponds to the calling mapkit.CoordinateRegion.
   *
   * ### Discussion
   * A bounding region is similar to a coordinate region; both represent a rectangular
   * area on the 2D projected surface of the map. While a coordinate region is defined
   * by a center coordinate and a span, a bounding region is defined by coordinates
   * representing the rectangle's northeast and southwest corners.
   *
   * To convert a coordinate region to a bounding region:
   *
   * ```
   * // Create a coordinate region named myRegion.
   * var coordinate = new mapkit.Coordinate(37.415, -122.048333); // latitude, longitude
   * var span = new mapkit.CoordinateSpan(.016, .016); // latitude delta, longitude delta
   * var myRegion = new mapkit.CoordinateRegion(coordinate, span);
   *
   * // Convert this coordinate region to a bounding region.
   * var myBoundingRegion = myRegion.toBoundingRegion();
   * ```
   */
  readonly toBoundingRegion: () => BoundingRegion;

  /**
   * Returns the map rectangle that corresponds to the calling coordinate region
   */
  readonly toMapRect: () => MapRect;
}
