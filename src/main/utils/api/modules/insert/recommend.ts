import axios from "axios"; // axios로 교체
import { apiServer } from "../../api";

interface RecommendList {
  rssID: number;
  rssName: string;
  rssUrl: string;
  favicon: string;
  articleID: number;
  title: string;
  descript: string;
  date: number;
  thumbnail: string;
  imgList: string[];
  content: string;
  articleUrl: string;
}

export default async function articleRecommend(
  data: number[],
  quantity: number,
): Promise<RecommendList[]> {
  const json = {
    data: data,
    quantity: quantity,
  };
  console.log(data);
  console.log(JSON.stringify(json));
  console.log(json);

  try {
    const response = await axios.post<RecommendList[]>(
      `${apiServer}/article/recommend/`,
      json, // axios에서는 자동으로 JSON으로 변환됨
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error("실패1:", error);
    return [
      {
        rssID: 33,
        rssName: "실패",
        rssUrl: "https://feeds.feedburner.com/ndtvnews-world-news",
        favicon:
          "https://www.ndtv.com/common/header/images/ndtv_logo_black.gif",
        articleID: 577,
        title:
          "Hong Kong Pro-Democracy News Outlet, Editors Found Guilty Of Sedition",
        descript:
          "Hong Kong pro-democracy news outlet Stand News and its two former chief editors were found guilty of sedition on Thursday, the first conviction of its kind since the city came under Chinese rule in 1997.",
        date: 1724900370,
        thumbnail:
          "https://c.ndtvimg.com/2024-08/565lduf_hong-kong_625x300_29_August_24.jpeg",
        imgList: [],
        content:
          '<p>Hong Kong pro-democracy news outlet Stand News and its two former chief editors were found guilty of sedition on Thursday, the first conviction of its kind since the city came under Chinese rule in 1997.</p>\n\n<p>The verdict is part of a crackdown on free speech in the former British colony that has seen critics of China jailed or forced into exile, following huge pro-democracy protests in 2019.</p>\n\n<p>Editors Chung Pui-kuen, 54, and Patrick Lam, 36, are the first journalists to be convicted of sedition since Britain handed Hong Kong over to China in 1997, and the ruling drew resounding international condemnation.</p>\n\n<p>Chung and Lam were in charge of Stand News, a Chinese-language website that gained a massive following during the protests in 2019, before it was raided and shut down in December 2021.</p>\n\n<p>On Thursday, district court judge Kwok Wai-kin said the pair were guilty of "conspiracy to publish and reproduce seditious publications". The parent company of Stand News, Best Pencil Limited, was also found guilty.</p>\n\n<p>"The line (Stand News) took was to support and promote Hong Kong local autonomy," according to a written judgement by Kwok.</p>\n\n<p>"It even became a tool to smear and vilify the Central Authorities (Beijing) and the (Hong Kong) SAR Government."</p>\n\n<p>Kwok also pointed to 11 articles published by Stand News that "caused potential detrimental consequences to national security" and had the intention of "seriously undermining" authorities in Beijing and Hong Kong.</p>\n\n<p>Lam was absent from court on Thursday due to illness.</p>\n\n<p>The judge granted the duo bail before their sentencing on September 26.</p>\n\n<h3><strong>Colonial-era law</strong></h3>\n\n<p>Chung and Lam were charged under a colonial-era law, which punishes sedition with a maximum jail term of two years.</p>\n\n<p>A recent security law enacted in March raised the jail term for sedition to seven years.</p>\n\n<p>In response to the verdict, the European Union called on Hong Kong to "stop prosecuting journalists".</p>\n\n<p>"The ruling risks inhibiting the pluralistic exchange of ideas and the free flow of information, both cornerstones of the economic success of Hong Kong," a EU spokesperson said.</p>\n\n<p>Speaking outside court, police chief superintendent Steve Li said the verdict "clearly illustrated the necessity and lawfulness" of the enforcement actions in 2021 against Stand News.</p>\n\n<p>Asked if the verdict would further affect press freedom, Li said it would "actually help".</p>\n\n<p>"It would let everyone know what kind of problems could risk breaching the law," he said.</p>\n\n<h3><strong>Not seditious</strong></h3>\n\n<p>But Beh Lih Yi from the Committee to Protect Journalists said the ruling showed that Hong Kong was "descending further into authoritarianism".</p>\n\n<p>"Journalism is not seditious," she said.</p>\n\n<p>Sarah Brooks, Amnesty International\'s China Director, called the verdict "one more nail in the coffin for press freedom in Hong Kong".</p>\n\n<p>Hong Kong has seen its standing in global press freedom rankings plummet in recent years.</p>\n\n<p>Chung had testified that the outlet was a platform for free speech and defended his decisions to publish articles critical of the government.</p>\n\n<p>But prosecutors accused them of bringing "hatred or contempt" to the Chinese and Hong Kong governments.</p>\n\n<p>More than 100 people, including supporters and media professionals, queued up for spots in the public gallery on Thursday morning.</p>\n\n<p>The verdict was also attended by representatives from various consulates -- including the United States, Britain, France, European Union, and Australia.</p><p><i>(Except for the headline, this story has not been edited by NDTV staff and is published from a syndicated feed.)</i></p>',
        articleUrl:
          "https://www.ndtv.com/world-news/hong-kong-outlet-stand-news-and-editors-convicted-of-sedition-judge-rules-6445341",
      },
    ];
  }
}
