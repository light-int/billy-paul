import axios from 'axios'

const Axios = axios.create({
  baseURL: "https://api.airtable.com/v0/appnO0cmp8RM55Ai7/projets"
});

Axios.defaults.headers.common = {'Authorization': 'Bearer patM28TaEprIOQkya.c52d977c237a1cffb30ad41003b5ee53ddcb01fc25ca3da643bcd5224306bf66'}

export default{
    getProjects() {
        return Axios.get()
    },
    getProject(slug) {
        return Axios.get("?filterByFormula={slug}='" + slug + "'")
    }
}
