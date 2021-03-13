# Node_Amazon_Polly_Demo in NODEJS

To run this sample : 


Prerequisites : 
1. Setup AWSCLI using - https://docs.aws.amazon.com/polly/latest/dg/setup-aws-cli.html 
2. To check your CLI is configured succefully try following command on CLI -  aws configure list this should show your keys
3. make sure you have an IAM user created on AWS console with PollyFullAccess policy or FullAdmin policy 
4. at last make sure to remove all IAM policy from the user after this demo so no one can missuse your keys. 
 
Steps to run demo : 

1. Clone this repo
2. >NPM install  - this will create npm_module in your project 
3. > Node aws_polly.js - this will create your mp3 file 
4. >afplay speech.mp3 on your mac terminal <for windows it may be different>
5. to run 2nd program : just > Node aws_polly_speaker.js to relayt the speech direftly into speaker.
   
