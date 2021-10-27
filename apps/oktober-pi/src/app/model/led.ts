/**
 * Eine einzelne Led, ...
 */
export interface Led {
  /**
   * Der 0-basierte Index
   *
   * @example 3
   */
  index: number;
  /**
   * Die Farbe als valider CSS-String
   *
   * @example '#ffccdd'
   * @example 'yellow'
   */
  color: string;
}

/**
 * Eine unveränderliche Liste von Leds
 *
 * @see {Led}
 */
export type Leds = ReadonlyArray<Led>;
