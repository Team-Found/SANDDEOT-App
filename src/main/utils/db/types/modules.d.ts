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
article: {
    add(title: string, date: Date, body: string, translated: string, origin: number, categoryID: number, author: string, image?: Blob | null,): Promise<number>;

    detail(bodyID: number): Promise<ArticleDetail>;

    list(startLevel: number = 1, endLevel: number = 6, categoryID?: number,): Promise<Article[]>;

    remove(bodyID: number): Promise<number>;

    update(bodyID: number, option: { title?: string; body?: string; image?: Blob; translated?: string; feedback?: string; score?: number; editDate?: Date; IMPP?: string; level?: number; },): Promise<number>;

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
word: {
    add(word: string, mean: string, bodyID: number): Promise<number>;

    list(star?: boolean): Promise<WordDetail[]>;

    remove(wordID: number): Promise<number>;

};
}
