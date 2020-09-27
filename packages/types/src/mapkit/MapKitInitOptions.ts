/**
 * Initialization options for MapKit JS.
 */
export declare class MapKitInitOptions {
  /**
   * A callback function that obtains a token.
   *
   * ### Parameters
   * - done: A function that completes the MapKit JS token request. Called after creating a new token.
   *
   * ### Discussion
   * MapKit JS asyncronously invokes the authorizationCallback function throughout a session to obtain
   * new authorization tokens. In the callback, you create a token and pass it to the function that
   * MapKit JS provides in the done parameter.
   */
  authorizationCallback: (done: (token: string) => void) => void;

  /**
   * An ID that indicates the preferred language in which to display map labels,
   * controls, directions, and other text.
   *
   * ### Discussion
   *
   * The language ID lets you indicate the language in which to display map labels,
   * controls, error messages, and search and directions text. A language ID is made
   * up of a language designator followed by an optional region or script designator.
   * Some examples of language IDs are:
   *
   * - de (German)
   * - es-MX (Mexican Spanish)
   * - zh-Hans (simplified Chinese)
   * - es (Spanish)
   *
   * If the language ID is invalid or missing, MapKit JS uses the language preference
   * specified in the user's browser. If MapKit JS does not support the preferred language,
   * the language defaults to English.
   *
   * For more information about language IDs, see
   * [Internationalization and Localization Guide](https://developer.apple.com/library/ios/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html).
   */
  language?: string;
}
