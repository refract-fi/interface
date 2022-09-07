import { atom, useSetRecoilState } from 'recoil';
import { FormPhases, IFormPhase } from 'utils/types/formPhase';

export const initialFormPhaseState: IFormPhase = {
  phase: FormPhases.CREATE,
  showParams: false,
  // formId: 'NONE'
};

export const formPhaseState = atom({
  key: 'formPhaseState',
  default: initialFormPhaseState,
});

export function useFormPhaseActions() {
  const setFormPhase = useSetRecoilState(formPhaseState);
  const resetFormPhase = () => setFormPhase(initialFormPhaseState);

  const setPhase = (phase: IFormPhase['phase']) =>
    setFormPhase(prevState => ({ ...prevState, phase }));
  const setShowParams = (showParams: IFormPhase['showParams']) =>
    setFormPhase(prevState => ({ ...prevState, showParams }));
  return { setPhase, setShowParams, resetFormPhase };
}
