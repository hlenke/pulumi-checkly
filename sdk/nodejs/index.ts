// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export * from "./alertChannel";
export * from "./check";
export * from "./checkGroup";
export * from "./provider";
export * from "./snippet";

// Export sub-modules:
import * as config from "./config";
import * as types from "./types";

export {
    config,
    types,
};

// Import resources to register:
import { AlertChannel } from "./alertChannel";
import { Check } from "./check";
import { CheckGroup } from "./checkGroup";
import { Snippet } from "./snippet";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "checkly:index/alertChannel:AlertChannel":
                return new AlertChannel(name, <any>undefined, { urn })
            case "checkly:index/check:Check":
                return new Check(name, <any>undefined, { urn })
            case "checkly:index/checkGroup:CheckGroup":
                return new CheckGroup(name, <any>undefined, { urn })
            case "checkly:index/snippet:Snippet":
                return new Snippet(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("checkly", "index/alertChannel", _module)
pulumi.runtime.registerResourceModule("checkly", "index/check", _module)
pulumi.runtime.registerResourceModule("checkly", "index/checkGroup", _module)
pulumi.runtime.registerResourceModule("checkly", "index/snippet", _module)

import { Provider } from "./provider";

pulumi.runtime.registerResourcePackage("checkly", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:checkly") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
