export interface ModalProps {
  isOpen: boolean;
  handleOpen: (isOpen: boolean) => void;
  element: React.ReactNode;
}

export interface InfoProps {
  _id: string;
  temperature: string;
  tds: string;
  waterLevel: string;
  createdAt: string;
  updatedAt: string;
}