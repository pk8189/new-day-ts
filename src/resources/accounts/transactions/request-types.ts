/**
 * File Generated by Sideko (sideko.dev)
 */

import * as types from "new-day-ts/types";

export type ListRequest = {
  accountId: string;
  amountFrom?: number;
  amountTo?: number;
  dateFrom?: string;
  dateTo?: string;
  enrichData?: boolean;
  entryType?: types.GetAccountsAccountIdTransactionsEntryTypeEnum;
  filterType?: types.GetAccountsAccountIdTransactionsFilterTypeEnum;
  linkedAccount?: boolean;
  searchText?: string;
  skip?: number;
  top?: number;
  contextTenantid: string;
};

export type GetRequest = {
  accountId: string;
  transactionId: string;
  contextTenantid: string;
};