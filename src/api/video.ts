import useSWR from 'swr';
import { useMemo } from 'react';
import { get } from 'utils/axios';
import { VideoPage } from 'types/video';

export const endpoints = {
  key: (page: number) => `api/videos?page=${page}&take=10`
};

export function useGetVideos(page: number) {
  const { data, isLoading, error, isValidating } = useSWR(endpoints.key(page), get, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  const memoizedValue = useMemo(
    () => ({
      videoPage: data as VideoPage,
      videoLoading: isLoading,
      videoError: error,
      videoValidating: isValidating,
      videoEmpty: !isLoading && !data?.data?.length
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}
