import ArticleDetailView from "./ArticleDetailView";

export default function ArticleDetail1(): JSX.Element {
  return <ArticleDetailView detailApiFn={window.dbApi.article.detail} />;
}
