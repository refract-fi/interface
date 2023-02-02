import { atom, useSetRecoilState } from 'recoil';
import { SupportedNetworks } from 'utils/types';
import { CreationJob } from 'utils/types/form';

export const initialNetworksState: SupportedNetworks[] = [...Object.values(SupportedNetworks)];

export const initialFormState: CreationJob = {
  accounts: [],
  networks: initialNetworksState,
  groupAssetsUnder: 1,
  // isGroupAssetsUnder: true,
  // includeNFTs: true,
  // isSnapshot: true,
  // CEXs: [],
};

export const formState = atom<CreationJob>({
  key: 'formState',
  default: initialFormState,
});

export function useFormActions() {
  const setForm = useSetRecoilState(formState);
  const resetForm = () => setForm(initialFormState);

  const setAccounts = (accounts: CreationJob['accounts']) =>
    setForm((prevState: CreationJob) => ({ ...prevState, accounts }));
  // const setName = (name: CreationJob['name']) => setForm(prevState => ({ ...prevState, name }));
  // const setDuration = (duration: CreationJob['duration']) =>
  //   setForm(prevState => ({ ...prevState, duration }));
  const setNetworks = (networks: CreationJob['networks']) =>
    setForm((prevState: CreationJob) => ({ ...prevState, networks }));
  const setGroupAssetsUnder = (groupAssetsUnder: CreationJob['groupAssetsUnder']) =>
    setForm((prevState: CreationJob) => ({ ...prevState, groupAssetsUnder }));
  // const setIsGroupAssetsUnder = (isGroupAssetsUnder: CreationJob['isGroupAssetsUnder']) =>
  //   setForm(prevState => ({ ...prevState, isGroupAssetsUnder }));
  const setIncludeNFTs = (includeNFTs: CreationJob['includeNFTs']) =>
    setForm((prevState: CreationJob) => ({ ...prevState, includeNFTs }));
  // const setIsSnapshot = (isSnapshot: CreationJob['isSnapshot']) =>
  //   setForm(prevState => ({ ...prevState, isSnapshot }));

  return {
    resetForm,
    setAccounts,
    // setName,
    // setDuration,
    setNetworks,
    setGroupAssetsUnder,
    // setIsGroupAssetsUnder,
    setIncludeNFTs,
    // setIsSnapshot,
  };
}
