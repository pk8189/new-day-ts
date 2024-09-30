/**
 * File Generated by Sideko (sideko.dev)
 */

import * as types from "new-day-ts/types";

export type GetAccountPositionsResponse = {
  /**
   * Account Identifier (for integration)
   */
  accountId?: string | null;
  /**
   * Account Number (for display)
   */
  accountNumber?: string | null;
  /**
   * Annual Percentage Rate on the account based on when the system last recalculated
   */
  apr?: string | null;
  /**
   * Collection of available credit limits
   */
  availableCreditLimits?: types.AvailableCreditLimit[];
  balances?: types.AccountPositionBalances;
  /**
   * Account creation Date (+time)
   */
  createdAt?: string | null;
  creditLimitIncreasePreference?: types.CreditLimitIncreasePreference;
  /**
   * Collection of defined credit limits
   */
  creditLimits?: types.AccountCreditLimit[];
  /**
   * List of Customers
   */
  customers?: types.Customer[];
  /**
   * Day the account goes through billing cycle process
   */
  cycleDay?: number | null;
  dues?: types.AccountPositionDues;
  /**
   * Enumerated list of additional indicators (OverLimit, PastDue, DebtSold)
   */
  flags?: types.AccountStatusTypeEnum[];
  /**
   * Account Holder Identifier for legacy systems
   */
  legacyAccountHolderId?: string;
  linkedAccount?: types.LinkedAccount;
  /**
   * Unique Product Identifier - from Product Domain
   */
  productId?: string | null;
  status?: types.AccountStatus;
  /**
   * List of any treatments applied on to the account
   */
  treatments?: types.AccountTreatment[] | null;

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
    | types.AvailableCreditLimit[]
    | undefined
    | types.AccountPositionBalances
    | undefined
    | null
    | string
    | undefined
    | types.CreditLimitIncreasePreference
    | undefined
    | types.AccountCreditLimit[]
    | undefined
    | types.Customer[]
    | undefined
    | null
    | number
    | undefined
    | types.AccountPositionDues
    | undefined
    | types.AccountStatusTypeEnum[]
    | undefined
    | string
    | undefined
    | types.LinkedAccount
    | undefined
    | null
    | string
    | undefined
    | types.AccountStatus
    | undefined
    | null
    | types.AccountTreatment[]
    | any;
};