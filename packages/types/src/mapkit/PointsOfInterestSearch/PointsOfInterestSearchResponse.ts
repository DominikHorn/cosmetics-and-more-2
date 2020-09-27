import { Place } from "../Place";

/**
 * The result of a request used to fetch points of interest.
 */
export interface PointsOfInterestSearchResponse {
  /**
   * The list of points of interest that match the request options.
   */
  readonly places: Place[];
}
