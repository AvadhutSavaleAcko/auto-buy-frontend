import type { ProposalData, VehicleData } from "../types/proposal";

type RawRecord = Record<string, unknown>;

function asString(val: unknown): string | null {
  return typeof val === "string" && val.length > 0 ? val : null;
}

function asNumber(val: unknown): number | null {
  return typeof val === "number" ? val : null;
}

function asRecord(val: unknown): RawRecord | null {
  return val !== null && typeof val === "object" && !Array.isArray(val)
    ? (val as RawRecord)
    : null;
}

function parseVehicleData(rawVehicle: RawRecord): VehicleData {
  const previousPolicy = asRecord(rawVehicle.previous_policy) ?? {};

  const makeName = asString(rawVehicle.make_name) ?? "";
  const modelName = asString(rawVehicle.model_name) ?? "";
  const variantName = asString(rawVehicle.variant_name) ?? "";
  const carName =
    asString(rawVehicle.car_name) ??
    [makeName, modelName, variantName].filter(Boolean).join(" ");

  return {
    makeName,
    modelName,
    variantName,
    carName,
    registrationNumber: asString(rawVehicle.registration_number),
    fuelType: asString(rawVehicle.fuel_type),
    fuelTypeDisplay: asString(rawVehicle.fuel_type_display),
    registrationYear: asNumber(rawVehicle.registration_year),
    registrationMonth: asNumber(rawVehicle.registration_month),
    logoUrl: asString(rawVehicle.logo_url),
    rtoCode: asString(rawVehicle.rto_code),
    cc: asNumber(rawVehicle.cc),
    seatingCapacity: asNumber(rawVehicle.seating_capacity),
    previousInsurer: asString(previousPolicy.insurer_name),
    previousNcb: asNumber(previousPolicy.previous_ncb),
    engineNumber: asString(rawVehicle.engine_number),
    chassisNumber: asString(rawVehicle.chassis_number),
    ownerName: asString(rawVehicle.owner_name),
  };
}

/**
 * Parses the raw next-node API response into a typed ProposalData object.
 * Uses the `proposal` key from the response (the hydrated proposal).
 */
export function parseNextNodeResponse(
  apiResponse: Record<string, unknown>
): ProposalData | null {
  const raw = asRecord(apiResponse.proposal);
  if (!raw) return null;

  const ekey = asString(raw.ekey);
  if (!ekey) return null;

  const rawVehicle = asRecord(raw.vehicle);
  if (!rawVehicle) return null;

  return {
    ekey,
    vehicle: parseVehicleData(rawVehicle),
    proposalStatus: asString(raw.proposal_status),
  };
}
