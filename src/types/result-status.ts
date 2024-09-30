/**
 * File Generated by Sideko (sideko.dev)
 */

export type ResultStatus = {
  /**
   * Machine-readable code explaining the status of the result, not an HTTP status code
   */
  code?: string;
  /**
   * Human-readable description explaining the status of the result, and guidance to resolve errors (if applicable)
   */
  message?: string;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]: undefined | string | undefined | string | any;
};