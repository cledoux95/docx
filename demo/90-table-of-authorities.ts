// Table of contents
// Import from 'docx' rather than '../build' if you install from npm
import * as fs from "fs";
import { File, HeadingLevel, Packer, Paragraph, StyleLevel, TableOfAuthorities } from "../build";

// WordprocessingML docs for TableOfContents can be found here:
// http://officeopenxml.com/WPtableOfContents.php

// Let's define the properties for generate a TOC for heading 1-5 and MySpectacularStyle,
// making the entries be hyperlinks for the paragraph
const doc = new File({
    features: {
        updateFields: true,
    },
    styles: {
        paragraphStyles: [
            {
                id: "MySpectacularStyle",
                name: "My Spectacular Style",
                basedOn: "Heading1",
                next: "Heading1",
                quickFormat: true,
                run: {
                    italics: true,
                    color: "990000",
                },
            },
        ],
    },
    sections: [
        {
            children: [
                new TableOfAuthorities("Summary", {
                    showCategoryHeading: true,
                    specifiedIntegralCategory: "1",
                }),
                new Paragraph({
                    text: "Header #1",
                    heading: HeadingLevel.HEADING_1,
                    pageBreakBefore: true,
                }),
                new Paragraph("I'm a little text very nicely written.'"),
                new Paragraph({
                    text: "Header #2",
                    heading: HeadingLevel.HEADING_1,
                    pageBreakBefore: true,
                }),
                new Paragraph("I'm a other text very nicely written.'"),
                new Paragraph({
                    text: "Header #2.1",
                    heading: HeadingLevel.HEADING_2,
                }),
                new Paragraph("I'm a another text very nicely written.'"),
                new Paragraph({
                    text: "My Spectacular Style #1",
                    style: "MySpectacularStyle",
                    pageBreakBefore: true,
                }),
            ],
        },
    ],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
});
