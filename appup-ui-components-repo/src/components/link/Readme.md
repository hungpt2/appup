### Differnt types of Links

```jsx
 <div>
        <div class="row"> 
             <div class="col-md-4 pb-2">
                <appup-link 
                    label="This is link"/>
            </div>            
            <div class="col-md-4 pb-2">
                <appup-link 
                    label="This disabled link"
                    disabled=true />
            </div>
            <div class="col-md-4 pb-2">
                <appup-link  
                    label="Icon with Link"
                    icon="link" />
            </div>
            <div class="col-md-4 pb-2">
                <appup-link                     
                    icon="link" />
            </div>
            <div class="col-md-4 pb-2">
                <appup-link 
                    label="Link with tooltip"
                    title="Sample link title" />
            </div>
            <div class="col-md-4 pb-2">
                <appup-link 
                    label="Link with click event"
                    @click="onLinkClick" />
            </div>
        </div>
    </div>
```