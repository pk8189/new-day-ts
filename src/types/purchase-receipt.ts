/**
 * File Generated by Sideko (sideko.dev)
 */

import * as types from "new-day-ts/types";

export type PurchaseReceipt = {
  /**
   * Designates the type of content expected in the purchase receipt, either purchase-level information (RECEIPT) or enhanced merchant details (MERCHANT_DETAILS)
   */
  contentType?: string;
  /**
   * Timestamp when the purchase receipt expires in Coordinated Universal Time (UTC). ISO 8601 format
   */
  expiresOn?: string;
  resultStatus?: types.ResultStatus;
  /**
   * URL to access the Ethoca-generated digital receipt for the specific transaction. Note that this link expires based on the expiresOn timestamp
   */
  url?: string;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | undefined
    | string
    | undefined
    | string
    | undefined
    | types.ResultStatus
    | undefined
    | string
    | any;
};