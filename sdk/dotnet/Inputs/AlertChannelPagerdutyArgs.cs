// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Checkly.Inputs
{

    public sealed class AlertChannelPagerdutyArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Pagerduty's account name.
        /// </summary>
        [Input("account")]
        public Input<string>? Account { get; set; }

        /// <summary>
        /// Pagerduty's service integration key.
        /// </summary>
        [Input("serviceKey", required: true)]
        public Input<string> ServiceKey { get; set; } = null!;

        /// <summary>
        /// Pagerduty's service name.
        /// </summary>
        [Input("serviceName")]
        public Input<string>? ServiceName { get; set; }

        public AlertChannelPagerdutyArgs()
        {
        }
    }
}
