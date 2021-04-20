export interface Question {
  id?: string;
  name: string;
  address?: string;
  latlng?: {
    latitude: number;
    longitude: number;
  };
  question: string;
  expiredAt: number;
  createdAt: number;
}

export interface ListProps {
  list: Question[];
}

export interface PropsModal {
  isVisible: boolean;
  onPressed: (param: boolean) => void;
}

export interface PlaceObj {
  latlng: {
    latitude: number;
    longitude: number;
  };
  address: string;
}
