import { atom, useSetRecoilState } from 'recoil';
import { IForm } from 'utils/types';

const initialState: IForm = {
  address: [{ address: '', signature: '' }],
  chains: ['all'],
  groupAssetsUnder: 0.1,
  isGroupAssetsUnder: true,
  includeNFTs: true,
  isSnapshot: true,
};

export const formState = atom<IForm>({
  key: 'formState',
  default: initialState,
});

export function useFormActions() {
  const setForm = useSetRecoilState(formState);
  const resetForm = () => setForm(initialState);

  const setAddress = (address: IForm['address']) =>
    setForm(prevState => ({ ...prevState, address }));
  const setName = (name: IForm['name']) => setForm(prevState => ({ ...prevState, name }));
  const setDuration = (duration: IForm['duration']) =>
    setForm(prevState => ({ ...prevState, duration }));
  const setChains = (chains: IForm['chains']) => setForm(prevState => ({ ...prevState, chains }));
  const setGroupAssetsUnder = (groupAssetsUnder: IForm['groupAssetsUnder']) =>
    setForm(prevState => ({ ...prevState, groupAssetsUnder }));
  const setIsGroupAssetsUnder = (isGroupAssetsUnder: IForm['isGroupAssetsUnder']) =>
    setForm(prevState => ({ ...prevState, isGroupAssetsUnder }));
  const setIncludeNFTs = (includeNFTs: IForm['includeNFTs']) =>
    setForm(prevState => ({ ...prevState, includeNFTs }));
  const setIsSnapshot = (isSnapshot: IForm['isSnapshot']) =>
    setForm(prevState => ({ ...prevState, isSnapshot }));

  return {
    resetForm,
    setAddress,
    setName,
    setDuration,
    setChains,
    setGroupAssetsUnder,
    setIsGroupAssetsUnder,
    setIncludeNFTs,
    setIsSnapshot,
  };
}
