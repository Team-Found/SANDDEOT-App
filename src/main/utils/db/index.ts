// article
import articleAdd from "./modules/article/articleAdd";
import articleDetail from "./modules/article/articleDetail";
import articleList from "./modules/article/articleList";
import articleRemove from "./modules/article/articleRemove";
import articleUpdate from "./modules/article/articleUpdate";
import count from "./modules/article/count";
import rssArticleList from "./modules/article/rssArticleList";
import rssDetail from "./modules/article/rssDetail";
import rssStateUp from "./modules/article/rssStateUp";
import save from "./modules/article/save";
import savedDetail from "./modules/article/savedDetail";
import savedList from "./modules/article/savedList";
import selectRSS from "./modules/article/selectRSS";
import threadSelect from "./modules/article/threadSelect";
import threadUpdate from "./modules/article/threadUpdate";
import unfollow from "./modules/article/unfollow";
import userAdd from "./modules/article/userAdd";
import userDetail from "./modules/article/userDetail";
import userList from "./modules/article/userList";
import allDelete from "./modules/article/allDelete";

// rss
import rssArticleAdd from "./modules/rss/article/rssArticleAdd";
import updateDuration from "./modules/rss/article/updateDuration";
import lastUpdate from "./modules/rss/lastUpdate";
import rssAdd from "./modules/rss/rssAdd";
import rssList from "./modules/rss/rssList";
import rssRemove from "./modules/rss/rssRemove";
import rssEdit from "./modules/rss/rssEdit";
import rssUrlToID from "./modules/rss/rssUrlToID";
// Note: rssDetail is imported from article modules, maybe a typo in original structure.
// Using the one from article for now. A separate rss.detail module exists but was not used in the original hardcoded object.

export default {
  article: {
    add: articleAdd,
    detail: articleDetail,
    list: articleList,
    remove: articleRemove,
    update: articleUpdate,
    count: count,
    rssArticleList: rssArticleList,
    RSSDetail: rssDetail,
    rssStateUp: rssStateUp,
    save: save,
    detail3: savedDetail, // Assuming detail3 was savedDetail
    savedArticleList: savedList,
    selectRSS: selectRSS,
    threadSelect: threadSelect,
    threadUpdate: threadUpdate,
    RSSArticleDel: unfollow, // Assuming RSSArticleDel was unfollow
    addUserArticle: userAdd,
    detail2: userDetail, // Assuming detail2 was userDetail
    userArticleList: userList,
    del: allDelete,
  },
  rss: {
    article: {
      add: rssArticleAdd,
      updateDuration: updateDuration,
    },
    lastUpdate: lastUpdate,
    add: rssAdd,
    detail: rssDetail, // Re-using rssDetail from article as per original object
    edit: rssEdit,
    list: rssList,
    remove: rssRemove,
    urlToId: rssUrlToID,
  },
};
