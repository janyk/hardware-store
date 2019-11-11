export interface UXState
{
  ftueComplete: boolean;
}

export const SET_FTUE_COMPLETE = "SET_FTUE_COMPLETE";

interface SetFTUEComplete {
  type: typeof SET_FTUE_COMPLETE;
}

export type UXActionTypes = SetFTUEComplete;
