module github.com/checkly/pulumi-checkly/provider

go 1.16

replace (
	// github.com/checkly/terraform-provider-checkly v1.4.2 => ../../terraform-provider-checkly
	github.com/hashicorp/go-getter v1.5.0 => github.com/hashicorp/go-getter v1.4.0
	github.com/hashicorp/terraform-plugin-sdk/v2 => github.com/pulumi/terraform-plugin-sdk/v2 v2.0.0-20210629210550-59d24255d71f
)

require (
	github.com/checkly/terraform-provider-checkly v1.5.0-rc1
	github.com/hashicorp/terraform-plugin-sdk v1.9.1 // indirect
	github.com/pulumi/pulumi-terraform-bridge/v3 v3.19.3
	github.com/pulumi/pulumi/sdk/v3 v3.25.0
)
