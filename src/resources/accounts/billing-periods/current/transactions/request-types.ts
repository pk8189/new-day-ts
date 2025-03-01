/**
 * File Generated by Sideko (sideko.dev)
 */

import * as types from "new-day-ts/types";

export type ListRequest = {
  accountId: string;
  enrichData?: boolean;
  entryType?: types.GetAccountsAccountIdBillingPeriodsCurrentTransactionsEntryTypeEnum;
  filterType?: types.GetAccountsAccountIdBillingPeriodsCurrentTransactionsFilterTypeEnum;
  skip?: number;
  top?: number;
  contextTenantid: string;
};
