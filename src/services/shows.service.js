import axios from "axios";

export const showsService = {
  getShows,
  getShowById
};

async function getShows(query) {
  try {if(query != ""){
      const response = await axios.get("https://api.tvmaze.com/search/shows?q="+query);
      return response.data;
  }
    } catch (error) {
      console.error(error);
    }
}
async function getShowById(id) { 
      const response = await axios.get("https://api.tvmaze.com/shows/"+id);
      return response.data; 
}
