import { RefractPhases } from 'components/Refract/Refract';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

export type RefractStateType = {
  allocationFade: boolean;
  statsFade: boolean;
  refractFade: boolean;
  refractPhase: RefractPhases;
};

const initialState: RefractStateType = {
  allocationFade: false,
  statsFade: false,
  refractFade: false,
  refractPhase: RefractPhases.default,
};

export const refractState = atom<RefractStateType>({
  key: 'refractState',
  default: initialState,
});

export function useRefractActions() {
  const setRefractState = useSetRecoilState(refractState);

  const setAllocationFade = (value: RefractStateType['allocationFade']) =>
    setRefractState(prevState => ({ ...prevState, allocationFade: value }));
  const setStatsFade = (value: RefractStateType['statsFade']) =>
    setRefractState(prevState => ({ ...prevState, statsFade: value }));
  const setRefractFade = (value: RefractStateType['refractFade']) =>
    setRefractState(prevState => ({ ...prevState, refractFade: value }));
  const setRefractPhase = (value: RefractStateType['refractPhase']) =>
    setRefractState(prevState => ({ ...prevState, refractPhase: value }));
  const resetFades = () =>
    setRefractState(prevState => ({
      ...prevState,
      allocationFade: false,
      statsFade: false,
      refractFade: false,
    }));
  const resetRefractState = () => setRefractState(initialState);

  return {
    setRefractState,
    setAllocationFade,
    setRefractPhase,
    resetRefractState,
    setStatsFade,
    setRefractFade,
    resetFades,
  };
}
