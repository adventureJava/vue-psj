import axios from "axios";
import { Notice } from "../api";

export const noticeDetailDeleteApi = async (idx) => {
    const textData = {
        noticeSeq: idx,
    };
    await axios.post(Notice.DeleteNotice,textData);
};