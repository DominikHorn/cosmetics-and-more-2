/**
 * Constants indicating the system of measurement displayed on the map.
 *
 * ### Overview
 * Use these constants with the map's distances property.
 */
export enum Distances {
  /**
   * A constant indicating the measurement system is metric.
   */
  Metric = "Metric",

  /**
   * A constant indicating the measurement system is imperial.
   */
  Imperial = "Imperial",

  /**
   * A constant indicating the measurement system is adaptive, and determined based on the map's language.
   */
  Adaptive = "Adaptive",
}
