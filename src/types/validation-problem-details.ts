/**
 * File Generated by Sideko (sideko.dev)
 */

import * as types from "new-day-ts/types";

export type ValidationProblemDetails = {
  detail?: string | null;
  errors?: types.ValidationProblemDetailsErrors;
  instance?: string | null;
  status?: number | null;
  title?: string | null;
  type?: string | null;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | undefined
    | null
    | string
    | undefined
    | types.ValidationProblemDetailsErrors
    | undefined
    | null
    | string
    | undefined
    | null
    | number
    | undefined
    | null
    | string
    | undefined
    | null
    | string
    | any;
};
