<template>
	<b-table striped hover :items="data" :fields="columns">
		<template slot="image" scope="item">
				<img :src="item.value.small" width="32" height="32"/>
		</template>
	</b-table>	
</template>
<script>
	export default {
		name: 'appup-listView',		
		props: {
			data: { 
        required: false
      },
      columns: {
        type: Array,
        required: true,
        default: []
      }
		},
		data: function() {
			return {
      }
		}
	}
</script>