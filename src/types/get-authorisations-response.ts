/**
 * File Generated by Sideko (sideko.dev)
 */

import * as types from "new-day-ts/types";

export type GetAuthorisationsResponse = {
  /**
   * Provides the link for the next result set or null if no more results available
   */
  "@nextLink"?: string | null;
  /**
   * Collection of authorisations
   */
  value?: types.Authorisation[];

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | undefined
    | null
    | string
    | undefined
    | types.Authorisation[]
    | any;
};
