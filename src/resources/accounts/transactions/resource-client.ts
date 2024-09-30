/**
 * File Generated by Sideko (sideko.dev)
 */

import {
  CoreResourceClient,
  CoreClient,
  RequestOptions,
  ApiPromise,
} from "new-day-ts/core";
import * as requests from "new-day-ts/resources/accounts/transactions/request-types";
import * as types from "new-day-ts/types";
import qs from "qs";

export class TransactionsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }

  /**
   * Searches specific transactions for the given account and transaction identifier.
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<
    | types.TransactionsSearchResponse
    | types.TransactionsSearchResponse
    | types.TransactionsSearchResponse
  > {
    return this._client.makeRequest({
      method: "get",
      path: `/accounts/${request.accountId}/transactions/${request.transactionId}`,
      headers: { "context-tenantid": request.contextTenantid },
      responseType: "json",
      opts,
    });
  }

  /**
   * Searches transactions for the given account.
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<
    | types.TransactionsSearchResponse
    | types.TransactionsSearchResponse
    | types.TransactionsSearchResponse
  > {
    return this._client.makeRequest({
      method: "get",
      path: `/accounts/${request.accountId}/transactions`,
      query: [
        qs.stringify({ amountFrom: request.amountFrom }),
        qs.stringify({ amountTo: request.amountTo }),
        qs.stringify({ dateFrom: request.dateFrom }),
        qs.stringify({ dateTo: request.dateTo }),
        qs.stringify({ enrichData: request.enrichData }),
        qs.stringify({ entryType: request.entryType }),
        qs.stringify({ filterType: request.filterType }),
        qs.stringify({ linkedAccount: request.linkedAccount }),
        qs.stringify({ searchText: request.searchText }),
        qs.stringify({ skip: request.skip }),
        qs.stringify({ top: request.top }),
      ],
      headers: { "context-tenantid": request.contextTenantid },
      responseType: "json",
      opts,
    });
  }
}