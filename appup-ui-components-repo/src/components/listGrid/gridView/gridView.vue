<template>
	<div class="row">
		<b-card class="mb-2 gridView-item" align="center" v-for="(item, index) in data" :key="index" :img-src="item.image.small">		
      <p class="card-text width-content-small">{{item.title}}</p>
		</b-card>
	</div>
</template>
<script>
	export default 
	{
		name: 'appup-gridView',
		props: {
			data: { 
        default: () => { } 
      }
		},
		data: function() {
			return { }
		},		
	}
</script>
<style>
  .width-content-small {
    width: 260px;
  }
  .width-content-large {
    width: 920px;
  }
	.gridView-item.card {	
		margin: 4px;
    border: 2px solid lightblue;
	}
	.listGrid-gridView .row {
		margin: 0px;
	}
</style>