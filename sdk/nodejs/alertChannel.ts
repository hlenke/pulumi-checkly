// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

/**
 * ## # checkly.AlertChannel
 *
 * The `checkly.AlertChannel` resource allows users to manage Checkly alert channels.
 *
 * Checkly's Alert Channels feature allows you to define global alerting channels for the checks in your account:
 *
 * ## Example Usage
 *
 * *An Email alert channel*
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as checkly from "@pulumi/checkly";
 *
 * const emailAc = new checkly.AlertChannel("email_ac", {
 *     email: {
 *         address: "john@example.com",
 *     },
 *     sendDegraded: true,
 *     sendFailure: false,
 *     sendRecovery: true,
 *     sslExpiry: true,
 *     sslExpiryThreshold: 22,
 * });
 * ```
 *
 * *A SMS alert channel*
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as checkly from "@pulumi/checkly";
 *
 * const smsAc = new checkly.AlertChannel("sms_ac", {
 *     sendFailure: true,
 *     sendRecovery: true,
 *     sms: {
 *         name: "john",
 *         number: "0123456789",
 *     },
 * });
 * ```
 *
 * *A Slack alert channel*
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as checkly from "@pulumi/checkly";
 *
 * const slackAc = new checkly.AlertChannel("slack_ac", {
 *     slack: {
 *         channel: "#checkly-notifications",
 *         url: "https://slack.com/webhook",
 *     },
 * });
 * ```
 *
 * *An Opsgenie alert channel*
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as checkly from "@pulumi/checkly";
 *
 * const opsgenieAc = new checkly.AlertChannel("opsgenie_ac", {
 *     opsgenie: {
 *         apiKey: "fookey",
 *         name: "opsalerts",
 *         priority: "foopriority",
 *         region: "fooregion",
 *     },
 * });
 * ```
 *
 * *An Pagerduty alert channel*
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as checkly from "@pulumi/checkly";
 *
 * const pagerdutyAc = new checkly.AlertChannel("pagerduty_ac", {
 *     pagerduty: {
 *         account: "checkly",
 *         serviceKey: "key1",
 *         serviceName: "pdalert",
 *     },
 * });
 * ```
 *
 * *An Webhook alert channel*
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as checkly from "@pulumi/checkly";
 *
 * const webhookAc = new checkly.AlertChannel("webhook_ac", {
 *     webhook: {
 *         method: "get",
 *         name: "foo",
 *         template: "footemplate",
 *         url: "http://example.com/foo",
 *         webhookSecret: "foosecret",
 *     },
 * });
 * ```
 *
 * *Connecting the alert channel to a check
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as checkly from "@pulumi/checkly";
 *
 * const example_check = new checkly.Check("example-check", {alertChannelSubscriptions: [
 *     {
 *         channelId: checkly_alert_channel.email_ac.id,
 *         activated: true,
 *     },
 *     {
 *         channelId: checkly_alert_channel.sms_ac.id,
 *         activated: true,
 *     },
 * ]});
 * ```
 *
 * *Connecting the alert channel to a check group
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as checkly from "@pulumi/checkly";
 *
 * const test_group1 = new checkly.CheckGroup("test-group1", {alertChannelSubscriptions: [
 *     {
 *         channelId: checkly_alert_channel.email_ac.id,
 *         activated: true,
 *     },
 *     {
 *         channelId: checkly_alert_channel.sms_ac.id,
 *         activated: true,
 *     },
 * ]});
 * ```
 */
export class AlertChannel extends pulumi.CustomResource {
    /**
     * Get an existing AlertChannel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AlertChannelState, opts?: pulumi.CustomResourceOptions): AlertChannel {
        return new AlertChannel(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'checkly:index/alertChannel:AlertChannel';

    /**
     * Returns true if the given object is an instance of AlertChannel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AlertChannel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AlertChannel.__pulumiType;
    }

    /**
     * :
     */
    public readonly email!: pulumi.Output<outputs.AlertChannelEmail | undefined>;
    public readonly opsgenie!: pulumi.Output<outputs.AlertChannelOpsgenie | undefined>;
    public readonly pagerduty!: pulumi.Output<outputs.AlertChannelPagerduty | undefined>;
    /**
     * . Possible values: `true` | `false`.
     */
    public readonly sendDegraded!: pulumi.Output<boolean | undefined>;
    /**
     * . Possible values: `true` | `false`.
     */
    public readonly sendFailure!: pulumi.Output<boolean | undefined>;
    /**
     * . Possible values: `true` | `false`.
     */
    public readonly sendRecovery!: pulumi.Output<boolean | undefined>;
    public readonly slack!: pulumi.Output<outputs.AlertChannelSlack | undefined>;
    /**
     * :
     */
    public readonly sms!: pulumi.Output<outputs.AlertChannelSms | undefined>;
    /**
     * . Possible values: `true` | `false`.
     */
    public readonly sslExpiry!: pulumi.Output<boolean | undefined>;
    /**
     * . Possible values between 1 and 30. Default is `30`.
     */
    public readonly sslExpiryThreshold!: pulumi.Output<number | undefined>;
    public readonly webhook!: pulumi.Output<outputs.AlertChannelWebhook | undefined>;

    /**
     * Create a AlertChannel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AlertChannelArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AlertChannelArgs | AlertChannelState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AlertChannelState | undefined;
            resourceInputs["email"] = state ? state.email : undefined;
            resourceInputs["opsgenie"] = state ? state.opsgenie : undefined;
            resourceInputs["pagerduty"] = state ? state.pagerduty : undefined;
            resourceInputs["sendDegraded"] = state ? state.sendDegraded : undefined;
            resourceInputs["sendFailure"] = state ? state.sendFailure : undefined;
            resourceInputs["sendRecovery"] = state ? state.sendRecovery : undefined;
            resourceInputs["slack"] = state ? state.slack : undefined;
            resourceInputs["sms"] = state ? state.sms : undefined;
            resourceInputs["sslExpiry"] = state ? state.sslExpiry : undefined;
            resourceInputs["sslExpiryThreshold"] = state ? state.sslExpiryThreshold : undefined;
            resourceInputs["webhook"] = state ? state.webhook : undefined;
        } else {
            const args = argsOrState as AlertChannelArgs | undefined;
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["opsgenie"] = args ? args.opsgenie : undefined;
            resourceInputs["pagerduty"] = args ? args.pagerduty : undefined;
            resourceInputs["sendDegraded"] = args ? args.sendDegraded : undefined;
            resourceInputs["sendFailure"] = args ? args.sendFailure : undefined;
            resourceInputs["sendRecovery"] = args ? args.sendRecovery : undefined;
            resourceInputs["slack"] = args ? args.slack : undefined;
            resourceInputs["sms"] = args ? args.sms : undefined;
            resourceInputs["sslExpiry"] = args ? args.sslExpiry : undefined;
            resourceInputs["sslExpiryThreshold"] = args ? args.sslExpiryThreshold : undefined;
            resourceInputs["webhook"] = args ? args.webhook : undefined;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(AlertChannel.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering AlertChannel resources.
 */
export interface AlertChannelState {
    /**
     * :
     */
    email?: pulumi.Input<inputs.AlertChannelEmail>;
    opsgenie?: pulumi.Input<inputs.AlertChannelOpsgenie>;
    pagerduty?: pulumi.Input<inputs.AlertChannelPagerduty>;
    /**
     * . Possible values: `true` | `false`.
     */
    sendDegraded?: pulumi.Input<boolean>;
    /**
     * . Possible values: `true` | `false`.
     */
    sendFailure?: pulumi.Input<boolean>;
    /**
     * . Possible values: `true` | `false`.
     */
    sendRecovery?: pulumi.Input<boolean>;
    slack?: pulumi.Input<inputs.AlertChannelSlack>;
    /**
     * :
     */
    sms?: pulumi.Input<inputs.AlertChannelSms>;
    /**
     * . Possible values: `true` | `false`.
     */
    sslExpiry?: pulumi.Input<boolean>;
    /**
     * . Possible values between 1 and 30. Default is `30`.
     */
    sslExpiryThreshold?: pulumi.Input<number>;
    webhook?: pulumi.Input<inputs.AlertChannelWebhook>;
}

/**
 * The set of arguments for constructing a AlertChannel resource.
 */
export interface AlertChannelArgs {
    /**
     * :
     */
    email?: pulumi.Input<inputs.AlertChannelEmail>;
    opsgenie?: pulumi.Input<inputs.AlertChannelOpsgenie>;
    pagerduty?: pulumi.Input<inputs.AlertChannelPagerduty>;
    /**
     * . Possible values: `true` | `false`.
     */
    sendDegraded?: pulumi.Input<boolean>;
    /**
     * . Possible values: `true` | `false`.
     */
    sendFailure?: pulumi.Input<boolean>;
    /**
     * . Possible values: `true` | `false`.
     */
    sendRecovery?: pulumi.Input<boolean>;
    slack?: pulumi.Input<inputs.AlertChannelSlack>;
    /**
     * :
     */
    sms?: pulumi.Input<inputs.AlertChannelSms>;
    /**
     * . Possible values: `true` | `false`.
     */
    sslExpiry?: pulumi.Input<boolean>;
    /**
     * . Possible values between 1 and 30. Default is `30`.
     */
    sslExpiryThreshold?: pulumi.Input<number>;
    webhook?: pulumi.Input<inputs.AlertChannelWebhook>;
}
