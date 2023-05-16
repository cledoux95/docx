// http://officeopenxml.com/WPfieldInstructions.php
import { TextAttributes } from "@file/paragraph/run/text-attributes";
import { SpaceType } from "@file/shared";
import { XmlComponent } from "@file/xml-components";

import { ITableOfAuthoritiesOptions } from "./table-of-authorities-properties";

export class TableOfAuthoritiesFieldInstruction extends XmlComponent {
    private readonly properties: ITableOfAuthoritiesOptions;

    public constructor(properties: ITableOfAuthoritiesOptions = {}) {
        super("w:instrText");

        this.properties = properties;

        this.root.push(new TextAttributes({ space: SpaceType.PRESERVE }));
        let instruction = "TOA";

        if (this.properties.entriesFromBookmark) {
            instruction = `${instruction} \\b "${this.properties.entriesFromBookmark}"`;
        }
        if (this.properties.specifiedIntegralCategory) {
            instruction = `${instruction} \\c "${this.properties.specifiedIntegralCategory}"`;
        }
        if (this.properties.sequenceAndPageNumbersSeparator) {
            instruction = `${instruction} \\d "${this.properties.sequenceAndPageNumbersSeparator}"`;
        }
        if (this.properties.entryAndPageNumberSeparator) {
            instruction = `${instruction} \\e "${this.properties.entryAndPageNumberSeparator}"`;
        }
        if (this.properties.removeFormatting) {
            instruction = `${instruction} \\f`;
        }
        if (this.properties.pageNumberSeparator) {
            instruction = `${instruction} \\g "${this.properties.pageNumberSeparator}"`;
        }
        if (this.properties.showCategoryHeading) {
            instruction = `${instruction} \\h"`;
        }
        if (this.properties.multiplePageReferenceSeparator) {
            instruction = `${instruction} \\l "${this.properties.multiplePageReferenceSeparator}"`;
        }
        if (this.properties.passimReplacement) {
            instruction = `${instruction} \\p`;
        }
        if (this.properties.seqFieldIdentifierForPrefix) {
            instruction = `${instruction} \\s "${this.properties.seqFieldIdentifierForPrefix}"`;
        }
        this.root.push(instruction);
    }
}
