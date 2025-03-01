/**
 * File Generated by Sideko (sideko.dev)
 */

import {
  CoreResourceClient,
  CoreClient,
  RequestOptions,
  ApiPromise,
} from "new-day-ts/core";
import * as requests from "new-day-ts/resources/accounts/balances/request-types";
import * as types from "new-day-ts/types";

export class BalancesClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }

  /**
 * import Client from "new-day-ts";

const client = new Client();

const res = await client.accounts.balances.list({
  accountId: "string",
  contextTenantid: "string",
});
 */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<
    | types.GetAccountBalancesResponse
    | types.GetAccountBalancesResponse
    | types.GetAccountBalancesResponse
  > {
    return this._client.makeRequest({
      method: "get",
      path: `/accounts/${request.accountId}/balances`,
      headers: { "context-tenantid": request.contextTenantid },
      responseType: "json",
      opts,
    });
  }
}
