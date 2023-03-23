import React from "react";
import ExternalLinkVue, { LinkVueType } from "./ExternalLink";

export default function ExternalLink({ ...props }: LinkVueType) {
    return <ExternalLinkVue { ...props } />;
}