<template>
	<div class="listGrid">
		<div class="listGrid-toolbar">
			<span class="listGrid-caption">{{caption}}</span>
			<span class="listGrid-switch-iconGroup">
				<span v-on:click="currentView = 'appup-listView'" class="mr-2" v-bind:class="{ active: currentView=='appup-listView'}">
					<icon class="listGrid-switch-icon" name="list"
					aria-hidden="true"
					:title="currentView=='grid' ? 'switch to List View': 'List View'"
					 ></icon>
				</span>
				<span v-on:click="currentView = 'appup-gridView'" class="mr-2" v-bind:class="{ active: currentView=='appup-gridView'}" >
					<icon class="listGrid-switch-icon" name="th"
					:title="currentView=='list' ? 'switch to Grid View': 'Grid View'"
					aria-hidden="true" ></icon>	
				</span>
			</span>
		</div>
		<div class="listGrid-body">
			<div v-bind:class="{ 'listGrid-listview': currentView=='appup-listView', 'listGrid-gridView': currentView=='appup-gridView'}" >
				<component :is="currentView" :data="data" :columns=columns></component>
			</div>
		</div>		
	</div>
</template>
<script>
	export default {
		name: 'appup-listGrid',
		props: {
			caption: { 
        type:String, 
        default: '' 
      },
			view: { 
        type: String, 
        default: 'appup-listView' 
      },
			data: { 
        default: () => {}	
			},
      columns: {
        type: Array,
        required: true,
        default: []
      }
		},
		data: function() {
			return {	
				currentView: this.view	//initially set to same value as prop			
			}
		},
		methods: {
		}
	}
</script>
<style>
	.listGrid
	{
		margin: 4px;
	}	
	.listGrid-caption
	{
		font-weight: bold;
	}
	.listGrid-toolbar
	{
		width: 100%;
		height: 32px;
		line-height: 32px;
		background-color: lightgray;
		padding-left: 8px;
	}
	.listGrid-switch-iconGroup
	{
		float: right;
		padding-right: 8px;
		padding-left: 8px;
	}
	.listGrid-switch-icon
	{
		padding: 0px;		
		border-radius: 0px;
		background-color: transparent;
		cursor: pointer;
	}
	.listGrid-switch-iconGroup .active
	{
		background-color: lavender;
		cursor: default;
	}
</style>