# Output value definitions

output "lambda_bucket_name" {
  description = "Name of the S3 bucket used to store function code."
  value = aws_s3_bucket.lambda_bucket.id
}

output "function_name_origin" {
  description = "Name of function"
  value = module.lambda_origin.lambda[0].function_name
}

output "function_alias_name_origin" {
  description = "Name of the function alias"
  value = module.lambda_origin.alias[0].name
}

output "lambda_url" {
  description = "Lambda URL"
  value = aws_lambda_function_url.origin.function_url
}

output "cf_distribution_domain_url" {
  value = "https://${aws_cloudfront_distribution.cf_distribution.domain_name}"
}
