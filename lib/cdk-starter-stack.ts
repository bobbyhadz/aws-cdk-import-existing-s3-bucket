import * as iam from '@aws-cdk/aws-iam';
import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const importedBucketFromName = s3.Bucket.fromBucketName(
      this,
      'imported-bucket-from-name',
      'YOUR_EXTERNAL_BUCKET_NAME',
    );

    console.log('bucket name 👉', importedBucketFromName.bucketName);
    console.log('bucket arn 👉', importedBucketFromName.bucketArn);

    // 👇 using methods on the imported bucket
    importedBucketFromName.grantRead(new iam.AccountRootPrincipal());

    const importedBucketFromArn = s3.Bucket.fromBucketArn(
      this,
      'imported-bucket-from-arn',
      'arn:aws:s3:::YOUR_EXTERNAL_BUCKET_NAME',
    );

    const importedBucketFromAttributes = s3.Bucket.fromBucketAttributes(
      this,
      'imported-bucket-from-attributes',
      {
        bucketArn: 'arn:aws:s3:::YOUR_EXTERNAL_BUCKET_NAME',
        region: 'SOME_OTHER_REGION',
      },
    );
  }
}
