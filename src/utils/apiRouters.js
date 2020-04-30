const baseRouter = "/api/v1/";

export const ApiRouters = {
    COMMON: baseRouter + "GoldenFEHome",
    GETKEY: baseRouter + "config/getValue",
    FEEDBACK: baseRouter + "feedBack",
    BLOG: baseRouter + "GoldenFEArticle/blogList",
    BLOGDETAIL: baseRouter + "GoldenFEArticle/detail",
    LISTSERVICE: baseRouter + "GoldenFEArticle/serviceList",
    RELATEDPOST: baseRouter + "GoldenFEArticle/related",
    RECRUITMENT: baseRouter + "goldenFEJob",
    FECOMMON: baseRouter + "feCommon",
    APPLYCV: baseRouter,
}