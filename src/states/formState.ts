import { atom, useSetRecoilState } from 'recoil';
import { IForm, SupportedNetworks } from 'utils/types';

export const initialNetworksState: SupportedNetworks[] = [...Object.values(SupportedNetworks)];

export const initialFormState: IForm = {
  accounts: [],
  networks: initialNetworksState,
  groupAssetsUnder: 0.1,
  isGroupAssetsUnder: true,
  includeNFTs: true,
  isSnapshot: true,
  CEXs: [],
};

export const formState = atom<IForm>({
  key: 'formState',
  default: initialFormState,
});

export function useFormActions() {
  const setForm = useSetRecoilState(formState);
  const resetForm = () => setForm(initialFormState);

  const setAccounts = (accounts: IForm['accounts']) =>
    setForm(prevState => ({ ...prevState, accounts }));
  const setName = (name: IForm['name']) => setForm(prevState => ({ ...prevState, name }));
  const setDuration = (duration: IForm['duration']) =>
    setForm(prevState => ({ ...prevState, duration }));
  const setNetworks = (networks: IForm['networks']) =>
    setForm(prevState => ({ ...prevState, networks }));
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
    setAccounts,
    setName,
    setDuration,
    setNetworks,
    setGroupAssetsUnder,
    setIsGroupAssetsUnder,
    setIncludeNFTs,
    setIsSnapshot,
  };
}
