import axios from 'axios'

const Axios = axios.create({
  baseURL: "https://api.airtable.com/v0/appnO0cmp8RM55Ai7/projets"
});

Axios.defaults.headers.common = {'Authorization': 'Bearer patM28TaEprIOQkya.ea3fd79c07493ed69f90084adac1349beabf5dc414ada4b4653635b8fc30fd75'}

export default{
    getProjects() {
        return Axios.get()
    },
    getProject(slug) {
        return Axios.get("?filterByFormula={slug}='" + slug + "'")
    }
}
