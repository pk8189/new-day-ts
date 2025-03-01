/**
 * File Generated by Sideko (sideko.dev)
 */

import * as types from "new-day-ts/types";

export type GetAccountAvailableLimitsResponse = {
  /**
   * Collection of available credit limits
   */
  availableCreditLimits?: types.AvailableCreditLimit[];

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]: undefined | types.AvailableCreditLimit[] | any;
};
