import Photo from "./Photo";

export default function Post(props: {
  title: string;
  description: string;
  blogName: string;
  favicon: string;
  date: string;
}): JSX.Element {
  return (
    <div className="self-stretch p-3.5 bg-secondaryBG rounded-lg justify-start items-start gap-6 inline-flex">
      <div className="grow shrink basis-0 flex-col justify-center items-start gap-2 inline-flex">
        <div className="self-stretch flex-col justify-start items-start flex">
          <div className="w-96 justify-between items-center inline-flex">
            <div className="justify-center items-center gap-1 flex">
              <div className="w-3.5 h-3.5 rounded-full justify-center items-center flex overflow-clip">
                <img
                  className="w-10 h-10"
                  src="https://via.placeholder.com/40x40"
                />
              </div>
              <div className="text-gray-200 text-xs font-medium leading-3">
                {props.blogName}
              </div>
              <div className="text-stone-300 text-xs font-normal leading-3">
                {props.date}
              </div>
            </div>
            <div className="opacity-0 justify-start items-center gap-1 flex">
              <div className="w-4 h-4 py-0.5 justify-center items-center flex" />
            </div>
          </div>
          <div className="self-stretch justify-start items-center inline-flex">
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-2.5 inline-flex">
              <div className="self-stretch h-16 flex-col justify-start items-start gap-0.5 flex">
                <div className="self-stretch text-white text-base font-semibold leading-snug">
                  {props.title}
                </div>
                <div className="self-stretch text-neutral-400 text-xs font-normal leading-none">
                  {props.description}
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-1.5 inline-flex w-full h-60">
                <Photo
                  photos={[
                    "https://pbs.twimg.com/media/GTyLq4la0AAXpet?format=jpg&name=large",
                    "https://pbs.twimg.com/media/GTyLq4jbIAAJ_3G?format=jpg&name=large",
                    "https://pbs.twimg.com/media/GTyLq4hbwAUpyNW?format=jpg&name=large",
                    "https://pbs.twimg.com/media/GTyLq4jbwAAdZSZ?format=jpg&name=large",
                    "https://pbs.twimg.com/media/GTyLq4la0AAXpet?format=jpg&name=large",
                    "https://pbs.twimg.com/media/GTyLq4jbIAAJ_3G?format=jpg&name=large",
                    "https://pbs.twimg.com/media/GTyLq4hbwAUpyNW?format=jpg&name=large",
                    "https://pbs.twimg.com/media/GTyLq4jbwAAdZSZ?format=jpg&name=large",
                    "https://pbs.twimg.com/media/GTyLq4la0AAXpet?format=jpg&name=large",
                    "https://pbs.twimg.com/media/GTyLq4jbIAAJ_3G?format=jpg&name=large",
                    "https://pbs.twimg.com/media/GTyLq4hbwAUpyNW?format=jpg&name=large",
                    "https://pbs.twimg.com/media/GTyLq4jbwAAdZSZ?format=jpg&name=large",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
