/**
 * File Generated by Sideko (sideko.dev)
 */

export type ProblemDetails = {
  detail?: string | null;
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
