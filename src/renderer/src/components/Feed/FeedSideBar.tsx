export default function FeedSideBar(): JSX.Element {
  return (
    <div className="w-72 py-11 flex-col justify-start items-start gap-8 inline-flex">
      <div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
        <div className="self-stretch text-white text-base font-bold font-['Pretendard Variable']">
          구독한 RSS
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-px flex">
          <div className="w-full py-1.5 border-t border-b border-neutral-900 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 justify-start items-center gap-2 flex">
              <img
                className="w-7 h-7 relative rounded-full"
                src="https://via.placeholder.com/30x30"
              />
              <div className="grow shrink basis-0 text-white text-xs font-medium font-['Pretendard Variable']">
                Obtuse의 테크 블로그
              </div>
            </div>
            <div className="justify-center items-center gap-2.5 flex">
              <div className="text-red60 text-xs font-medium font-['Pretendard Variable']">
                Unfollow
              </div>
            </div>
          </div>
          <div className="w-full py-1.5 border-t border-b border-neutral-900 justify-start items-center gap-2 inline-flex">
            <div className="w-5 relative" />
            <div className="text-blue60 text-xs font-medium font-['Pretendard Variable']">
              새로 추가하기
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
        <div className="self-stretch text-white text-base font-bold font-['Pretendard Variable']">
          이런 RSS는 어때요?
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-px flex">
          <div className="w-full py-1.5 border-t border-b border-neutral-900 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 justify-start items-center gap-2 flex">
              <img
                className="w-7 h-7 relative rounded-full"
                src="https://via.placeholder.com/30x30"
              />
              <div className="grow shrink basis-0 text-white text-xs font-medium font-['Pretendard Variable']">
                Apple
              </div>
            </div>
            <div className="justify-center items-center gap-2.5 flex">
              <div className="text-blue60 text-xs font-medium font-['Pretendard Variable']">
                Follow
              </div>
            </div>
          </div>
          <div className="w-full py-1.5 border-t border-b border-neutral-900 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 justify-start items-center gap-2 flex">
              <img
                className="w-7 h-7 relative rounded-full"
                src="https://via.placeholder.com/30x30"
              />
              <div className="grow shrink basis-0 text-white text-xs font-medium font-['Pretendard Variable']">
                Github Blog
              </div>
            </div>
            <div className="justify-center items-center gap-2.5 flex">
              <div className="text-blue60 text-xs font-medium font-['Pretendard Variable']">
                Follow
              </div>
            </div>
          </div>
          <div className="w-full py-1.5 border-t border-b border-neutral-900 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 justify-start items-center gap-2 flex">
              <img
                className="w-7 h-7 relative rounded-full"
                src="https://via.placeholder.com/30x30"
              />
              <div className="grow shrink basis-0 text-white text-xs font-medium font-['Pretendard Variable']">
                Billboard
              </div>
            </div>
            <div className="justify-center items-center gap-2.5 flex">
              <div className="text-blue60 text-xs font-medium font-['Pretendard Variable']">
                Follow
              </div>
            </div>
          </div>
          <div className="w-full py-1.5 border-t border-b border-neutral-900 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 justify-start items-center gap-2 flex">
              <img
                className="w-7 h-7 relative rounded-full"
                src="https://via.placeholder.com/30x30"
              />
              <div className="grow shrink basis-0 text-white text-xs font-medium font-['Pretendard Variable']">
                Fox News
              </div>
            </div>
            <div className="justify-center items-center gap-2.5 flex">
              <div className="text-blue60 text-xs font-medium font-['Pretendard Variable']">
                Follow
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
        <div className="self-stretch text-white text-base font-bold font-['Pretendard Variable']">
          오늘의 단어
        </div>
        <div className="self-stretch flex-col justify-center items-start gap-px flex">
          <div className="w-full py-3.5 border-t border-b border-neutral-900 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-1 inline-flex">
              <div className="self-stretch text-white text-xs font-medium font-['Pretendard Variable']">
                Sanddoet
              </div>
              <div className="self-stretch text-white text-xs font-medium font-['Pretendard Variable']">
                (명) 산뜻
              </div>
            </div>
            <div className="w-4 relative" />
          </div>
          <div className="w-full py-3.5 border-t border-b border-neutral-900 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-1 inline-flex">
              <div className="self-stretch text-white text-xs font-medium font-['Pretendard Variable']">
                Sanddoet
              </div>
              <div className="self-stretch text-white text-xs font-medium font-['Pretendard Variable']">
                (명) 산뜻
              </div>
            </div>
            <div className="w-4 relative" />
          </div>
          <div className="w-full py-3.5 border-t border-b border-neutral-900 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-1 inline-flex">
              <div className="self-stretch text-white text-xs font-medium font-['Pretendard Variable']">
                Sanddoet
              </div>
              <div className="self-stretch text-white text-xs font-medium font-['Pretendard Variable']">
                (명) 산뜻
              </div>
            </div>
            <div className="w-4 relative" />
          </div>
        </div>
      </div>
    </div>
  );
}
