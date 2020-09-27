/**
 * A dictionary of options that determines an overlay's data,
 * and indicates whether it is visible, in an enabled state,
 * and in a selected state.
 */
export interface OverlayOptions {
  /**
   * Custom data to associate with the overlay.
   *
   * ### Discussion
   * You choose the data to assign to the overlay.
   * It can be any JavaScript value. The default
   * value is {}.
   */
  data?: any;

  /**
   * A Boolean value that determines if an overlay is visible.
   *
   * ### Discussion
   * The default value is true
   */
  visible?: boolean;

  /**
   * A Boolean value that determines whether the overlay responds to user interaction.
   *
   * ### Discussion
   * The default value is true
   */
  enabled?: boolean;

  /**
   * A Boolean value that indicates whether the overlay is in a selected state.
   *
   * ### Discussion
   * The default value is false
   */
  selected?: boolean;
}
