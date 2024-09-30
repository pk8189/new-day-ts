/**
 * File Generated by Sideko (sideko.dev)
 */

export type Merchant = {
  /**
   * Merchant Category Code (MCC - ISO 18245 standard)
   */
  categoryCode?: string | null;
  /**
   * Merchant Category Description
   */
  categoryDescription?: string | null;
  /**
   * Merchant Location - City
   */
  city?: string | null;
  /**
   * Merchant Location - Country Code (ISO 3166 standard - Alpha 3)
   */
  countryCode?: string | null;
  /**
   * Identifier for Merchant
   */
  id?: string | null;
  /**
   * Merchant Name
   */
  name?: string | null;
  /**
   * Merchant Contact - Phone Number
   */
  phone?: string | null;
  /**
   * Merchant Location - State
   */
  state?: string | null;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | undefined
    | null
    | string
    | undefined
    | null
    | string
    | undefined
    | null
    | string
    | undefined
    | null
    | string
    | undefined
    | null
    | string
    | undefined
    | null
    | string
    | undefined
    | null
    | string
    | undefined
    | null
    | string
    | any;
};