
## SDK Usage Examples


### Returns standard account details including open date, credit limits, status etc.


**API Endpoint**: `GET /accounts/{accountId}`


#### Example Snippet

```typescript
import Client from "new-day-ts";

const client = new Client();

const res = await client.accounts.get({
  accountId: "string",
  contextTenantid: "string",
});
```

    
### Returns pending and/or declined authorisations.
Lists the authorisations for an account.

**API Endpoint**: `GET /accounts/{accountId}/authorisations`


#### Example Snippet

```typescript
import Client from "new-day-ts";

const client = new Client();

const res = await client.accounts.authorisations.list({
  accountId: "string",
  enrichData: true,
  skip: 123,
  status: "string",
  top: 123,
  contextTenantid: "string",
});
```

    
### Returns available credit limits (account and cash).


**API Endpoint**: `GET /accounts/{accountId}/available-limits`


#### Example Snippet

```typescript
import Client from "new-day-ts";

const client = new Client();

const res = await client.accounts.availableLimits.list({
  accountId: "string",
  contextTenantid: "string",
});
```

    
### Returns balance details including any pending debit or credit movements.


**API Endpoint**: `GET /accounts/{accountId}/balances`


#### Example Snippet

```typescript
import Client from "new-day-ts";

const client = new Client();

const res = await client.accounts.balances.list({
  accountId: "string",
  contextTenantid: "string",
});
```

    
### Returns list of available billing periods (statement dates) for the given account.
Lists the billing periods for the given account.

**API Endpoint**: `GET /accounts/{accountId}/billing-periods`


#### Example Snippet

```typescript
import Client from "new-day-ts";

const client = new Client();

const res = await client.accounts.billingPeriods.list({
  accountId: "string",
  hasStatement: true,
  linkedAccount: true,
  contextTenantid: "string",
});
```

    
### Returns un-statemented transactions for current billing period.
Lists the transactions for the current billing period.

**API Endpoint**: `GET /accounts/{accountId}/billing-periods/current/transactions`


#### Example Snippet

```typescript
import Client from "new-day-ts";
import * as types from "new-day-ts/types";

const client = new Client();

const res = await client.accounts.billingPeriods.current.transactions.list({
  accountId: "string",
  enrichData: true,
  entryType:
    types.GetAccountsAccountIdBillingPeriodsCurrentTransactionsEntryTypeEnum
      .Credit,
  filterType:
    types.GetAccountsAccountIdBillingPeriodsCurrentTransactionsFilterTypeEnum
      .All,
  skip: 123,
  top: 123,
  contextTenantid: "string",
});
```

    
### Get Billing Period details
Shows billing period details (balances and balance type breakdown).

**API Endpoint**: `GET /accounts/{accountId}/billing-periods/{billingPeriodId}`


#### Example Snippet

```typescript
import Client from "new-day-ts";

const client = new Client();

const res = await client.accounts.billingPeriods.get({
  accountId: "string",
  billingPeriodId: "string",
  contextTenantid: "string",
});
```

    
### Returns balance summary including totals, limits, interest charged etc. for given billing period.
Shows balances for the given billing period.

**API Endpoint**: `GET /accounts/{accountId}/billing-periods/{billingPeriodId}/balances`


#### Example Snippet

```typescript
import Client from "new-day-ts";

const client = new Client();

const res = await client.accounts.billingPeriods.balances.list({
  accountId: "string",
  billingPeriodId: "string",
  contextTenantid: "string",
});
```

    
### Retrieve breakdown of all spend types for the selected billing period.
Shows billing period breakdown per spend type.

**API Endpoint**: `GET /accounts/{accountId}/billing-periods/{billingPeriodId}/spend-types`


#### Example Snippet

```typescript
import Client from "new-day-ts";

const client = new Client();

const res = await client.accounts.billingPeriods.spendTypes.list({
  accountId: "string",
  billingPeriodId: "string",
  contextTenantid: "string",
});
```

    
### Returns statemented transactions for a given billing period.
Lists the transactions for the given billing period.

**API Endpoint**: `GET /accounts/{accountId}/billing-periods/{billingPeriodId}/transactions`


#### Example Snippet

```typescript
import Client from "new-day-ts";
import * as types from "new-day-ts/types";

const client = new Client();

const res = await client.accounts.billingPeriods.transactions.list({
  accountId: "string",
  billingPeriodId: "string",
  enrichData: true,
  entryType:
    types
      .GetAccountsAccountIdBillingPeriodsBillingPeriodIdTransactionsEntryTypeEnum
      .Credit,
  filterType:
    types
      .GetAccountsAccountIdBillingPeriodsBillingPeriodIdTransactionsFilterTypeEnum
      .All,
  skip: 123,
  top: 123,
  contextTenantid: "string",
});
```

    
### Returns any dues on the account including current due, requested payment, recommended extra payment, total arrears etc.


**API Endpoint**: `GET /accounts/{accountId}/dues`


#### Example Snippet

```typescript
import Client from "new-day-ts";

const client = new Client();

const res = await client.accounts.dues.list({
  accountId: "string",
  contextTenantid: "string",
});
```

    
### Retrieve detailed breakdown of arrears information on the account.


**API Endpoint**: `GET /accounts/{accountId}/dues/arrears`


#### Example Snippet

```typescript
import Client from "new-day-ts";

const client = new Client();

const res = await client.accounts.dues.arrears.list({
  accountId: "string",
  contextTenantid: "string",
});
```

    
### Returns account level interest rates.


**API Endpoint**: `GET /accounts/{accountId}/interest-rates`


#### Example Snippet

```typescript
import Client from "new-day-ts";

const client = new Client();

const res = await client.accounts.interestRates.list({
  accountId: "string",
  contextTenantid: "string",
});
```

    
### Composite resource to return standard account details along with available limits, balances and dues.
Composite resource to return standard account details along with available limits, balances and dues.

**API Endpoint**: `GET /accounts/{accountId}/positions`


#### Example Snippet

```typescript
import Client from "new-day-ts";

const client = new Client();

const res = await client.accounts.positions.list({
  accountId: "string",
  contextTenantid: "string",
});
```

    
### Retrieve detailed breakdown of all spend types including instalment plans and their balances and rates for the account at subledger level.


**API Endpoint**: `GET /accounts/{accountId}/spend-types`


#### Example Snippet

```typescript
import Client from "new-day-ts";

const client = new Client();

const res = await client.accounts.spendTypes.list({
  accountId: "string",
  contextTenantid: "string",
});
```

    
### Returns all posted transactions with search features by date, amount, description, etc.
Searches transactions for the given account.

**API Endpoint**: `GET /accounts/{accountId}/transactions`


#### Example Snippet

```typescript
import Client from "new-day-ts";
import * as types from "new-day-ts/types";

const client = new Client();

const res = await client.accounts.transactions.list({
  accountId: "string",
  amountFrom: 123.45,
  amountTo: 123.45,
  dateFrom: "string",
  dateTo: "string",
  enrichData: true,
  entryType: types.GetAccountsAccountIdTransactionsEntryTypeEnum.Credit,
  filterType: types.GetAccountsAccountIdTransactionsFilterTypeEnum.All,
  linkedAccount: true,
  searchText: "string",
  skip: 123,
  top: 123,
  contextTenantid: "string",
});
```

    
### Returns transactions associated to a transactionId.
Searches specific transactions for the given account and transaction identifier.

**API Endpoint**: `GET /accounts/{accountId}/transactions/{transactionId}`


#### Example Snippet

```typescript
import Client from "new-day-ts";

const client = new Client();

const res = await client.accounts.transactions.get({
  accountId: "string",
  transactionId: "string",
  contextTenantid: "string",
});
```

    