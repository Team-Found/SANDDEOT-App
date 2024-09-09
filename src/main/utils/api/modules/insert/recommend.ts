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
        rssName: "9TO5Mac",
        rssUrl: "https://feeds.feedburner.com/ndtvnews-world-news",
        favicon: "알아서 잘",
        articleID: 577,
        title: "What to expect with Apple’s new iPad models coming this month",
        descript:
          "Apple is expected to unveil two new iPad models this fall, likely at its September 9th keynote. This will include a new entry-level 11th generation model, as well as the 7th generation of iPad mini. Both of these models have gone 2 years without an update, so we’re overdue for a refresh.",
        date: 1724900370,
        thumbnail: "",
        imgList: [],
        content:
          '<p><img src="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/08/iPad-Air-5-M1-deals.webp?w=1500&quality=82&strip=all&ssl=1" /></p>',
        articleUrl:
          "https://www.ndtv.com/world-news/hong-kong-outlet-stand-news-and-editors-convicted-of-sedition-judge-rules-6445341",
      },
      {
        rssID: 33,
        rssName: "9TO5Mac",
        rssUrl: "https://feeds.feedburner.com/ndtvnews-world-news",
        favicon: "알아서 잘",
        articleID: 577,
        title: "This iOS 18 feature needs to be copied by YouTube and Netflix",
        descript:
          "When you’re going to watch a video on your iPhone, what’s the app you turn to? My guess is, in most cases, it’s YouTube. How about on your Apple TV? Probably Netflix. But in iOS 18 and tvOS 18, Apple has added a key subtitles feature to its own TV app that I hope inspires YouTube and Netflix to copy it ASAP.",
        date: 1725199200,
        thumbnail: "",
        imgList: [],
        content:
          '<p><img src="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/06/Screenshot-2024-06-10-at-2.06.55%E2%80%AFPM.jpg?w=1500&quality=82&strip=all&ssl=1" /></p>',
        articleUrl:
          "https://www.ndtv.com/world-news/hong-kong-outlet-stand-news-and-editors-convicted-of-sedition-judge-rules-6445341",
      },
      {
        rssID: 33,
        rssName: "9TO5Mac",
        rssUrl: "https://feeds.feedburner.com/ndtvnews-world-news",
        favicon: "알아서 잘",
        articleID: 577,
        title: "These 10 Apple products will likely be discontinued next week",
        descript:
          "Apple’s annual iPhone event is being held next week on September 9th, where we’ll see iPhone 16, new AirPods, some new Apple Watch models, and potentially more. However, the introduction of new products also means saying goodbye to older ones. These are some Apple products you probably won’t be able to buy from the Apple Store after that keynote.",
        date: 1724943049,
        thumbnail: "",
        imgList: [],
        content:
          '<p><img src="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/07/apple-device-lineup.jpg?w=1500&quality=82&strip=all&ssl=1" /></p>',
        articleUrl:
          "https://www.ndtv.com/world-news/hong-kong-outlet-stand-news-and-editors-convicted-of-sedition-judge-rules-6445341",
      },
      {
        rssID: 33,
        rssName: "9TO5Mac",
        rssUrl: "https://feeds.feedburner.com/ndtvnews-world-news",
        favicon: "알아서 잘",
        articleID: 577,
        title:
          "iPhone 17 Air: How ultra-thin will it be? These hints are telling",
        descript:
          "Apple has a lot in store for September’s iPhone 16 Pro and iPhone 16. Next fall, however, will bring bigger changes thanks to a new iPhone 17 Air joining the lineup. The 17 Air’s main draw will be a radical, ultra-thin new design. But how thin can it really be? Here’s what to expect based on hints from current products.",
        date: 1724900370,
        thumbnail: "",
        imgList: [],
        content:
          '<p><img src="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/08/iphone-17-air.jpg?w=1500&quality=82&strip=all&ssl=1" /></p>',
        articleUrl:
          "https://www.ndtv.com/world-news/hong-kong-outlet-stand-news-and-editors-convicted-of-sedition-judge-rules-6445341",
      },
      {
        rssID: 33,
        rssName: "The Github Blog",
        rssUrl: "https://feeds.feedburner.com/ndtvnews-world-news",
        favicon: "알아서 잘",
        articleID: 577,
        title:
          "2024 is the biggest global election year in history. What’s at stake for developers?",
        descript:
          "GitHub is considering what is at stake for our users and platform, how we can take responsible action to support free and fair elections, and how developers contribute to resilient democratic processes.",
        date: 1725231049,
        thumbnail: "",
        imgList: [],
        content:
          '<p><img src="https://github.blog/wp-content/uploads/2023/10/Collaboration-DarkMode-2.png?w=1200" /></p>',
        articleUrl:
          "https://www.ndtv.com/world-news/hong-kong-outlet-stand-news-and-editors-convicted-of-sedition-judge-rules-6445341",
      },
      {
        rssID: 33,
        rssName: "The Github Blog",
        rssUrl: "https://feeds.feedburner.com/ndtvnews-world-news",
        favicon: "알아서 잘",
        articleID: 577,
        title:
          "Research: quantifying GitHub Copilot’s impact on developer productivity and happiness",
        descript:
          "When the GitHub Copilot Technical Preview launched just over one year ago, we wanted to know one thing: Is this tool helping developers? The GitHub Next team conducted research using a combination of surveys and experiments, which led us to expected and unexpected answers.",
        date: 1724900370,
        thumbnail: "",
        imgList: [],
        content:
          '<p><img src="https://github.blog/wp-content/uploads/2022/06/Copilot.jpeg?w=1200" /></p>',
        articleUrl:
          "https://www.ndtv.com/world-news/hong-kong-outlet-stand-news-and-editors-convicted-of-sedition-judge-rules-6445341",
      },
      {
        rssID: 33,
        rssName: "The Github Blog",
        rssUrl: "https://feeds.feedburner.com/ndtvnews-world-news",
        favicon: "알아서 잘",
        articleID: 577,
        title:
          "Automating open source: How Ersilia distributes AI models to advance global health equity",
        descript:
          "Discover how the Ersilia Open Source Initiative accelerates drug discovery by using GitHub Actions to disseminate AI/ML models.",
        date: 1725029449,
        thumbnail: "",
        imgList: [],
        content:
          '<p><img src="https://github.blog/wp-content/uploads/2024/05/Collaboration-LightMode-2-1.png?w=1200" /></p>',
        articleUrl:
          "https://www.ndtv.com/world-news/hong-kong-outlet-stand-news-and-editors-convicted-of-sedition-judge-rules-6445341",
      },
      {
        rssID: 33,
        rssName: "The Github Blog",
        rssUrl: "https://feeds.feedburner.com/ndtvnews-world-news",
        favicon: "알아서 잘",
        articleID: 577,
        title: "How to level up your Git game with GitHub CLI",
        descript:
          "Using Git in the CLI can improve your development speed and power. Here are our top eight commands for using GitHub via your command line.",
        date: 1725288649,
        thumbnail: "",
        imgList: [],
        content:
          '<p><img src="https://github.blog/wp-content/uploads/2024/08/github-cli-header.png?w=1200" /></p>',
        articleUrl:
          "https://www.ndtv.com/world-news/hong-kong-outlet-stand-news-and-editors-convicted-of-sedition-judge-rules-6445341",
      },
      {
        rssID: 33,
        rssName: "The Github Blog",
        rssUrl: "https://feeds.feedburner.com/ndtvnews-world-news",
        favicon: "알아서 잘",
        articleID: 577,
        title: "How we improved availability through iterative simplification",
        descript:
          "Solving and staying ahead of problems when scaling up a system of GitHub’s size is a delicate process. Here’s a look at some of the tools in GitHub’s toolbox, and how we’ve used them to solve problems.",
        date: 1724900370,
        thumbnail: "",
        imgList: [],
        content:
          '<p><img src="https://github.blog/wp-content/uploads/2023/12/Productivity-DarkMode-2-1.png?w=1200" /></p>',
        articleUrl:
          "https://www.ndtv.com/world-news/hong-kong-outlet-stand-news-and-editors-convicted-of-sedition-judge-rules-6445341",
      },
    ];
  }
}
