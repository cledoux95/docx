import { expect } from "chai";

import { Formatter } from "@export/formatter";

import { TableOfAuthorities } from "./table-of-authorities";

describe("Table of Authorities", () => {
    describe("#constructor", () => {
        it("should construct a TOA without options", () => {
            const toa = new TableOfAuthorities();
            const tree = new Formatter().format(toa);
            expect(tree).to.be.deep.equal(DEFAULT_TOA);
        });

        it("should construct a TOA with all the options and alias", () => {
            const props = {
                entriesFromBookmark: "B",
                specifiedIntegralCategory: "C",
                sequenceAndPageNumbersSeparator: "D",
                entryAndPageNumberSeparator: "E",
                removeFormatting: true,
                pageNumberSeparator: "G",
                showCategoryHeading: true,
                multiplePageReferenceSeparator: "L",
                passimReplacement: true,
                seqFieldIdentifierForPrefix: "S",
            };

            const toa = new TableOfAuthorities("Summary", props);
            const tree = new Formatter().format(toa);
            expect(tree).to.be.deep.equal(COMPLETE_TOA);
        });
    });
});

const DEFAULT_TOA = {
    "w:sdt": [
        {
            "w:sdtPr": [
                {
                    "w:alias": {
                        _attr: {
                            "w:val": "Table of Authorities",
                        },
                    },
                },
            ],
        },
        {
            "w:sdtContent": [
                {
                    "w:p": [
                        {
                            "w:r": [
                                {
                                    "w:fldChar": {
                                        _attr: {
                                            "w:fldCharType": "begin",
                                            "w:dirty": true,
                                        },
                                    },
                                },
                                {
                                    "w:instrText": [
                                        {
                                            _attr: {
                                                "xml:space": "preserve",
                                            },
                                        },
                                        "TOA",
                                    ],
                                },
                                {
                                    "w:fldChar": {
                                        _attr: {
                                            "w:fldCharType": "separate",
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    "w:p": [
                        {
                            "w:r": [
                                {
                                    "w:fldChar": {
                                        _attr: {
                                            "w:fldCharType": "end",
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

const COMPLETE_TOA = {
    "w:sdt": [
        {
            "w:sdtPr": [
                {
                    "w:alias": {
                        _attr: {
                            "w:val": "Summary",
                        },
                    },
                },
            ],
        },
        {
            "w:sdtContent": [
                {
                    "w:p": [
                        {
                            "w:r": [
                                {
                                    "w:fldChar": {
                                        _attr: {
                                            "w:fldCharType": "begin",
                                            "w:dirty": true,
                                        },
                                    },
                                },
                                {
                                    "w:instrText": [
                                        {
                                            _attr: {
                                                "xml:space": "preserve",
                                            },
                                        },
                                        'TOA \\a "A" \\b "B" \\c "C" \\d "D" \\f "F" \\h \\l "L" \\n "N" \\o "O" \\p "P" \\s "S" \\t "SL,1,SL,2" \\u \\w \\x \\z',
                                    ],
                                },
                                {
                                    "w:fldChar": {
                                        _attr: {
                                            "w:fldCharType": "separate",
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    "w:p": [
                        {
                            "w:r": [
                                {
                                    "w:fldChar": {
                                        _attr: {
                                            "w:fldCharType": "end",
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
