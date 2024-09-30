/**
 * File Generated by Sideko (sideko.dev)
 */

import * as types from "new-day-ts/types";

export type AccountPositionBalances = {
  pendingCredits?: types.Amount;
  pendingDebits?: types.Amount;
  previousBillingPeriod?: types.Amount;
  total?: types.Amount;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | undefined
    | types.Amount
    | undefined
    | types.Amount
    | undefined
    | types.Amount
    | undefined
    | types.Amount
    | any;
};