import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { client } from '../lib/axios';
import type { YelpBusinesses } from '../types/yelp';

type UseGetBusinessesParams = {
  params: {
    term: string;
    location: string;
    limit: number;
  };
  queryKey: string[];
  enabled: boolean;
}

const fetchBusinesses = async (params: UseGetBusinessesParams["params"]): Promise<AxiosResponse<YelpBusinesses, any>> => {
  return await client.get<YelpBusinesses>('/search', { params });
};

export const useGetBusinesses = ({
  params,
  queryKey,
  enabled,
}: UseGetBusinessesParams) => {
  return useQuery<YelpBusinesses, any>({
    queryFn: async () => {
      try {
        const { data } = await fetchBusinesses(params);
        return data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    queryKey,
    enabled,
  });
};
