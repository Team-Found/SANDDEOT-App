import db from "../../db";
import ArticleDetail from "../../types/ArticleDetail";
import Article from "../../types/Article";
import { RSS } from "../../types/Rss";
import Category from "../../types/Category";
import { LearnAddEdit } from "../../types/Learn";
import { Learn, LearnAnalytics } from "../../types/Learn";
import LearnEdit from "./learnEdit";
import { LeanEdit } from "../../types/Learn";
import db from "../../../db";
import WordDetail from "../../types/WordDetail";
interface Modules {
article: {
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

    RSSArticleDel(RSSID: number): Promise<void>;

    addUserArticle(title: string, date: Date, body: string,): Promise<void>;

    detail2(articleID: number): Promise<ArticleDetail>;

    userArticleList(): Promise<Article[]>;

};
category: {
    add(categoryName: string): Promise<number>;

    remove(categoryID: number): Promise<number>;

    list(): Promise<Category[]>;

};
learn: {
    add(startDate: Date, endDate: Date, bodyID: number, editList: LearnAddEdit[],): Promise<number>;

    analytics(anStartDate: Date = new Date(0), anEndDate: Date = new Date(),): Promise<LearnAnalytics[]>;

    edit(learnID?: number): Promise<LeanEdit[]>;

};
rss: {
  article: {
      add(articleID: number, RSSID: number, title: string, date: Date, body?: string, chat?: object = {}, description: string,): Promise<void>;

  };
    lastUpdate(): Promise<Date>;

    add(rss: RSS): Promise<void>;

    detail(RSSID: number,): { RSSID: number; RSSURL: string; RSSName: string; RSSImage: string };

    edit(RSSID: number, RSSURL?: string, RSSName?: string, RSSImageUrl?: string,): Promise<void>;

    list(): Promise<RSS[]>;

    remove(RSSID: number): Promise<void>;

    urlToId(url: string): Promise<number>;

};
word: {
    add(word: string, mean: string, bodyID: number): Promise<number>;

    list(star?: boolean): Promise<WordDetail[]>;

    remove(wordID: number): Promise<number>;

};
}
