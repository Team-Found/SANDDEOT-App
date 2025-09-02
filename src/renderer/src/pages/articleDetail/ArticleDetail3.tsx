import ArticleDetailView from "./ArticleDetailView";

export default function ArticleDetail3(): JSX.Element {
  return <ArticleDetailView detailApiFn={window.dbApi.article.detail3} />;
}
