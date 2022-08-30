import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

export type ModalStateType = {
  visibleModal: 'NONE' | 'CHAIN_SELECT';
};

const initialState: ModalStateType = {
  visibleModal: 'NONE',
};

export const modalState = atom<ModalStateType>({
  key: 'modalState',
  default: initialState,
});

export function useModalActions() {
  const { visibleModal } = useRecoilValue(modalState);
  const setModalState = useSetRecoilState(modalState);

  const setVisibleModal = (value: ModalStateType['visibleModal']) =>
    setModalState(prevState => ({ ...prevState, visibleModal: value }));
  const resetModalStatus = () => setVisibleModal('NONE');
  const isModalVisible = (modalVariant: ModalStateType['visibleModal']) =>
    visibleModal === modalVariant;

  return { setVisibleModal, resetModalStatus, isModalVisible };
}
