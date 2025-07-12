export const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE";

// action creator function

// export const fetchNewsRequest = () => {
//   return { type: FETCH_NEWS_REQUEST };
// };

// export const fetchNewsSuccess = (news) => {
//   return { type: FETCH_NEWS_SUCCESS, payload: news };
// };

// export const fetchNewsFailure = (error) => {
//   return { type: FETCH_NEWS_REQUEST, payload: error };
// };

// // thunk action creatore

// export const fetchNews = () => {
//   return function (dispatch) {
//     dispatch(fetchNewsRequest());
//     fetch(
//       "https://newsapi.org/v2/top-headlines?country=us&apiKey=e58115446a8f44e782bae4eb44f448f6"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         const news = data.articles.map((article) => {
//           return {
//             title: article.title,
//             url: article.url,
//             description: article.description,
//           };
//         });
//         dispatch(fetchNewsSuccess(news));
//       })
//       .catch((error) => {
//         dispatch(fetchNewsFailure(error.message));
//       });
//   };
// };

// Revision
// action creators

const fetchNewsRequest = () => {
  return {
    type: FETCH_NEWS_REQUEST,
  };
};

const fetchNewsRequestSuccess = (data) => {
  return {
    type: FETCH_NEWS_SUCCESS,
    payload: data,
  };
};

const fetchNewsFailure = (data) => {
  return {
    type: FETCH_NEWS_FAILURE,
    payload: data,
  };
};

// action cretor using thunk

// const fetchNewsData = () => {
//   return (dispatch) => {
//     dispatch(fetchNewsRequest());
//     fetch(
//       "https://newsapi.org/v2/top-headlines?country=us&apiKey=e58115446a8f44e782bae4eb44f448f6"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         const filteredData = data.articles.map((article) => {
//           return {
//             title: article.title,
//             description: article.description,
//             author: article.author,
//           };
//         });
//         dispatch(fetchNewsRequestSuccess(filteredData));
//       })
//       .catch((error) => dispatch(fetchNewsFailure(error.message)));
//   };
// };

// In Redux:
// A thunk is a function returned by an action creator, which executes async logic.

const fetchNewsData = () => {
  return async (dispatch) => {
    dispatch(fetchNewsRequest());
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=e58115446a8f44e782bae4eb44f448f6"
      );
      const data = await response.json();
      const filteredData = data.articles.map((article) => {
        return {
          title: article.title,
          description: article.description,
          author: article.author,
        };
      });
      dispatch(fetchNewsRequestSuccess(filteredData));
    } catch (error) {
      dispatch(fetchNewsFailure(error));
    }
  };
};

export default fetchNewsData;
