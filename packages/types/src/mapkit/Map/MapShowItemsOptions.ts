import { CoordinateSpan } from "../CoordinateSpan";
import { Padding } from "../Padding";

/**
 * Options that determine map parameters used when showing items.
 *
 * ### Overview
 * Use these options when calling showItems.
 */
export interface MapShowItemsOptions {
  /**
   * A Boolean value that determines whether the map is animated
   * as the map region changes to show the items.
   */
  animate?: boolean;

  /**
   * Spacing that is added around the computed map region when showing items.
   */
  padding?: Padding;

  /**
   * The minimum longitudinal and latitudinal span the map should display.
   *
   * ### Discussion
   * Set this value to ensure that showItems sets a map region
   * no smaller than the minimum span specified.
   */
  minimumSpan?: CoordinateSpan;
}
