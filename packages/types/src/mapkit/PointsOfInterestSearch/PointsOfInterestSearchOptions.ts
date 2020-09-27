import { Coordinate } from "../Coordinate";
import { CoordinateRegion } from "../CoordinateRegion";
import { PointOfInterestFilter } from "../PointOfInterestFilter";

/**
 * Options that you may provide when you create a points of interest search.
 */
export interface PointsOfInterestSearchOptions {
  /**
   * The language ID to use when fetching points of interest.
   */
  language?: string;

  /**
   * The center point of the request represented as latitude and longitude.
   */
  center?: Coordinate;

  /**
   * The distance provided in meters, or the longest distance derived
   * from the center point to the region’s bounding box.
   */
  radius?: number;

  /**
   * The region that bounds the area in which to fetch points of interest.
   *
   * ### Discussion
   * The system determines the region from the provided bounding box or
   * derives the region from a box enclosing the circle specified by center
   * and radius.
   */
  region?: CoordinateRegion;

  /**
   * A filter that lists points of interest categories to include or exclude.
   */
  pointOfInterestFilter: PointOfInterestFilter;
}
