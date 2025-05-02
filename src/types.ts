export interface ModalProps {
  isOpen: boolean;
  handleOpen: (isOpen: boolean) => void;
  element: React.ReactNode;
}


export interface CityDataProps {
  _id: number;
  cityName: string;
  desc: string;
  bg: string;
  heroTitle: string;
  heroDesc: string;
  popularDesc: string;
  popularArr: string[];
  videoUrl: string;
  tempDesc: string;
  giftDesc: string;
  kitchenDesc: string;
  historyDesc: string[];
  historyImages: string[];
  kitchenImages: string[];
  giftImages: string[];
  heroImg: string;
  images: string[];
  infoList: {
    name: string;
    img: string;
    _id: string;
  }[];
  coordinates: {
    latitude: number;
    longitude: number;
  }
}
export type BookingType = {
  _id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
};