<template>
    <div>       
        <div>
            <appup-header
                :title="title"
                :left-controls="leftControls"
                :right-controls="rightControls"/>
        </div>
        <br>
        <div>
            <appup-header
                navbgcolor="danger"
                textcolor="dark"
                :title="title"               
                :right-controls="links"/>
        </div>
        <br>
        <div>            
            <appup-header
                navbgcolor="warning"
                textcolor="light"
                :title="title"               
                :right-controls="dropdowns"/>
        </div>       
    </div>
</template>
<script>
import { Header } from 'appup';
export default {
    components: { Header },
    data () {
        return {
            title: {
                name: "Appup title",
            },          
            leftControls: [
                {
                    type: "link",
                    label: "Pages",
                    icon: "file",
                    link_to: "#"
                },
                {
                    type: "link",
                    label: "Blocks",
                    icon: "th-large"
                }
            ],
            rightControls: [
                {
                    type: "dropdown",
                    label: "Madan",
                    image: "http://agilecrm.dash.sweet-simple.com/assets/img/human01.jpg",
                    items: [
                        {
                            type: "link",
                            label: "Profile",
                            link_to: "#"
                        },
                        {
                            type: "link",
                            label: "Signout",
                            link_to: "#"
                        }
                    ]
                }
            ],
            dropdowns: [
                {
                    type: "dropdown",
                    label: "backend",                   
                    items: [
                        {
                            type: "link",
                            label: "Profile",
                            link_to: "#"
                        },
                        {
                            type: "link",
                            label: "Signout",
                            link_to: "#"
                        }
                    ]
                },{
                    type: "dropdown",
                    label: "frontend",                   
                    items: [
                        {
                            type: "link",
                            label: "Profile",
                            link_to: "#"
                        },
                        {
                            type: "link",
                            label: "Signout",
                            link_to: "#"
                        }
                    ]
                },{
                    type: "dropdown",
                    label: "Dropdown",
                    icon: "bell",              
                    items: [
                        {
                            type: "link",
                            label: "Profile",
                            link_to: "#"
                        },
                        {
                            type: "link",
                            label: "Signout",
                            link_to: "#"
                        }
                    ]
                }
            ],
            links: [
                { 
                    type: "link",
                    class: "text-decoration-underline",
                    label: "Profile",
                    link_to: "#"
                },{
                    icon: "bell",
                    type: "link",
                    label: "Apps",
                    link_to: "#"
                },{
                    type: "link",
                    label: "Themes",
                    link_to: "#"
                }
            ]         
        }
    },
    computed: {
        
    },
    methods: {
            
    }
};
</script>
