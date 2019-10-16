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

{
	"phone" : "+------------" // Your number
}

<details>
![Screenshot](https://i.imgur.com/XU0pNcF.png)
</details>


https://LINK/requestOneTimePassword

{
	"phone" : "+------------" // Your number
}


https://LINK/verifyOneTimePassword

{
	"phone" : "+------------", // Your number
  "code" : ----  // Code you received
}

