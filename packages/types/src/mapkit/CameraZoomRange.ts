/**
 * A minimum and maximum camera distance as meters from the center of the map.
 */
export interface CameraZoomRange {
  /**
   * The minimum allowed distance of the camera from the center of the map in meters.
   */
  readonly minCameraDistance: number;

  /**
   * The maximum allowed distance of the camera from the center of the map in meters.
   */
  readonly maxCameraDistance: number;
}
