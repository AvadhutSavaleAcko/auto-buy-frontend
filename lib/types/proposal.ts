export interface VehicleData {
    makeName: string;
    modelName: string;
    variantName: string;
    carName: string;
    registrationNumber: string | null;
    fuelType: string | null;
    fuelTypeDisplay: string | null;
    registrationYear: number | null;
    registrationMonth: number | null;
    logoUrl: string | null;
    rtoCode: string | null;
    cc: number | null;
    seatingCapacity: number | null;
    previousInsurer: string | null;
    previousNcb: number | null;
    engineNumber: string | null;
    chassisNumber: string | null;
    ownerName: string | null;
  }
  
  export interface ProposalData {
    ekey: string;
    vehicle: VehicleData;
    proposalStatus: string | null;
  }
  
  export interface ProposalState {
    data: ProposalData | null;
    loading: boolean;
    error: string | null;
  }
  