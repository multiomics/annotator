let $store, $http

export default {
	install : (Vue, options) => {
		Vue.prototype.$initApi = (store, http)=>{
			$store = store
			$http = http
		}
		Vue.prototype.$Api = {
			getSampleAttributes : async ()=>{
				try{
					let resutls
					let tempResutls = await	$http.get($store.state.baseApiURL+'/annotator/sampleAttributes')  
					//TO DO: logic
					resutls = tempResutls
					return resutls;
				}
				catch(e){
					throw new Error(e.body.error);
					//throw e.body.error
					//throw {err:e.body.error}
				}
			},
			getValuesByAttributes : async (query)=>{
				try{
					let resutls
					let tempResutls = await	$http.get($store.state.baseApiURL+'/properties/findValuesByProperty',{params: query})
					//TO DO: logic
					//console.log('tempResutls',tempResutls)
					resutls = tempResutls
					return resutls;
				}
				catch(e){
					throw new Error(e.body.error);
				}
			},
			getPTMsAttributes : async (query)=>{
				try{
					let resutls
					let tempResutls = await	$http.get($store.state.baseApiURL+'/complexproperties/findPostTranslationalModifications',{params: query})
					//TO DO: logic
					let ntOptionsArray = []
					//console.log('tempResutls',tempResutls)
					if(tempResutls.body.length > 0){
						for(let i in tempResutls.body){
							let item = {
								key:tempResutls.body[i].ontologyTerm.id,
								label:tempResutls.body[i].ontologyTerm.name,
								taOptionsArray:tempResutls.body[i].sites
							}
							ntOptionsArray.push(item)
						}
						resutls = ntOptionsArray
					}
					else
						resutls = null
					return resutls;
				}
				catch(e){
					throw new Error(e.body.error);
				}
			},
			getLabel : async (query)=>{
				try{
					let resutls
					let tempResutls = await	$http.get($store.state.baseApiURL+'/annotator/labelingValues',{params: query})
					//TO DO: logic
					resutls = tempResutls
					return resutls
				}
				catch(e){
					throw new Error(e.body.error);
				}
			},
			getLabelReagent : async (query)=>{
				try{
					let resutls
					let tempResutls = await	$http.get($store.state.baseApiURL+ '/annotator/reagentValues',{params: query})
					//console.log('tempResutls',tempResutls);
					//TO DO: logic
					resutls = tempResutls
					return resutls
				}
				catch(e){
					throw new Error(e.body.error);
				}
			},
			getMSRunTableData: async (query)=>{
				try{
					let resutls
					let tempResutls = await	$http.get($store.state.baseApiURL + '/msruns/byProject',{params: query})
					//console.log('tempResutls',tempResutls);
					//TO DO: logic
					resutls = tempResutls
					return resutls
				}
				catch(e){
					throw new Error(e.body.error);
				}
			}
		}
	}
}

