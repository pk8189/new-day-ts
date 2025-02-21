/**
 * File Generated by Sideko (sideko.dev)
 */

export type CurrentRates = {
  /**
   * Current Annual Equivalent Rate of the Spend Type (Plan)
   */
  annualEquivalentRate?: number;
  /**
   * Annual interest rate used by posting for this Spend Type (Plan)
   */
  annualInterestRate?: number;
  /**
   * Date when current rates expire
   */
  expiresAt?: string | null;
  /**
   * Monthly interest rate used by posting for this Spend Type (Plan)
   */
  monthlyInterestRate?: number;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | undefined
    | number
    | undefined
    | number
    | undefined
    | null
    | string
    | undefined
    | number
    | any;
};
