output "instance_id" {
  description = "ID of the assessment EC2 instance"
  value       = aws_instance.web.id
}

output "public_ip" {
  description = "Public IP of the assessment EC2 instance"
  value       = aws_instance.web.public_ip
}

output "public_dns" {
  description = "Public DNS of the assessment EC2 instance"
  value       = aws_instance.web.public_dns
}

output "security_group_id" {
  description = "ID of the assessment security group"
  value       = aws_security_group.web.id
}
