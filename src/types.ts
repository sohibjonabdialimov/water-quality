export interface ModalProps {
  isOpen: boolean;
  handleOpen: (isOpen: boolean) => void;
  element: React.ReactNode;
}

export interface InfoProps {
  _id: string;
  time: string;
  chuqurlik: number;
  tC: number;
  tds: number;
  eh: number;
}