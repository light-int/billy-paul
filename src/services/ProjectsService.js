import axios from 'axios';

const Axios = axios.create({
  baseURL: "https://api.airtable.com/v0/appnO0cmp8RM55Ai7/projets",
  headers: {
    Authorization: "Bearer patM28TaEprIOQkya.63da68e6431f2f61621e4cff9048275821573fe434a98e4751268661ff8c69ef"
  }
});

const api = {
  async getProjects() {
    try {
      const response = await Axios.get("/");
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des projets :", error);
      throw error;
    }
  },

  async getProject(slug) {
    try {
      const filter = encodeURIComponent(`{slug} = '${slug}'`);
      const response = await Axios.get(`?filterByFormula=${filter}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération du projet avec slug "${slug}" :`, error);
      throw error;
    }
  }
};

export default api;
