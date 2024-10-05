
export type YelpBusiness = {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  rating: number;
  review_count: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  price: string;
};

export type YelpBusinesses = {
  businesses: YelpBusiness[];
  total: number;
  region: {
    center: {
      latitude: number;
      longitude: number;
    };
  };
};
