import db from "../../db";
import ArticleDetail from "../../types/ArticleDetail";
import Article from "../../types/Article";
import Category from "../../types/Category";
import { LearnAddEdit } from "../../types/Learn";
import { Learn, LearnAnalytics } from "../../types/Learn";
import LearnEdit from "./learnEdit";
import { LeanEdit } from "../../types/Learn";
import WordDetail from "../../types/WordDetail";
interface Modules {
Article: {
    articleAdd(title: string, date: Date, body: string, translated: string, origin: number, categoryID: number, image?: Blob,): Promise<number>;

    articleDelete(bodyID: number): Promise<number>;

    articleDetail(bodyID: number): Promise<ArticleDetail>;

    articleList(startLevel: number = 1, endLevel: number = 6, categoryID?: number,): Promise<Article[]>;

    articleUpdate(bodyID: number, option: { title?: string; body?: string; image?: Blob; translated?: string; feedback?: string; score?: number; editDate?: Date; IMPP?: string; level?: number; },): Promise<number>;

};
Category: {
    categoryAdd(categoryName: string): Promise<number>;

    categoryDelete(categoryID: number): Promise<number>;

    categoryList(): Promise<Category[]>;

};
Learn: {
    learnAdd(startDate: Date, endDate: Date, bodyID: number, editList: LearnAddEdit[],): Promise<number>;

    learnAnalytics(anStartDate: Date = new Date(0), anEndDate: Date = new Date(),): Promise<LearnAnalytics[]>;

    learnEdit(learnID?: number): Promise<LeanEdit[]>;

};
Word: {
    wordAdd(word: string, mean: string, bodyID: number,): Promise<number>;

    wordDelete(wordID: number): Promise<number>;

    wordList(star?: boolean): Promise<WordDetail[]>;

};
}
