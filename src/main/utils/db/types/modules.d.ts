import ArticleDetail from "../../types/ArticleDetail";
import Article from "../../types/Article";
import { RSS } from "../../types/Rss";
interface Modules {
article: {
    del(): Promise<void>;

    add(title: string, date: Date, body: string, translated: string, origin: number, author: string, RSSID?: number,): Promise<number>;

    detail(ArticleID: number): Promise<ArticleDetail>;

    list(startLevel: number = 1, endLevel: number = 6, categoryID?: number,): Promise<Article[]>;

    remove(bodyID: number): Promise<number>;

    update(bodyID: number, option: { title?: string; body?: string; image?: Blob; translated?: string; feedback?: string; score?: number; editDate?: Date; IMPP?: string; level?: number; },): Promise<number>;

    count(): Promise<count[]>;

    rssArticleList(): Promise<Article[]>;

    RSSDetail(RSSID: number): Promise<RSS>;

    rssStateUp(RSSURL: string): Promise<void>;

    save(articleID: number, saved: number): Promise<void>;

    detail3(articleID: number): Promise<ArticleDetail>;

    savedArticleList(): Promise<Article[]>;

    selectRSS(RSSURL: string): Promise<number>;

    threadSelect(articleID: number): Promise<string | null>;

    threadUpdate(threadID: string, articleID: number): Promise<void>;

    RSSArticleDel(RSSID: number): Promise<void>;

    addUserArticle(title: string, date: Date, body: string,): Promise<void>;

    detail2(articleID: number): Promise<ArticleDetail>;

    userArticleList(): Promise<Article[]>;

};
rss: {
  article: {
      add(articleID: number, RSSID: number, title: string, date: Date, description?: string, body?: string, threadID?: null | string,): Promise<void>;

      updateDuration(articleID: number, duration: number /* sec */): Promise<void>;

  };
    lastUpdate(): Promise<Date>;

    add(rss: RSS): Promise<void>;

    detail(RSSID: number,): { RSSID: number; RSSURL: string; RSSName: string; RSSImage: string };

    edit(RSSID: number, RSSURL?: string, RSSName?: string, RSSImageUrl?: string,): Promise<void>;

    list(): Promise<RSS[]>;

    remove(RSSID: number): Promise<void>;

    urlToId(url: string): Promise<number>;

};
}
