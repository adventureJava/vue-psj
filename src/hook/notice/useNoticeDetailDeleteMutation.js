import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { noticeDetailDeleteApi } from "../../api/notice/noticeDetailDeleteApi";
import { useRouter } from "vue-router";

export const useNoticeDetailDeleteMutation = (idx) => {
    const queryClient = useQueryClient();
    const router = useRouter();
    return useMutation({
        mutationFn: () => noticeDetailDeleteApi(idx),
        mutationKey: () =>  ['noticeDelete'],         
        onSuccess: () => {
            alert('post 성공'); 
            router.go(-1);
            queryClient.invalidateQueries({
            queryKey: ['noticeList'],
            });
        },
    });
};