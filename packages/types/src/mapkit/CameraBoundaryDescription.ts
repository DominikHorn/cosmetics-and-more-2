import { CoordinateRegion } from "./CoordinateRegion";
import { MapRect } from "./MapRect";

/**
 * An object literal containing at least one property defining an area on the map.
 *
 * The CameraBoundaryDescription can contain the mapRect or region properties, or both.
 * Both properties describe a rectangular area on the map.
 */
export type CameraBoundaryDescription =
  | {
      readonly mapRect: MapRect;
      readonly region: CoordinateRegion;
    }
  | {
      readonly mapRect?: MapRect;
      readonly region: CoordinateRegion;
    }
  | {
      readonly mapRect: MapRect;
      readonly region?: CoordinateRegion;
    };
