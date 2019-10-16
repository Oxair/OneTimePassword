# locationBased : React Native, Firebase, Twilio


## Enter the database URL
on Line 10 :
functions/index.js


## Enter the service details
functions/service_account.json


## Enter twilio phone number
on Line 19 :
functions/request_otp.js


## Add your twilio sid and token
on Line 3 :
functions/twilio.js


## Testing

https://LINK/createUser
{
	"phone" : "+------------" // Your number
}

https://LINK/requestOneTimePassword
{
	"phone" : "+------------" // Your number
}

https://LINK/verifyOneTimePassword
{
	"phone" : "+------------", // Your number
  "code" : ----  // Code you received
}

