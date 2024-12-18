import axios from "axios";
import { Notice } from "../api";

export const noticeListDetailApi = async (idx) => {    
    const result = await axios.post(Notice.DetailNoticeList,{noticeSeq: idx });

    return result.data;
}