/**
 * Constant values used to provide a hint the map uses to
 * prioritize displaying annotations. Values range from
 * 0 to 1000.
 */
export enum DisplayPriority {
  /**
   * A low display priority, with a preset value of 250 out of 1000.
   */
  Low = 250,

  /**
   * A high display priority, with a preset value of 750 out of 1000.
   */
  High = 750,

  /**
   * The highest display priority, with a preset value of 1000 out of 1000.
   */
  Required,
}
