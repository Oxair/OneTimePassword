# ONE TIME PASSWORD | NODE && FIREBASE && TWILIO

### npm install


## Enter the database URL
<details>
on Line 10 :
functions/index.js
</details>

## Enter the service details
<details>
functions/service_account.json
</details>

## Enter twilio phone number
<details>
on Line 19 :
functions/request_otp.js
</details>

## Add your twilio sid and token
<details>
on Line 3 :
functions/twilio.js
</details>

## Testing

https://LINK/createUser
```
{
	"phone" : "+------------" // Your number
}
```
![Screenshot](https://i.imgur.com/XU0pNcF.png)


https://LINK/requestOneTimePassword
```
{
	"phone" : "+------------" // Your number
}
```
![Screenshot](https://i.imgur.com/WqzEd1A.png)


https://LINK/verifyOneTimePassword
```
{
	"phone" : "+------------", // Your number
  "code" : ----  // Code you received
}
```
![Screenshot](https://i.imgur.com/NBwEH1R.png)

