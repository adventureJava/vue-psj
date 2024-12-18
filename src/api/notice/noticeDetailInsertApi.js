import axios from "axios";
import { Notice } from "../api";

export const noticeDetailInsertApi = async (detailValue,idx,userInfo) => {
    const textData = {
        ...detailValue,
        noticeSeq: idx,
        context: detailValue.content,
        loginId: userInfo.user.loginId,
    };
    await axios.post(Notice.InsertNotice,textData);
};