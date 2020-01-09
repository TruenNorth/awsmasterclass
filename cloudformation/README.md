# CloudFormation template

## Overview

The repository consists of a set of nested templates that deploy the following:

- [S3-WebBucket](http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Introduction.html) with public and private subnets, spanning an AWS region.
- [VPC](http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Introduction.html) with public and private subnets, spanning an AWS region.

## Template details

The templates below are included in this repository and reference architecture:

| Template                                 | Description                                                                                                |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [s3_website.yaml](bucket/s3_website.yaml) | AWS CloudFormation Sample Template S3_Website_Bucket_With_Retain_On_Delete`. |
| [s3_cloudfront.yaml](bucket/s3_cloudfront.yaml) | AWS CloudFormation Sample Template S3_Website_With_CloudFront_Distribution. |
| [s3_cloudfront.yaml](ec2/s3_cloudfront.yaml) | This is the master template - deploy it to CloudFormation and it includes all of the others automatically. |


## Cloudfomation cli

###Create and deploy Stack

```
aws cloudformation create-stack --stack-name ec2-backend  --template-body file://ec2.yaml
```

###Update Stack

```
aws cloudformation upda-stack --stack-name ec2-backend  --template-body file://ec2.yaml
```