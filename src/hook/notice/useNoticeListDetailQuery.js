import { noticeListDetailApi } from "../../api/notice/noticeListDetailApi";
import { useQuery } from '@tanstack/vue-query';

export const useNoticeListDetailQuery = (idx) => {
    return useQuery({
        queryKey: ['noticeDetail'],
        queryFn: () => noticeListDetailApi(idx),
        enabled: !!idx,
    });
}