/**
 * File Generated by Sideko (sideko.dev)
 */

import {
  CoreResourceClient,
  CoreClient,
  RequestOptions,
  ApiPromise,
} from "new-day-ts/core";
import * as requests from "new-day-ts/resources/accounts/billing-periods/balances/request-types";
import * as types from "new-day-ts/types";

export class BalancesClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }

  /**
   * Shows balances for the given billing period.
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<
    | types.GetBillingPeriodBalancesResponse
    | types.GetBillingPeriodBalancesResponse
    | types.GetBillingPeriodBalancesResponse
  > {
    return this._client.makeRequest({
      method: "get",
      path: `/accounts/${request.accountId}/billing-periods/${request.billingPeriodId}/balances`,
      headers: { "context-tenantid": request.contextTenantid },
      responseType: "json",
      opts,
    });
  }
}
