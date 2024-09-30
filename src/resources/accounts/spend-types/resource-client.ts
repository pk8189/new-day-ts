/**
 * File Generated by Sideko (sideko.dev)
 */

import {
  CoreResourceClient,
  CoreClient,
  RequestOptions,
  ApiPromise,
} from "new-day-ts/core";
import * as requests from "new-day-ts/resources/accounts/spend-types/request-types";
import * as types from "new-day-ts/types";

export class SpendTypesClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }

  /**
 * import Client from "new-day-ts";

const client = new Client();

const res = await client.accounts.spendTypes.list({
  accountId: "string",
  contextTenantid: "string",
});
 */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<
    | types.GetAccountSpendTypesResponse
    | types.GetAccountSpendTypesResponse
    | types.GetAccountSpendTypesResponse
  > {
    return this._client.makeRequest({
      method: "get",
      path: `/accounts/${request.accountId}/spend-types`,
      headers: { "context-tenantid": request.contextTenantid },
      responseType: "json",
      opts,
    });
  }
}
