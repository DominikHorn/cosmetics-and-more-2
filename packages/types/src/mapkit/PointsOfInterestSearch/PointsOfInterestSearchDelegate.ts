import { PointsOfInterestSearchResponse } from "./PointsOfInterestSearchResponse";

/**
 * An object or callback function that MapKit JS
 * calls when fetching points of interest.
 *
 * ### Overview
 * You may pass an object to the search method instead
 * of using of a search delegate callback function.
 * MapKit JS calls the following methods on the delegate
 * object when they exist:
 * - searchDidComplete – Upon successful completion of a search request,
 *   this method returns a data object that is the same as the one passed
 *   to the search callback function.
 * - searchDidError – Called when the search request fails.
 */
export interface PointsOfInterestSearchDelegate {
  /**
   * Tells the delegate that the search completed.
   *
   * ### Parameters
   * - data: The points of interest fetch results.
   *
   * ### Discussion
   * MapKit JS calls this method on successful completion
   * of a search request.
   */
  searchDidComplete?: (data: PointsOfInterestSearchResponse) => void;

  /**
   * Tells the delegate that the search failed due to an error.
   *
   * ### Parameters
   * - error: The error from a failed fetch for points of interest.
   *
   * ### Discussion
   * MapKit JS calls this method when the search request fails.
   */
  searchDidError?: (error: Error) => void;
}
