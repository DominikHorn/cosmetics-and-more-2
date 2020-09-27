import { PointsOfInterestSearchDelegate } from "./PointsOfInterestSearchDelegate";
import { PointsOfInterestSearchOptions } from "./PointsOfInterestSearchOptions";
import { PointsOfInterestSearchResponse } from "./PointsOfInterestSearchResponse";

/**
 * An object that fetches points of interest within a specified region.
 *
 * Use mapkit.PointsOfInterestSearch to fetch points of interest. Mapkit JS
 * exposes this functionality through a search object that makes network
 * requests to the search service. To use search, create an instance of a
 *  mapkit.PointsOfInterestSearch object with the desired options and use
 * the instance to make search requests. You may optionally specify a
 * mapkit.PointOfInterestFilter that lists categories to include or exclude.
 * The default behavior of the fetch returns all points of interest.
 *
 * To leverage the map’s current region to request points of interest,
 * create a request with a rectangular bounding box using a mapkit.CoordinateRegion.
 * The request fetches points of interest within the rectangular region.
 *
 * To retrieve points of interest nearby or “around the user,” create a
 * request with a circular area defined by a center point of
 * mapkit.Coordinate and a radius in meters.
 *
 * If you set a language ID, the fetch returns addresses in the selected language,
 * if available; for instance, fr-CA or fr-FR. If you don’t provide a language ID,
 * the fetch request uses the language ID initialized with the map.
 */
export declare class PointsOfInterestSearch {
  static MaxRadius: number;

  /**
   * Creates a search object for fetching points of interest.
   *
   * ### Discussion
   * To use search, create an instance of a mapkit.PointsOfInterestSearch.
   * When you initialize a search, you can optionally set properties of the
   * search object by providing a dictionary of PointsOfInterestSearchOptions.
   */
  constructor(options?: PointsOfInterestSearchOptions);

  /**
   * Fetches points of interest.
   *
   * ### Parameters
   * - callback A callback function or delegate object with the following parameters:
   *   - error: An error code and descriptive message.
   *   - data: An object parsed from server-returned JSON.
   * - options: A PointsOfInterestSearchOptions object
   *
   * ### Return Value
   * This method returns a request ID (integer) that you can use with
   * cancel to abort a pending request.
   *
   * ### Discussion
   * The search method returns a set of points of interest within the region
   * defined and matching the mapkit.PointOfInterestFilter.
   *
   * MapKit JS invokes the callback function on failure and success with two arguments,
   * error and data that represent failure and success information, respectively. You
   * may optionally provide a delegate object instead of a callback. If you call cancel
   * before MapKit JS responds, the callback or delegate isn’t called.
   */
  search(
    callback:
      | ((error: Error, data: PointsOfInterestSearchResponse) => void)
      | PointsOfInterestSearchDelegate,
    options?: PointsOfInterestSearchOptions
  ): number;

  /**
   * Cancels a search request using its request ID.
   *
   * ### Parameters
   * - id: Pass the integer ID returned by a call to search. The system
   *   ignores an invalid ID or the ID of a request that has completed.
   *
   * ### Return Value
   * true if the server canceled the pending search request.
   *
   * ### Discussion
   * Cancel an uncompleted search request by providing its request ID,
   * the value returned from a call to search, to this method.
   */
  cancel(id: number): Boolean;
}
