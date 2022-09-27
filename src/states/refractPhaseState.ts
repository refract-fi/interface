import { atom, useSetRecoilState } from 'recoil';

interface IRefractPhase {
  isTopSkew: boolean;
}

export const initialRefractPhaseState: IRefractPhase = {
  isTopSkew: false,
};

export const refractPhaseState = atom({
  key: 'refractPhaseState',
  default: initialRefractPhaseState,
});

export function useRefractPhaseActions() {
  const setRefractPhase = useSetRecoilState(refractPhaseState);
  const resetRefractPhase = () => setRefractPhase(initialRefractPhaseState);

  const setIsTopSkew = (isTopSkew: IRefractPhase['isTopSkew']) =>
    setRefractPhase(prevState => ({ ...prevState, isTopSkew }));

  return { setIsTopSkew, resetRefractPhase };
}
