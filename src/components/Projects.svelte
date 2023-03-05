<script lang="ts">
 export let name:string
 export let url:string
 export let language:string
 export let date:Date
 export let description:string
</script>

<div  class="card-project up" style=";border-radius:3px;padding:10px;display:inline-block;width:350px;margin-top:20px;margin-right:20px">
    <p style="font-size:20px;font-weight:bold" class="name"> {name}  <a href="{url}" style=";float:right"><i class="fas fa-external-link-alt"></i></a><br> <span style="font-size:14px;color:white;"><i class="fas fa-calendar-alt"></i> {new Date(date).getDate()}/{new Date(date).getUTCMonth() + 1}/{new Date(date).getFullYear()}</span></p>
    <p style="max-height:50px;word-break:break-all;font-weight:500;font-size:15px">{description?description:'No Description created!'}</p>
    <span>{language?language:'Svelte'}</span>
</div>

<style>
    .card-project {
        background-color: #0f1421;
        cursor:pointer;
        -webkit-box-shadow: 7px 7px 15px -3px rgba(0,0,0,0.44);
        -moz-box-shadow: 7px 7px 15px -3px rgba(0,0,0,0.44);
        box-shadow: 7px 7px 15px -3px rgba(0,0,0,0.44);
    }

    .name {
        color:white;
    }
    .card-project:hover .name{
        color:#79e862;
    }
</style>
