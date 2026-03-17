import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProposalData, ProposalState } from "../../lib/types/proposal";

const initialState: ProposalState = {
  data: null,
  loading: false,
  error: null,
};

const proposalSlice = createSlice({
  name: "proposal",
  initialState,
  reducers: {
    setProposalLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setProposalData(state, action: PayloadAction<ProposalData>) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    setProposalError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    clearProposal(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  setProposalLoading,
  setProposalData,
  setProposalError,
  clearProposal,
} = proposalSlice.actions;

export default proposalSlice.reducer;
