import useSWR from 'swr';
import { useMemo } from 'react';
import { get } from 'utils/axios';
import { Video } from 'types/video';

export const endpoints = {
  key: 'api/videos'
};

export function useGetVideos() {
  const { data, isLoading, error, isValidating } = useSWR(endpoints.key, get, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  const memoizedValue = useMemo(
    () => ({
      video: data as Video[],
      videoLoading: isLoading,
      videoError: error,
      videoValidating: isValidating,
      videoEmpty: !isLoading && !data?.length
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}
