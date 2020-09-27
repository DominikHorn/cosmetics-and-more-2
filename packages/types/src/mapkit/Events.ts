export type EventIdentifiers = "configuration-change" | "error";
export interface Event<Type extends EventIdentifiers> {
  readonly status: Type extends "configuration-change"
    ? "Initialized" | "Refreshed"
    : "Unauthorized" | "Too Many Requests";
}

/**
 * MapKit configuration changed due to either a successful initialization or a refresh.
 * The event has the property status (String), which indicates the configuration change status.
 *
 * - Initialized: MapKit successfully initialized and configured.
 * - Refreshed: MapKit configuration updated.
 */
export type ConfigurationChangeEvent = Event<"configuration-change">;

/**
 * MapKit failed to initialize. The event has the property status (String), which indicates the status response.
 *
 * - Unauthorized: The authorization token provided is invalid.
 * - Too Many Requests: The authorization token provided is based on a Maps ID, which has exceeded its allowed daily usage.
 */
export type ErrorEvent = Event<"error">;
