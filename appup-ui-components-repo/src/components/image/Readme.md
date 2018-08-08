### Differnt images

```jsx
<div>
    <div class="row">
        <div class="col-md-6 pb-2">
            <p>Image height is 100</p>
            <appup-image 
                src="http://localhost:3000/profilepic.jpg"        
                alt="height of the image"
                :width=100
                :height=100
                /> 
        </div>
        <div class="col-md-6 pb-2">
            <p>Image width is 200</p>
            <appup-image 
                src="http://localhost:3000/profilepic.jpg"        
                alt="width of the image"
                :width=200
                :height=100
                /> 
        </div>
    </div>
    <div class="row">
        <div class="col-md-4 pb-2">
            <p>Image algnment is left</p>
            <appup-image 
                src="http://localhost:3000/profilepic.jpg"        
                alt="Left aligned image"
                :height=100
                :width=100
                align="left"
                /> 
        </div>
        <div class="col-md-4 pb-2">
            <p>Image algnment is center</p>
            <appup-image 
                src="http://localhost:3000/profilepic.jpg"        
                alt="center aligned image"
                :height=100
                :width=100
                align="center"
                /> 
        </div>
        <div class="col-md-4 pb-2">
            <p>Image algnment is right</p>
            <appup-image 
                src="http://localhost:3000/profilepic.jpg"        
                alt="Right aligned image"
                :height=100
                :width=100
                align="right"
                /> 
        </div>            
    </div>
    <div class="row">
        <div class="col-md-4 pb-2">
            <p>Image type is square</p>
            <appup-image 
                src="http://localhost:3000/profilepic.jpg"        
                alt="No rounded image"
                :height=100
                :width=100
                type='square'
                /> 
        </div>
        <div class="col-md-4 pb-2">
            <p>Image type is rounded</p>
            <appup-image 
                src="http://localhost:3000/profilepic.jpg"        
                alt="Rounded image"
                :height=100
                :width=100
                type="rounded"
                /> 
        </div>
        <div class="col-md-4 pb-2">
            <p>Image type is circle</p>
            <appup-image 
                src="http://localhost:3000/profilepic.jpg"        
                alt="Circle image"
                :height=100
                :width=100
                type='circle'
                /> 
        </div>  
        <div class="col-md-4 pb-2">
            <p>Square image thumbnail</p>
            <appup-image 
                src="http://localhost:3000/profilepic.jpg"        
                alt="Thumbnail image"
                :height=100
                :width=100
                :thumbnail=true
                /> 
        </div>  
            <div class="col-md-4 pb-2">
            <p>Circle image thumbnail</p>
            <appup-image 
                src="http://localhost:3000/profilepic.jpg"        
                alt="Circle image"
                :height=100
                :width=100
                type='circle'
                :thumbnail=true
                /> 
        </div>         
        <div class="col-md-4 pb-2">
            <p>onclick image</p>
            <appup-image 
                src="http://localhost:3000/profilepic.jpg"        
                alt="Onclickimage"
                :height=100
                :width=100
                @click="onImageClick"
                /> 
        </div>
        <div class="col-md-12 pb-2">
            <p>Auto Resize image based upon window</p>
            <appup-image 
                src="http://localhost:3000/profilepic.jpg"        
                alt="Full width Image"
                :autoresize=true
                :height=720
                :width=720
                /> 
        </div>
    </div>
</div>
```
      