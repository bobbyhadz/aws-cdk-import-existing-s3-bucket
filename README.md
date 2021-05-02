# Import an Existing S3 Bucket in AWS CDK

A repository for an article on
[bobbyhadz.com](https://bobbyhadz.com/blog/aws-cdk-import-existing-s3-bucket)

## How to Use

1. Clone the repository

2. Install the dependencies

```bash
npm install
```

3. Replace the placeholders:

- `YOUR_EXTERNAL_BUCKET_NAME` with the actual value for the bucket you want to
  import
- `SOME_OTHER_REGION` with the name of the region the existing bucket is in

4. Synth the stack and look at the console.log output

```bash
npx cdk synth
```
