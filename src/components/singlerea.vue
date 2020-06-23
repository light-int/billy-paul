<template>
    <div class="addo-projects">
        <div class="container-fluid" v-for="(rea,i) in airtableResponse" :key="i">
            <div class="row">
                <div class="col-md-12"> <span class="heading-meta">{{rea.fields.date}}</span>
                    <h2 class="addo-heading animate-box" data-animate-effect="fadeInLeft">{{rea.fields.nom}}</h2> 
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 image-content animate-box fadeInLeft animated" data-animate-effect="fadeInLeft"> 
                    <img class="img-fluid mb-30" :src="rea.fields.image[1].url" alt=""> 
                    <img class="img-fluid" src="#" alt=""> 
                </div>
                <div class="col-md-4 sticky-parent animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                    <div id="sticky_item">
                        <div class="project-desc">
                            <h2></h2>
                            <p>{{rea.fields.description}}</p>
                            <p>
                                <b>Client: </b>{{rea.fields.client}}<br>
                                <b>Categorie: </b>{{rea.fields.categorie}}
                            </p> 
                        </div>
                        <ul class="toolbar sticky-parent">
                            <li><a target="_blank" :href="rea.fields.lien" class="btn">Voir le projet</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


import ProjectsService from '@/services/ProjectsService'
	export default {
		name: "AppSingleRea",
		data() {
			return{
				airtableResponse: []
			}
		},
		mounted: function () {
            let self = this
            this.loading = true
			async function getProject() {
				try{
					const response = await ProjectsService.getProject(self.$route.params.slug)
					self.airtableResponse = response.data.records

				}catch(err){
					console.log(err)
				}
			}
			getProject()		  	
		}
	};
</script>

<style>
   .btn:hover{
       color: #fff;
   } 
</style>