import { atom, useSetRecoilState } from 'recoil';
import { IForm, SupportedNetworks } from 'utils/types';
import { CreationJob } from 'utils/types/form';

export const initialNetworksState: SupportedNetworks[] = [...Object.values(SupportedNetworks)];

export const initialFormState: CreationJob = {
  accounts: [],
  networks: initialNetworksState,
  groupAssetsUnder: 1,
  // isGroupAssetsUnder: true,
  includeNFTs: true,
  // isSnapshot: true,
  // CEXs: [],
};

export const formState = atom<IForm>({
  key: 'formState',
  default: initialFormState,
});

export function useFormActions() {
  const setForm = useSetRecoilState(formState);
  const resetForm = () => setForm(initialFormState);

  const setAccounts = (accounts: IForm['accounts']) =>
    setForm((prevState: CreationJob) => ({ ...prevState, accounts }));
  // const setName = (name: IForm['name']) => setForm(prevState => ({ ...prevState, name }));
  // const setDuration = (duration: IForm['duration']) =>
  //   setForm(prevState => ({ ...prevState, duration }));
  const setNetworks = (networks: IForm['networks']) =>
    setForm((prevState: CreationJob) => ({ ...prevState, networks }));
  const setGroupAssetsUnder = (groupAssetsUnder: IForm['groupAssetsUnder']) =>
    setForm((prevState: CreationJob) => ({ ...prevState, groupAssetsUnder }));
  // const setIsGroupAssetsUnder = (isGroupAssetsUnder: IForm['isGroupAssetsUnder']) =>
  //   setForm(prevState => ({ ...prevState, isGroupAssetsUnder }));
  const setIncludeNFTs = (includeNFTs: IForm['includeNFTs']) =>
    setForm((prevState: CreationJob) => ({ ...prevState, includeNFTs }));
  // const setIsSnapshot = (isSnapshot: IForm['isSnapshot']) =>
  //   setForm(prevState => ({ ...prevState, isSnapshot }));

  return {
    resetForm,
    setAccounts,
    // setName,
    // setDuration,
    setIncludeNFTs,
    setNetworks,
    setGroupAssetsUnder,
    // setIsGroupAssetsUnder,
    // setIncludeNFTs,
    // setIsSnapshot,
  };
}
