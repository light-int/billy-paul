import axios from 'axios'

const Axios = axios.create({
  baseURL: "https://api.airtable.com/v0/appnO0cmp8RM55Ai7/projets"
});

Axios.defaults.headers.common = {'Authorization': 'Bearer keyNTYiBHFVxakdjQ'}

export default{
    getProjects() {
        return Axios.get()
    },
    getProject(slug) {
        return Axios.get("?filterByFormula={slug}='" + slug + "'")
    }
}