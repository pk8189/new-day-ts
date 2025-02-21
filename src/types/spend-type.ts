/**
 * File Generated by Sideko (sideko.dev)
 */

import * as types from "new-day-ts/types";

export type SpendType = {
  /**
   * Annual interest rate used by posting for this Spend Type (Plan)
   */
  annualInterestRate?: number;
  closingBalance?: types.Amount;
  /**
   * Current Annual Effective Rate of the Spend Type (Plan)
   */
  currentAer?: number | null;
  /**
   * Description of the Spend Type e.g. &quot;STANDARD RETAIL&quot;, &quot;DEFAULT FEE - RETAIL RATE&quot;, &quot;BT&quot; etc.
   */
  description?: string;
  /**
   * Effective rate of the Spend Type (Plan)
   */
  effectiveRate?: number | null;
  /**
   * Spend Type identifier (e.g. &quot;Plan Number - Plan Seq&quot;)
   */
  id?: string | null;
  interestAmount?: types.Amount;
  /**
   * Monthly interest rate used by posting for this Spend Type (Plan)
   */
  monthlyInterestRate?: number | null;
  /**
   * Spend Type Name (e.g. Purchase, Cash, Instalment etc.)
   */
  name?: string;
  openingBalance?: types.Amount;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | undefined
    | number
    | undefined
    | types.Amount
    | undefined
    | null
    | number
    | undefined
    | string
    | undefined
    | null
    | number
    | undefined
    | null
    | string
    | undefined
    | types.Amount
    | undefined
    | null
    | number
    | undefined
    | string
    | undefined
    | types.Amount
    | any;
};
