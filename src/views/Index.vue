<template>
    <div class="index-container">
        <div class="title">Omics Sample to Data Annotation Tool</div>
        <div class="action">
            <Button class="button" type="primary" @click="gotoPublicDataset" v-bind:disabled="true">Public Dataset</Button>
            <Button class="button" type="primary" @click="gotoNewDataset" v-bind:disabled="true">New Dataset</Button>
            <Button class="button" type="primary" @click="gotosSRDF">Load SDRF</Button>
        </div>
        <div class="content">
            Read more about the SDRF file format <a href="https://github.com/bigbio/proteomics-metadata-standard/">here</a>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {

            }
        },
        components: {
        },
        methods:{
            gotoPublicDataset(){
                this.$router.push({ name: 'check'});
            },
            gotoNewDataset(){
                //this.$router.push({ name: 'annotation'});
            },
            gotosSRDF(){
                this.$router.push({ name: 'srdf'});
            }
        },
        mounted:function(){

        },
    }
</script>
<style scoped>
    .index-container{
      height: 100vh;
      display:flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 0 auto;
    }
    .title{
      margin-top: -100px;
      font-size: 40px;
      margin-bottom: 100px;
    }
    .action {
      margin-bottom: 80px;
      display: flex;
      margin: 0 auto;
      justify-content: space-between;
      margin-bottom: 100px;
    }
    .action .button{
      width: 180px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      font-size: 20px;
      margin: 0 20px;
    }
</style>
<style>

</style>
