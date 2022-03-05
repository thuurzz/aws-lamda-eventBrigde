variable "region" {
  description = "Deployment Region"
  default     = "us-east-1"
}

# variable "aws_profile" {
#   description = "Given name in the credential file"
#   type        = string
#   default     = "artv-aws"
# }

# variable "shared_credentials_file" {
#   description = "Profile file with credentials to the AWS account"
#   type        = string
#   default     = "~/.aws/credentials"
# }

variable "tags" {
  description = "A map of tags to add to all resources."
  type        = map(string)
  default = {
    application = "Learning-Tutor"
    env         = "Test"
  }
}
