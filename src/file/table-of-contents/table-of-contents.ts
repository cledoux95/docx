// http://officeopenxml.com/WPtableOfContents.php
// http://www.datypic.com/sc/ooxml/e-w_sdt-1.html
import { Paragraph } from "@file/paragraph";
import { Run } from "@file/paragraph/run";
import { Begin, End, Separate } from "@file/paragraph/run/field";
import { FileChild } from "@file/file-child";
import { TableOfContentsFieldInstruction } from "./table-of-contents-field-instruction";
import { StructuredDocumentTagContent } from "../structured-document-tags/sdt-content";
import { StructuredDocumentTagProperties } from "../structured-document-tags/sdt-properties";
import { ITableOfContentsOptions } from "./table-of-contents-properties";

export class TableOfContents extends FileChild {
    public constructor(alias: string = "Table of Contents", properties?: ITableOfContentsOptions) {
        super("w:sdt");
        this.root.push(new StructuredDocumentTagProperties(alias));

        const content = new StructuredDocumentTagContent();

        const beginParagraph = new Paragraph({
            children: [
                new Run({
                    children: [new Begin(true), new TableOfContentsFieldInstruction(properties), new Separate()],
                }),
            ],
        });

        content.addChildElement(beginParagraph);

        const endParagraph = new Paragraph({
            children: [
                new Run({
                    children: [new End()],
                }),
            ],
        });

        content.addChildElement(endParagraph);

        this.root.push(content);
    }
}
