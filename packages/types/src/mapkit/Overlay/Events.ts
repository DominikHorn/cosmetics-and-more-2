import { TileOverlay } from "./TileOverlay";

export type EventIdentifiers = "select" | "deselect" | "tile-error";

export interface Event<Type extends EventIdentifiers> {
  readonly overlay: Type extends "select" | "deselect"
    ? Type | undefined
    : never;

  readonly tileOverlay: Type extends "tile-error" ? TileOverlay : never;
  readonly tileUrl: Type extends "tile-error" ? string : never;
}

/**
 * The annotation's selected property was set to true.
 */
export type SelectEvent = Event<"select">;

/**
 * The annotation's selected property was set to false.
 */
export type DeselectEvent = Event<"deselect">;

/**
 * For each tile load failure, MapKit JS dispatches a tile-error event with two properties:
 * - tileOverlay: the tile overlay containing the failing tile.
 * - tileUrl: the specific tile URL string that failed.
 */
export type TileErrorEvent = Event<"tile-error">;
