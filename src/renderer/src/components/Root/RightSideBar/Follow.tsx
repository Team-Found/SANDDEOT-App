import PropTypes from "prop-types";

interface Props {
  property1: "variant-2" | "default";
  className: any;
  RSSID: number;
  reRender: boolean;
  setReRender: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Follow = ({
  property1,
  className,
  RSSID,
  reRender,
  setReRender,
}: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex items-center gap-2.5 justify-center relative ${className}`}
    >
      <div
        className={`[font-family:'Pretendard_Variable-Medium',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-xs font-medium leading-[normal] whitespace-nowrap relative ${
          property1 === "variant-2"
            ? "text-variable-collection-red60"
            : "text-variable-collection-blue60"
        }`}
        onClick={() => {
          if (property1 == "variant-2") {
            window.dbApi.article.RSSArticleDel(RSSID).then(() => {
              setReRender(!reRender);
            });
          }
        }}
      >
        {property1 === "default" && <>Follow</>}

        {property1 === "variant-2" && <>Unfollow</>}
      </div>
    </div>
  );
};

Follow.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
