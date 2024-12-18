import { noticeListSearchApi } from "../../api/notice/noticeListSearchApi";
import { useQuery } from '@tanstack/vue-query';

export const useNoticeListSearchQuery = (injectedValue, cPage) => {
    return useQuery({
        queryKey: ['noticeList',injectedValue, cPage],
        queryFn: () => noticeListSearchApi(injectedValue.value,cPage.value),
        staleTime: 1000 * 60,
    });
}