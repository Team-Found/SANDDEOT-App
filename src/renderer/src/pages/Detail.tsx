import { useMemo, useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Chat } from "@renderer/components/Chat";
import winkNLP from "wink-nlp";
import model from "wink-eng-lite-web-model";
// import "./mark.css";

export default function Detail(): JSX.Element {
  let { id } = useParams();
  const [article, setArticle] =
    useState<Awaited<ReturnType<typeof window.dbApi.article.detail>>>();

  console.log("Detail");
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await window.dbApi.article.detail(Number(id));
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };
    fetchArticle();
  }, [id]);

  const quantile = useCallback((arr: number[], q: number) => {
    const sorted = arr.slice().sort((a, b) => a - b);
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;
    if (sorted[base + 1] !== undefined) {
      return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
    } else {
      return sorted[base];
    }
  }, []);

  let lastDate = new Date("1970-01-01");
  let lastData = <></>;

  let nlp = useMemo(() => winkNLP(model, ["sbd", "pos"]), []);
  let its = useMemo(() => nlp.its, []);
  let as = useMemo(() => nlp.as, []);
  let text = useMemo(
    () =>
      "Children living in Japan’s hottest city will be given specially designed umbrellas to protect them from the heat, after a summer that saw record-breaking temperatures in many parts of the country.Local authorities in Kumagaya in Saitama prefecture have devised an umbrella that keeps out the rain and doubles as a parasol, the Mainichi Shimbun reported. The umbrellas, which bear the city’s logo and weigh just 336 grams, will be distributed to 9,000 primary schoolchildren next week, the newspaper said. Kumagaya, a city of about 195,000 located 60km north of Tokyo, regularly records the highest temperatures in Japan partly as a result of warm downslope winds created by the Foehn Effect. The city’s government has for the past two years advised younger children to shield themselves from the sun with regular umbrellas on their way to and from school to prevent heatstroke, but some questioned their ability to block out sunlight. Alarmed by a rise in the number of days when the mercury rises to at least 35C, the city decided to hand out the yellow fibreglass umbrellas, including to children who live in Kumagaya but attend schools outside the city, the Mainichi said. The heat-busting brollies will also force children to maintain a reasonable distance from each other, eliminating the need for them to wear masks to prevent the spread of the coronavirus, it added. The measure has come a little late in the day, however. Japan battled its worst heatwave since records began in 1875 in late June, after a premature end to the rainy season. The city of Isesaki, north of Tokyo, registered the country’s highest-ever temperature for that month, at 40.2C, beating the previous June record of 39.8C set in 2011. Tokyo experienced several consecutive days of 35C-plus heat, prompting the government to warn people to save energy or face power cuts, while Kumagaya and five other locations marked highs above 40C on 1 July. Kumagaya’s reputation for furnace-like temperatures was sealed in July 2018, when it battled an all-time high temperature of 41.1C – an unenviable record it shares with the city of Hamamatsu in central Japan. On Friday, the maximum temperature for Kumagaya was a far more comfortable 26C, according to the meteorological agency, although it forecast a rerun to the low 30s next week. Officials had hoped to distribute the umbrellas before the school summer holidays began were delayed by the Covid-19 pandemic. Global heating has prompted Japan’s government to take extra measures and issue a slew of advice on how to prevent heatstroke. Almost all classrooms in public primary and middle schools now have air conditioners, according to the Asahi Shimbun, while the education ministry last year urged teachers to instruct children to wear cool clothing and hats, and to keep hydrated when they travel to and from school. The pandemic has frustrated attempts to keep children cool at school, however, with teachers reporting that many are reluctant to remove their masks, even with encouragement from staff.",
    [],
  );

  var doc = useMemo(() => nlp.readDoc(text), []);

  var sentences = useMemo(() => doc.sentences().out(its.value), []);
  var sentencesWeights = useMemo(
    () => doc.out(its.sentenceWiseImportance).map((e: any) => e.importance),
    [],
  );

  const [highlightPercentage, setHighlightPercentage] = useState<number>(20);
  const processText = useCallback((): JSX.Element => {
    if (new Date().getTime() - lastDate.getTime() < 1000) {
      return lastData;
    }

    try {
      console.log("processing");
      const cutoff = quantile(sentencesWeights, 1 - highlightPercentage / 100); // 하이라이팅 기준 설정

      lastDate = new Date();
      lastData = sentences.map((sentence, index) => {
        const importance = sentencesWeights[index];
        const shouldHighlight = importance >= cutoff && highlightPercentage > 0;
        const backgroundColor = shouldHighlight
          ? "rgba(151, 78, 175, " + (importance - 0.3) + ")"
          : "transparent";
        const style = {
          backgroundColor: backgroundColor,
          color: "white",
          fontWeight: "normal", // bold 제거
          trainsition: "background-color 0.5s",
        };

        return (
          <div key={index}>
            <span style={style}>{sentence}</span>
          </div>
        );
      });

      return lastData;
    } catch (e) {
      console.error(e);
      return lastData;
    }
  }, [highlightPercentage]);

  return (
    <div className="flex w-full max-h-[calc(100dvh-2.5rem)] overflow-hidden flex-1 flex-grow">
      {/* <iframe
        src="https://obtuse.kr"
        className="w-3/4 h-3/4 border-2 border-gray-300"
        title="Example Site"
        /> */}
      <div className="prose prose-basic dark:prose-invert overflow-y-scroll w-full !max-w-full flex-1 flex-grow">
        <div
          id="result"
          className="prose prose-basic !max-w-full dark:prose-invert w-full"
        >
          {processText()}
        </div>
        {/* {article?.body && (
          <div
            dangerouslySetInnerHTML={{ __html: article.body }}
            className="w-full"
          />
        )} */}
      </div>

      <Chat setCutOff={setHighlightPercentage} cutOff={highlightPercentage} />
    </div>
  );
}
