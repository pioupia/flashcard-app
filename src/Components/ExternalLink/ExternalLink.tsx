import { ReactNode } from "react";

export default function ExternalLinkVue({ href, content, children }: LinkVueType) {
    return (
        <>
            <a href={href} rel={"noopener noreferrer"} target={"_blank"}>{ content || children }</a>
        </>
    );
}

export interface LinkVueType {
    href: string;
    content?: string;
    children?: ReactNode
}