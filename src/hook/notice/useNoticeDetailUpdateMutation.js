import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { noticeDetailUpdateApi } from "../../api/notice/noticeDetailUpdateApi";
import { useRouter } from "vue-router";

export const useNoticeDetailUpdateMutation = (detailValue,idx) => {
    const queryClient = useQueryClient();
    const router = useRouter();
    return useMutation({
        mutationFn: () => noticeDetailUpdateApi(detailValue.value,idx),
        mutationKey: () =>  ['noticeUpdate'],         
        onSuccess: () => {
            alert('post 성공'); 
            router.go(-1);
            queryClient.invalidateQueries({
            queryKey: ['noticeList'],
            });
        },
    });
};