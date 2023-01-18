import useRequest from './useRequest';

export default function useData(id: string) {
  return useRequest<any>({
    url: '/api/data',
    params: { id },
  });
}
