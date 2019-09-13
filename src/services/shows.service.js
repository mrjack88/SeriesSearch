import axios from "axios";

export const showsService = {
  getShows,
};

async function getShows(query) {
  try {if(query != ""){
      const response = await axios.get("http://api.tvmaze.com/search/shows?q="+query);
      return response.data;
  }
    } catch (error) {
      console.error(error);
    }
}
