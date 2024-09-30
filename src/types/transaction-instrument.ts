/**
 * File Generated by Sideko (sideko.dev)
 */

import * as types from "new-day-ts/types";

export type TransactionInstrument = {
  "3DSecure"?: types.ThreeDSecure;
  /**
   * First Six Digits of the Card number, if applicable
   */
  firstSixDigits?: string | null;
  /**
   * Last four Digits of the Card number, if applicable
   */
  lastFourDigits?: string | null;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | undefined
    | types.ThreeDSecure
    | undefined
    | null
    | string
    | undefined
    | null
    | string
    | any;
};
