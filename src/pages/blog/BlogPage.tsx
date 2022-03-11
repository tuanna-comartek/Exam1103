import { useEffect, useState } from "react";
import axios from "axios";

export interface Title {
  value: string;
  matchLevel: string;
  fullyHighlighted: boolean;
  matchedWords: string[];
}

export interface Url {
  value: string;
  matchLevel: string;
  matchedWords: string[];
  fullyHighlighted?: boolean;
}

export interface Author {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface StoryText {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface HighlightResult {
  title: Title;
  url: Url;
  author: Author;
  story_text: StoryText;
}

export interface Hit {
  created_at: Date;
  title: string;
  url: string;
  author: string;
  points: number;
  story_text: string;
  comment_text?: any;
  num_comments: number;
  story_id?: any;
  story_title?: any;
  story_url?: any;
  parent_id?: any;
  created_at_i: number;
  _tags: string[];
  objectID: string;
  _highlightResult: HighlightResult;
  relevancy_score?: number;
}

export interface RootObject {
  hits: Hit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  query: string;
  params: string;
  processingTimeMS: number;
}

const BlogPage = () => {
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://hn.algolia.com/api/v1/search?query=redux"
      );

      setData(result.data);
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <div className="container" style={{ paddingTop: "100px" }}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Link</th>
              <th scope="col">Author</th>
              <th scope="col">Points</th>
              <th scope="col">CreateAt</th>
            </tr>
          </thead>
          <tbody>
            {data.hits.map((item: Hit) => (
              <tr key={item.objectID}>
                <th>
                  <a href={item.url}>{item.title}</a>
                </th>
                <th>{item.author}</th>
                <th>{item.points}</th>
                <th>{item.created_at}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default BlogPage;
