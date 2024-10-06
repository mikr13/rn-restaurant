import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { client } from '../lib/axios';
import type { YelpBusiness } from '../types/yelp';

type UseGetBusinessByIdParams = {
  params: {
    id: string;
  };
  queryKey: string[];
  enabled: boolean;
}

const fetchBusinessById = async (params: UseGetBusinessByIdParams["params"]): Promise<AxiosResponse<YelpBusiness, any>> => {
  return await client.get<YelpBusiness>(`/${params.id}`);
};

export const useGetBusinessById = ({
  params,
  queryKey,
  enabled,
}: UseGetBusinessByIdParams) => {
  return useQuery<YelpBusiness, any>({
    queryFn: async () => {
      try {
        const { data } = await fetchBusinessById(params);
        return data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    queryKey,
    enabled,
  });
};
