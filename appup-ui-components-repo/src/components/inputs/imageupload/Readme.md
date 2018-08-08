## Image uploader

```jsx
<div class="row">
    <div class="col-md-4">
        <appup-imageupload
            id="smallImageupload"
            label="Upload small Image"
            url="http://localhost:3000/uploadImage"
            size="small"
            initialImage="http://localhost:3000/profilepic.jpg"
        />
    </div>
    <div class="col-md-4">
        <appup-imageupload
            id="mediumImageupload"
            label="Upload Medium Image"
            url="http://localhost:3000/uploadImage"
            size="medium"
            initialImage="http://localhost:3000/profilepic.jpg"
        />
    </div>
    <div class="col-md-4">
        <appup-imageupload
            id="xlargeImageupload"
            label="Upload Large Image"
            url="http://localhost:3000/uploadImage"
            size="xlarge"
            initialImage="http://localhost:3000/profilepic.jpg"
        />
    </div>
</div>
```