"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("my-bucket");
const bucket2 = new aws.s3.Bucket("my-bucket2");

// Export the name of the bucket
exports.bucketName = bucket.id;
