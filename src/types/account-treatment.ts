/**
 * File Generated by Sideko (sideko.dev)
 */

import * as types from "new-day-ts/types";

export type AccountTreatment = {
  /**
   * Expected End date of the treatment
   */
  expiresAt?: string | null;
  /**
   * Unique Identifier for account treatment or workitem
   */
  id?: string | null;
  /**
   * Indicates if a treatment is planned for a future date
   */
  isPlanned?: boolean;
  /**
   * Treatment or workitem Name
   */
  name?: string | null;
  /**
   * Owner Domain entity for the treatment
   */
  owner?: string | null;
  /**
   * Expected Start date of the treatment
   */
  startsAt?: string | null;
  /**
   * Sub-treatments
   */
  subTreatments?: types.SubTreatment[] | null;
  /**
   * Last change date to the status of treatment
   */
  updatedAt?: string | null;

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
    | boolean
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
    | null
    | types.SubTreatment[]
    | undefined
    | null
    | string
    | any;
};
