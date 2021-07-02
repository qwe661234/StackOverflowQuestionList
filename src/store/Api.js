const baseURL = "https://api.stackexchange.com/2.2/";

export const fectchPopularTag = async (input) => {
  const url = new URL(baseURL + "tags");
  const tagParameters = new URLSearchParams({
    page: 1,
    pagesize: 10,
    order: "desc",
    sort: "popular",
    inname: input ? input : " ",
    site: "stackoverflow",
  });

  url.search = tagParameters;

  var data;
  await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      data = res.items;
    });
  return data;
};

export const fetchQuestionByTag = async (page, tag) => {
  const url = new URL(baseURL + "questions");
  const questionParameters = new URLSearchParams({
    page: page,
    pagesize: 20,
    order: "desc",
    sort: "activity",
    tagged: tag.replace("#", "%23"),
    site: "stackoverflow",
  });

  url.search = questionParameters;

  var data;
  await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      data = res.items;
    });
  return data;
};
