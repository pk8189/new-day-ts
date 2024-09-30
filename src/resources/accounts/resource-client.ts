/**
 * File Generated by Sideko (sideko.dev)
 */

import {
  CoreResourceClient,
  CoreClient,
  RequestOptions,
  ApiPromise,
} from "new-day-ts/core";
import { AuthorisationsClient } from "new-day-ts/resources/accounts/authorisations";
import { AvailableLimitsClient } from "new-day-ts/resources/accounts/available-limits";
import { BalancesClient } from "new-day-ts/resources/accounts/balances";
import { BillingPeriodsClient } from "new-day-ts/resources/accounts/billing-periods";
import { DuesClient } from "new-day-ts/resources/accounts/dues";
import { InterestRatesClient } from "new-day-ts/resources/accounts/interest-rates";
import { PositionsClient } from "new-day-ts/resources/accounts/positions";
import { SpendTypesClient } from "new-day-ts/resources/accounts/spend-types";
import { TransactionsClient } from "new-day-ts/resources/accounts/transactions";
import * as requests from "new-day-ts/resources/accounts/request-types";
import * as types from "new-day-ts/types";

export class AccountsClient extends CoreResourceClient {
  authorisations: AuthorisationsClient;
  availableLimits: AvailableLimitsClient;
  balances: BalancesClient;
  billingPeriods: BillingPeriodsClient;
  dues: DuesClient;
  interestRates: InterestRatesClient;
  positions: PositionsClient;
  spendTypes: SpendTypesClient;
  transactions: TransactionsClient;

  constructor(client: CoreClient) {
    super(client);

    this.authorisations = new AuthorisationsClient(this._client);
    this.availableLimits = new AvailableLimitsClient(this._client);
    this.balances = new BalancesClient(this._client);
    this.billingPeriods = new BillingPeriodsClient(this._client);
    this.dues = new DuesClient(this._client);
    this.interestRates = new InterestRatesClient(this._client);
    this.positions = new PositionsClient(this._client);
    this.spendTypes = new SpendTypesClient(this._client);
    this.transactions = new TransactionsClient(this._client);
  }

  /**
 * import Client from "new-day-ts";

const client = new Client();

const res = await client.accounts.get({
  accountId: "string",
  contextTenantid: "string",
});
 */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<
    | types.GetAccountResponse
    | types.GetAccountResponse
    | types.GetAccountResponse
  > {
    return this._client.makeRequest({
      method: "get",
      path: `/accounts/${request.accountId}`,
      headers: { "context-tenantid": request.contextTenantid },
      responseType: "json",
      opts,
    });
  }
}
