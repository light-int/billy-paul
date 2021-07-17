<template>
    <!-- Portfolio Section -->
    <div id="portfolio" class="section">
        <div class="addo-projects">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12"> <span class="heading-meta">Portfolio</span>
                        <h2 class="addo-heading animate-box" data-animate-effect="fadeInLeft">Réalisations</h2> </div>
                </div>
                <div class="row">
                    <div class="col-md-4 animate-box" data-animate-effect="fadeInLeft" v-for="(rea,i) in newsLimited" :key="i">
                        <router-link :to="'/projet/'+rea.id" class="desc">
                            <div class="project"> <img v-bind:src="rea.fields.image[0].url" class="img-fluid" alt="">
                                <div class="desc">
                                    <div class="con">
                                        <h3>{{rea.fields.nom}}</h3> <span>{{rea.fields.categorie}}</span> </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>


<script>
	import ProjectsService from '@/services/ProjectsService'
    

	export default {
		name: "AppPortfolio",
		data() {
			return{
				airtableResponse: []
			}
		},
        computed: {
        newsLimited() {
            return this.airtableResponse.slice(0, 6)
            }
        },
		mounted: function () {
			let self = this
			async function getProjects() {
				try{
					const response = await ProjectsService.getProjects()
					self.airtableResponse = response.data.records

				}catch(err){
					console.log(err)
				}
			}
			getProjects()		  	
		}
	};
</script>
<style scoped>
    
</style>