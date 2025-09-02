import ArticleDetailView from "./ArticleDetailView";

export default function ArticleDetail2(): JSX.Element {
  return <ArticleDetailView detailApiFn={window.dbApi.article.detail2} />;
}
