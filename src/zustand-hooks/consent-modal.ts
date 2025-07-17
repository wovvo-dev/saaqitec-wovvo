import { create } from "zustand";

interface ModalStore {
  openTermAndCondition: boolean;
  iAgree: boolean;
  title: string;
  isOpen: boolean;
  paymentLink: string;
  setIAgree: (checked: boolean) => void;
  setTermsAndConditions: (show: boolean) => void;
  setPaymentLink: (link: string) => void;
  openModal: (title: string) => void;
  closeModal: () => void;
}

const useModalStore = create<ModalStore>((set) => ({
  openTermAndCondition: false,
  iAgree: false,
  title: "",
  isOpen: false,
  paymentLink: "",
  setIAgree: (checked: boolean) => set({ iAgree: checked }),
  setTermsAndConditions: (show) => set({ openTermAndCondition: show }),
  setPaymentLink: (link) => set({ paymentLink: link }),
  openModal: (title) => set({ isOpen: true, title: title }),
  closeModal: () =>
    set({
      isOpen: false,
      openTermAndCondition: false,
      iAgree: false,
      title: "",
      paymentLink: "",
    }),
}));

export default useModalStore;
