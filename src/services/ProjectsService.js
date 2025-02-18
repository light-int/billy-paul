import axios from 'axios'

const Axios = axios.create({
  baseURL: "https://api.airtable.com/v0/appnO0cmp8RM55Ai7/projets"
});

Axios.defaults.headers.common = {'Authorization': 'Bearer patM28TaEprIOQkya.63da68e6431f2f61621e4cff9048275821573fe434a98e4751268661ff8c69ef'}

export default{
    getProjects() {
        return Axios.get()
    },
    getProject(slug) {
        return Axios.get("?filterByFormula={slug}='" + slug + "'")
    }
}
