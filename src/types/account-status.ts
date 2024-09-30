/**
 * File Generated by Sideko (sideko.dev)
 */

export type AccountStatus = {
  /**
   * Status value (Open, Closed etc.)
   */
  name?: string;
  /**
   * Last change date of status
   */
  updatedAt?: string | null;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | undefined
    | string
    | undefined
    | null
    | string
    | any;
};