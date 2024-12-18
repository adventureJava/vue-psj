import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { noticeDetailInsertApi } from "../../api/notice/noticeDetailInsertApi";
import { useRouter } from "vue-router";

export const useNoticeDetailInsertMutation = (detailValue,idx,userInfo) => {
    const queryClient = useQueryClient();
    const router = useRouter();
    return useMutation({
        mutationFn: () => noticeDetailInsertApi(detailValue.value,idx,userInfo),
        mutationKey: () =>  ['noticeInsert'],         
        onSuccess: () => {
            alert('post 성공'); 
            router.go(-1);
            queryClient.invalidateQueries({
            queryKey: ['noticeList'],
            });
        },
    });
};