### Differnt types of Links

```jsx
    <div>
        <p>Provided date time is in One year</p>
        <div class="row">          
            <div class="col-md-4 pb-2">
                <appup-timeago
                    datetime="04/05/2018 16:41:00"
                    format="DD/MM/YYYY HH:mm:ss"
                />
                <p>(DD/MM/YYYY HH:mm:ss)</p>
            </div>
            <div class="col-md-4 pb-2">
                <appup-timeago
                    datetime="04/05/2018 16:41:00"
                    format="MM/DD/YYYY HH:mm:ss"
                />
                <p>(MM/DD/YYYY HH:mm:ss)</p>
            </div>
             <div class="col-md-4 pb-2">
                <appup-timeago
                    datetime="2018/05/2 16:41:00"
                    format="YYYY/DD/MM HH:mm:ss"
                />
                <p>(YYYY/DD/MM HH:mm:ss)</p>
            </div>
        </div>
         <p>If Provided date time is greater than One year or Future date then it shows only datetime</p>
        <div class="row">
            <div class="col-md-4 pb-2">
                <appup-timeago
                    datetime="01/24/2016 16:41:00"
                    format="MM/DD/YYYY HH:mm:ss"
                />
                <p>(One year before)</p>                
            </div>
            <div class="col-md-4 pb-2">
                <appup-timeago
                    datetime="30/04/2019 16:41:00"
                    format="DD/MM/YYYY HH:mm:ss"
                />  
                <p>(Future Date)</p>             
            </div>           
        </div>
    </div>
```