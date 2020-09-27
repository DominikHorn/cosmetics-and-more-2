/**
 * The width and height of a map region.
 *
 * You use the delta values in a coordinate span to indicate
 * the desired zoom level of the map. Smaller delta values
 * correspond to a higher zoom level. The "span" in this class
 * refers to the width and height of a region, with distances
 * expressed in degrees of latitude and longitude.
 */
export declare class CoordinateSpan {
  /**
   * Creates a new coordinate span object with the specified latitude and longitude deltas.
   *
   * ### Parameters
   * - latitudeDelta: The amount of north-to-south distance (measured in degrees)
   *   to display on the map. Unlike longitudinal distances, which vary based on
   *   the latitude, one degree of latitude is always approximately 111 kilometers
   *   (69 miles).
   *
   * - longitudeDelta: The amount of east-to-west distance (measured in degrees)
   *   to display for the map region. The number of kilometers spanned by a longitude
   *   range varies based on the current latitude. For example, one degree of longitude
   *   spans a distance of approximately 111 kilometers (69 miles) at the equator but
   *   shrinks to 0 kilometers at the poles.
   *
   * ### Discussion
   * The latitude and longitude delta parameters should be positive numbers; negative
   * numbers are treated as zero.
   *
   * ```
   * var span = new mapkit.CoordinateSpan(.016, .016); // latitude delta, longitude delta
   * ```
   */
  constructor(latitudeDelta: number, longitudeDelta: number);

  /**
   * The amount of north-to-south distance (measured in degrees) to display on the map.
   *
   * ### Discussion
   * Unlike longitudinal distances, which vary based on the latitude, one degree of
   * latitude is always approximately 111 kilometers (69 miles).
   */
  latitudeDelta: number;

  /**
   * The amount of east-to-west distance (measured in degrees) to display for the map region.
   *
   * ### Discussion
   * The number of kilometers spanned by a longitude range varies based on the current latitude.
   * For example, one degree of longitude spans a distance of approximately 111 kilometers
   * (69 miles) at the equator but shrinks to 0 kilometers at the poles.
   */
  longitudeDelta: number;

  /**
   * Returns a copy of the coordinate span.
   */
  readonly copy: () => CoordinateSpan;

  /**
   * Returns a Boolean value that indicates whether two spans are equal.
   *
   * ### Parameters
   * - anotherSpan: The span to compare.
   *
   * ### Return Value
   * true if the span specified by anotherSpan equals this span; otherwise, false.
   */
  readonly equals: (anotherSpan: CoordinateSpan) => Boolean;
}
