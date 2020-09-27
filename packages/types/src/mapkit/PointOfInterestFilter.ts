import { PointOfInterestCategory } from "./PointOfInterestCategory";

/**
 * A filter used to determine the points of interest to
 * include or exclude on a map or local search.
 *
 * ### Overview
 * You can apply a point of interest filter when you create a map
 * (MapConstructorOptions), when you update an existing map
 * (mapkit.Map), or when you fetch points of interest
 * (SearchConstructorOptions).
 */
export declare class PointOfInterestFilter {
  /**
   * Creates a point of interest filter that includes
   * categories from a list that you provide.
   */
  static including(
    categoryList: PointOfInterestCategory[]
  ): PointOfInterestFilter;

  /**
   * Creates a point of interest filter that excludes
   * categories from a list that you provide.
   */
  static excluding(
    categoryList: PointOfInterestCategory[]
  ): PointOfInterestFilter;

  /**
   * A filter that includes all point of interest categories.
   *
   * ### Discussion
   * Use this property to get a filter that allows a map or
   * search to show all points of interest.
   */
  static filterIncludingAllCategories: PointOfInterestFilter;

  /**
   * A filter that excludes all point of interest categories.
   *
   * ### Discussion
   * Use this property to get a filter that constrains a map
   * or search to not show any points of interest.
   */
  static filterExcludingAllCategories: PointOfInterestFilter;

  /**
   * Returns a Boolean value that indicates whether the filter
   * includes the provided point of interest category.
   */
  includesCategory: (category: PointOfInterestCategory) => Boolean;

  /**
   * Returns a Boolean value that indicates whether the filter
   * excludes the provided point of interest category.
   */
  excludesCategory: (category: PointOfInterestCategory) => Boolean;
}
