import useSWR from 'swr';
import { useMemo } from 'react';
import { get } from 'utils/axios';
import { UserProfile } from 'types/auth';

export const endpoints = {
  key: 'api/users/detail'
};

export function useGetProfile() {
  const { data, isLoading, error, isValidating } = useSWR(endpoints.key, get, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  const memoizedValue = useMemo(
    () => ({
      profile: data as UserProfile,
      profileLoading: isLoading,
      profileError: error,
      profileValidating: isValidating,
      profileEmpty: !isLoading && !data?.data?.length
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}
